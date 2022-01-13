import React, { FC, useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../store/store';
import { setGiphyimgList, setOffsetValue, setIsLoading, setIsFetching } from "../../store/reducers/rootSlice"
import { getGiphyList } from "../../apiService/ApiService";
import Modal from '../Modal/Modal';
import getList from "../../shared/HOC";

type ThumbnailProps = {
    SearchKeyApi : any
};

const ThumbnailList: FC<ThumbnailProps> = ({SearchKeyApi}) => {

    const [offset, setOffset] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedGif, setselectedGif] = useState<object>({});
    const limit = 20;
    const dispatch = useDispatch();
    const searchval = useSelector((state:RootState) => state.root.searchVal);
    const giphyList = useSelector((state:RootState) => state.root.giphyList);
    const offsetValue = useSelector((state:RootState) => state.root.offsetValue);
    const isLoading = useSelector((state:RootState) => state.root.isLoading);
    const isFetching = useSelector((state:RootState) => state.root.isFetching);
    

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, );

    const handleScroll = (): void => {
        let scrollTop = document.documentElement.scrollTop;
        let windowHeight = window.innerHeight;
        let bodyHeight = document.body.scrollHeight;
        if(scrollTop + windowHeight >= bodyHeight ){
            dispatch(setIsFetching(true))
        };
    };
    
    useEffect(()=>{
        if(isFetching){
        let val = offset;
        val = limit * offsetValue;
        setOffset(val);
        searchval !== "" ? SearchKeyApi(limit,val) : callApi(limit,val);}
    },[isFetching])

    const callApi = (limit: number, offset1: number): void => {
        dispatch(setIsLoading(true));
        getGiphyList(limit,offset1)
            .then((response) => {
                dispatch(setGiphyimgList(response.data.data))
                dispatch(setOffsetValue());
                dispatch(setIsLoading(false));
                dispatch(setIsFetching(false))
            })
            .catch(error => {
                console.log('error',error);
                dispatch(setIsLoading(false));
            })
    };

    useEffect(() => {
        callApi(limit,offset);
    },[]);
    
    const imageOnClickHandle = (item:any): void => {
        setShowModal(true);
        let gifObj = {
            'title' : item.title,
            'original' : item.images.original
        };
        setselectedGif(gifObj);
    };
    
    return (
        <>
        <div className="row m-1">
            {/* here I am using index as a key because of some giphy are repeated */}
            {giphyList.map((item,index)=>(
                <div className="col-11 col-sm-4 col-md-3 col-lg-3  p-0 m-0" key={index} onClick={()=>imageOnClickHandle(item)}>
                    <div className="card m-1" >
                        <img height="150" src={item.images.downsized_still.url} alt={item.title}/>
                    </div>
                </div>
            ))}
        </div>
         {isLoading?
            <div className="d-flex justify-content-center m-2">
                <div className="spinner-border" style={{width: '3rem', height: '3rem'}} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            : giphyList.length == 0 && <p>No data found</p>
        }
        <Modal show={showModal} setShowModal={setShowModal} selectedgif={selectedGif}/>
        </>
      );
  };

  export default getList(ThumbnailList);