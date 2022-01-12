import React, { ChangeEvent, FC, useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../store/store';
import {setSearchval, resetGiphyList, resetoffset} from "../../store/reducers/rootSlice"
import getList from "../../shared/HOC"

interface ISearchProps {
  SearchKeyApi:(limit:number,offset:number) => void,
};

const Search: FC<ISearchProps> = ({SearchKeyApi}) => {
    const [searchKey, setSearchKey] = useState<string>("");
    const [submitFlag, setsubmitFlag] = useState<boolean>(false);
    const limit=20;

    const dispatch = useDispatch();
    let giphyList = useSelector((state:RootState) => state.root.giphyList);

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearchKey(event.target.value);
        dispatch(setSearchval(event.target.value))
    };

    const onSearchSubmit = () => {
        setsubmitFlag(true);
        dispatch(resetGiphyList());
        dispatch(resetoffset());
    };

    useEffect(()=>{
        if(giphyList.length === 0 && submitFlag){
           SearchKeyApi(limit,0);
        }
        setsubmitFlag(false);
    },[giphyList]);
    
    return(  
        <>
            <input className="form-control me-2" data-testid="search" type="search" placeholder="Search" value={String(searchKey)} onChange={onHandleChange}/>
            <button className="btn btn-outline-success" data-testid="submitButton" type="submit" onClick={onSearchSubmit} disabled={searchKey===""}>Search</button>
        </>
            
    )
}

export default getList(Search);