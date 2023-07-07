// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import quizService from "../../services/quizService";

// const initialState = {
//   quizzes: [],
//   responseStatus: "",
//   responseMessage: "",
// };

// export const createQuiz = createAsyncThunk(
//   "quiz/create",
//   async ({ 
//      questionDescription, questionImage , optionType, marks, option1, option2, option3, option4 
//   }, { rejectWithValue }) => {
//     try {
//       const res = await quizService.create({ 
//           question_text: questionDescription,
//           image_url: questionImage,
//           question_type: optionType,
//           marks: marks,
//           options: [
//             {
//               option_text: option1,
//               is_correct: true
//             },
//             {
//               option_text: option2,
//               is_correct: false
//             },
//             {
//               option_text: option3,
//               is_correct: false
//             },
//             {
//               option_text: option4,
//               is_correct: false
//             }
//           ]
        
//        });
//        console.log(res.data)
//       return res.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

// export const retrieveQuizzes = createAsyncThunk(
//   "quizzes/retrieve",
//   async () => {
//     const res = await quizService.getAll();
//     return res.data;
//   }
// );

// export const updateQuiz = createAsyncThunk(
//   "quizzes/update",
//   async ({ id, data }) => {
//     const res = await quizService.edit(id, data);
//     return res.data;
//   }
// );

// export const deleteQuiz = createAsyncThunk(
//   "quizzes/delete",
//   async (id) => {
//     await quizService.delete(id);
//     return id;
//   }
// );



// const quizzesSlice = createSlice({
//   name: "quizzes",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createQuiz.pending, (state) => {
//         state.responseStatus = "pending";
//       })
//       .addCase(createQuiz.fulfilled, (state, action) => {        
//         // state.quizzes.push(action.payload); 
//        console.log("sta",state,action.payload)
//         state.responseStatus = "success";
//         state.responseMessage = "Quiz created successfully";
        
//       })
//       .addCase(createQuiz.rejected, (state) => {
//         state.responseStatus = "rejected";
//       })
//       .addCase(retrieveQuizzes.fulfilled, (state, action) => {
//         state.quizzes = action.payload;
//       })
//       .addCase(updateQuiz.fulfilled, (state, action) => {
//         const index = state.quizzes.findIndex((quiz) => quiz.id === action.payload.id);
//         if (index !== -1) {
//           state.quizzes[index] = { ...state.quizzes[index], ...action.payload };
//         }
//       })
//       .addCase(deleteQuiz.fulfilled, (state, action) => {
//         state.quizzes = state.quizzes.filter((quiz) => quiz.id !== action.payload);
//       })
      
//   },
// });

// export default quizzesSlice.reducer;

