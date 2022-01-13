// HOC is created for common api call for search and scroll
import React, { FunctionComponent } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { searchGiphy } from "../apiService/ApiService";
import { RootState } from '../store/store';
import { setGiphyimgList, setOffsetValue, setIsLoading, setIsFetching} from "../store/reducers/rootSlice"

const getList = (WrappedComponent : FunctionComponent<any>) => {
    const GetList = (props : any) => {
        const dispatch = useDispatch();
        let searchval = useSelector((state:RootState) => state.root.searchVal);

        const SearchKeyApi = async(limit: number, offset: number)=>{
            dispatch(setIsLoading(true))
            await searchGiphy(searchval,limit,offset)
            .then((response) => {
                dispatch(setIsLoading(false))
                dispatch(setGiphyimgList(response.data.data))
                dispatch(setOffsetValue());
                dispatch(setIsFetching(false))
              
            })
            .catch(error => {
                console.log('error',error);
                dispatch(setIsLoading(false))
            })
        }
        return <WrappedComponent {...props} SearchKeyApi={SearchKeyApi}/>
    }
    return GetList;
}
export default getList;