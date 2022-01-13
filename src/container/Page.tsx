import React, { FC} from 'react';
import Header from '../components/Header/Header';
import ThumbnailList from '../components/ThumbnailList/ThumbnailList';


type Page = {
  
};

const Page: FC<Page> = () => {
    return(  
       <>
        <Header/>
        <ThumbnailList/>
       </>
    )
};

export default Page;
