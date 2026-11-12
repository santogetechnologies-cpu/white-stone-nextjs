import LocalizedPage, {metadataFor} from '../components/LocalizedPage';
export const generateMetadata=()=>metadataFor('de');
export default function Home(){return <LocalizedPage lang='de'/>;}
