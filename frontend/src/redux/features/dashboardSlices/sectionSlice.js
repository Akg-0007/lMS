import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { json } from "react-router-dom";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    SUCCESS: 'success',
})

const initialStateValue = {
    sections: [],
    status: STATUSES.IDLE
}

const sectionSlice = createSlice({
    name: 'section',
    initialState: initialStateValue,
    reducers: {
        // reducers goes here
    }, 
    //  A "builder callback" function used to add more reducers, 

    extraReducers: (builder) => {
        builder
        .addCase(fetchSections.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchSections.fulfilled, (state, action) => {
            state.status = STATUSES.SUCCESS
            state.sections = action.payload
        })
        .addCase(fetchSections.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        })
    }
})

export default sectionSlice.reducer




// THUNKS - a piece of code that does some delayed work ( e.g api calls ect)


// NEW Way of writing thunk
// -----------------------
// ------------------------------------- identifier below
const token = Cookies.get('token')
export const fetchSections = createAsyncThunk('sections/fetch', async(api)=> { 
    const res = await fetch(api, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    const data = await res.json()
    return data
})




// OLD Way of writing thunk ( in this we dont have to use ExtraReducers and define all the dipatch ourseves [ eg taken from other app ])