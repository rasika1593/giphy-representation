import axios from "axios";

const api_key = "tVaJe9QRTL6VZp9xhBkogbNWFTI9hYnJ"
const baseURL = "https://api.giphy.com/v1/gifs/";

export const getGiphyList = async(limit: number, offset: number) => {
    const result = await axios.get(baseURL + 'trending',{
        params:{
            api_key : api_key,
            limit : limit,
            offset : offset
        }
    })
    return result;
    
};

export const searchGiphy = async(searchKey: String,limit: number,offset: number) => {
    const result  = await axios.get(baseURL + "search",{
        params:{
            api_key : api_key,
            q : searchKey,
            limit : limit,
            offset : offset
        }
    })
    return result;
};