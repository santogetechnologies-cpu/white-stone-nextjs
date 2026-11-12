import LocalizedPage, {metadataFor} from '../components/LocalizedPage';
export const generateMetadata=()=>metadataFor('en');
export default function Home(){return <LocalizedPage lang='en'/>;}
