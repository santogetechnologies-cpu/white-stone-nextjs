/* Procedural flowing water. The photograph supplies only the view behind it. */
export class WindowWaterSurface {
  constructor(scene) {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'glass-film';
    scene.insertBefore(this.canvas, scene.querySelector('#water'));
    this.gl = this.canvas.getContext('webgl', { alpha: true, antialias: false });
    if (!this.gl) throw new Error('WebGL is required for the refracting water surface.');
    const gl = this.gl;
    const vertexSource = `
      attribute vec2 position;
      void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `;
    const fragmentSource = `
      precision highp float;
      uniform sampler2D photograph;
      uniform sampler2D wetMask;
      uniform vec2 resolution;
      uniform vec4 projection;
      uniform float elapsed;
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
      }
      float noise(vec2 p) {
        vec2 cell = floor(p), f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(mix(hash(cell), hash(cell + vec2(1.,0.)), f.x),
          mix(hash(cell + vec2(0.,1.)), hash(cell + 1.), f.x), f.y);
      }
      float filmHeight(vec2 p) {
        float flow = p.y - elapsed * .045;
        float broad = noise(vec2(p.x * 17., flow * 4.));
        float streams = noise(vec2(p.x * 59. + broad * 3., flow * 12.));
        float ribbon = sin(p.x * 102. + broad * 4. + sin(flow * 16.) * .7);
        return broad * .56 + streams * .24 + ribbon * .10;
      }
      void main() {
        vec2 screen = vec2(gl_FragCoord.x, resolution.y - gl_FragCoord.y);
        vec2 uv = screen / resolution;
        float wet = texture2D(wetMask, vec2(uv.x, 1. - uv.y)).a;
        if (wet < .002) { gl_FragColor = vec4(0.); return; }
        vec2 p = (screen - projection.xy) / projection.zw;
        float height = filmHeight(p);
        vec2 gradient = vec2(filmHeight(p + vec2(.002,0.)) - height,
          filmHeight(p + vec2(0.,.002)) - height) / .002;
        vec2 bend = gradient * vec2(.00012,.00008);
        vec2 samplePoint = clamp(p + bend, .001, .999);
        vec3 view = texture2D(photograph, vec2(samplePoint.x, 1. - samplePoint.y)).rgb;
        vec3 normal = normalize(vec3(-gradient * .035, 1.));
        float shine = pow(max(0., dot(normal, normalize(vec3(-.6,-.4,1.)))), 32.);
        float shadow = clamp(gradient.x * .003, -.035, .025);
        view = view * (1. - shadow) + vec3(.80,.94,1.) * shine * .065;
        gl_FragColor = vec4(view * wet, wet);
      }
    `;
    const compile = (type, source) => {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader));
      }
      return shader;
    };
    this.program = gl.createProgram();
    gl.attachShader(this.program, compile(gl.VERTEX_SHADER, vertexSource));
    gl.attachShader(this.program, compile(gl.FRAGMENT_SHADER, fragmentSource));
    gl.linkProgram(this.program);
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(this.program));
    }
    gl.useProgram(this.program);
    const buffer = gl.createBuffer();
    this.buffer = buffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, -1,1, 1,-1, 1,1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(this.program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
    this.uniforms = Object.fromEntries(['resolution', 'projection', 'elapsed'].map(name =>
      [name, gl.getUniformLocation(this.program, name)]));
    this.textures = [0, 1].map(unit => {
      gl.activeTexture(gl.TEXTURE0 + unit);
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      return texture;
    });
    gl.uniform1i(gl.getUniformLocation(this.program, 'photograph'), 0);
    gl.uniform1i(gl.getUniformLocation(this.program, 'wetMask'), 1);
    const image = new Image();
    image.src = '/assets/window.webp';
    this.ready = image.decode().then(() => {
      if (this.disposed) return;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, this.textures[0]);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    });
  }

  render(mask, projection, ratio, time) {
    const gl = this.gl;
    if (this.canvas.width !== mask.width || this.canvas.height !== mask.height) {
      this.canvas.width = mask.width;
      this.canvas.height = mask.height;
      gl.viewport(0, 0, mask.width, mask.height);
    }
    gl.useProgram(this.program);
    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this.textures[1]);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, mask);
    gl.uniform2f(this.uniforms.resolution, mask.width, mask.height);
    gl.uniform4f(this.uniforms.projection, projection.x * ratio, projection.y * ratio,
      projection.width * ratio, projection.height * ratio);
    gl.uniform1f(this.uniforms.elapsed, time);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }
  destroy() {
    this.disposed = true;
    for (const texture of this.textures) this.gl.deleteTexture(texture);
    this.gl.deleteBuffer(this.buffer);
    this.gl.deleteProgram(this.program);
    this.canvas.remove();
  }

}
