import { configureStore } from '@reduxjs/toolkit'
import userReducer from './features/userSlice'
// import quizzesReducer from './features/quizSlice'

import sectionSlice from './features/dashboardSlices/sectionSlice'
import assessmentSlice from './features/dashboardSlices/assessmentSlice'
import assessmentSubmissionSlice from './features/assessmentSlices/assessmentSubmissionSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        // quiz:quizzesReducer,
        section: sectionSlice,
        assessment : assessmentSlice,
        assessmentSubmission : assessmentSubmissionSlice
    }
})


