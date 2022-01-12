import React, { FC} from 'react';
import Header from '../components/Header/Header';
import ThumbnailList from '../components/ThumbnailList/ThumbnailList';


interface IPage {
  
};

const Page: FC<IPage> = () => {
    return(  
       <>
        <Header/>
        <ThumbnailList/>
       </>
    )
};

export default Page;
