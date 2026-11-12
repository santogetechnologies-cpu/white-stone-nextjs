import LocalizedPage, {metadataFor,pathsFor} from '../../components/LocalizedPage';
export const dynamicParams=false;
export const generateStaticParams=()=>pathsFor('en');
export const generateMetadata=({params})=>metadataFor('en',params);
export default function Page({params,searchParams}){return <LocalizedPage lang='en' params={params} searchParams={searchParams}/>;}
