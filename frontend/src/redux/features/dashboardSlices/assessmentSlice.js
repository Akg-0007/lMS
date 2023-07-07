import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
    SUCCESS: 'success',
})

const initialStateValue = {
    assessments: [],
    status: STATUSES.IDLE
}

const assessmentSlice = createSlice({
    name: 'assessment',
    initialState: initialStateValue,
    reducers: {
        createAssessment: (state, action) => {
            state.assessments.assignments.push(action.payload)
        }
        // reducers goes here
    }, 
    //  A "builder callback" function used to add more reducers, 

    extraReducers: (builder) => {
        builder
        .addCase(fetchAssessments.pending, (state, action) => {
            state.status = STATUSES.LOADING
        })
        .addCase(fetchAssessments.fulfilled, (state, action) => {
            state.status = STATUSES.SUCCESS
            state.assessments = action.payload
        })
        .addCase(fetchAssessments.rejected, (state, action) => {
            state.status = STATUSES.ERROR
        })
    }
})

export const {  createAssessment } = assessmentSlice.actions

export default assessmentSlice.reducer




// THUNKS - a piece of code that does some delayed work ( e.g api calls ect)


// NEW Way of writing thunk
// -----------------------
// ------------------------------------- identifier below
const token = Cookies.get('token')
export const fetchAssessments = createAsyncThunk('assessments/fetch', async(api)=> { 
    const res = await fetch(api, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
    const data = await res.json()
    return data
})




// OLD Way of writing thunk ( in this we dont have to use ExtraReducers and define all the dipatch ourseves [ eg taken from other app ])