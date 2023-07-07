import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    SUCCESS: 'success',
})

const initialStateValue = {
    submissions: [],
    status: STATUSES.IDLE
}

const assessmentSubmissionSlice = createSlice({
    name: 'assessmentSubmission',
    initialState: initialStateValue,
    reducers: {
    }, 
    //  A "builder callback" function used to add more reducers, 

    extraReducers: (builder) => {
        builder
        .addCase(fetchAssessmentSubmission.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchAssessmentSubmission.fulfilled, (state, action) => {
            state.status = STATUSES.SUCCESS
            state.submissions = action.payload
            console.log("action.payload", action.payload)
        })
        .addCase(fetchAssessmentSubmission.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        })
    }
})

export default assessmentSubmissionSlice.reducer




// THUNKS - a piece of code that does some delayed work ( e.g api calls ect)


// NEW Way of writing thunk
// -----------------------
// ------------------------------------- identifier below
const token = Cookies.get('token')
export const fetchAssessmentSubmission = createAsyncThunk('assessmentSubmissions/fetch', async(api)=> { 
    const res = await fetch(api, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    const data = await res.json()
    return data
})




// OLD Way of writing thunk ( in this we dont have to use ExtraReducers and define all the dipatch ourseves [ eg taken from other app ])