import {handleInquiry} from '../../lib/inquiry';
export async function POST(request){return handleInquiry(request,process.env);}
