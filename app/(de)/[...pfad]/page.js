import LocalizedPage, {metadataFor,pathsFor} from '../../components/LocalizedPage';
export const dynamicParams=false;
export const generateStaticParams=()=>pathsFor('de');
export const generateMetadata=({params})=>metadataFor('de',params);
export default function Page({params,searchParams}){return <LocalizedPage lang='de' params={params} searchParams={searchParams}/>;}
