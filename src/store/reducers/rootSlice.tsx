import { createSlice, PayloadAction } from '@reduxjs/toolkit'

 type StoreStateType = {
    searchVal: string,
    offsetValue: number,
    giphyList: Array<any>,
    isLoading: boolean,
    isFetching: boolean,
  }
let initialState: StoreStateType= {
    searchVal: "",
    offsetValue: 0,
    giphyList: [],
    isLoading: true,
    isFetching: false
}
export const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        setSearchval: (state,action: PayloadAction<string>) => {
            state.searchVal = action.payload
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setOffsetValue: (state) => {
            state.offsetValue += 1
        },
        setGiphyimgList: (state,action: PayloadAction<Array<object>>) => {
            state.giphyList = [...state.giphyList,...action.payload];
            state.isLoading = false;
        },
        resetGiphyList: (state) => {
            state.giphyList = []
        },
        resetoffset: (state)=>{
            state.offsetValue = 0
        },
        setIsFetching: (state, action: PayloadAction<boolean>) => {
            state.isFetching = action.payload
        },
    }
})

export const {setSearchval, setGiphyimgList, resetGiphyList, setOffsetValue, resetoffset, setIsLoading, setIsFetching} =rootSlice.actions
export default rootSlice.reducer

