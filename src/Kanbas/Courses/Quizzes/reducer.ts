import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
};
const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        updateQuiz: (state, { payload: quiz }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q.qid === quiz.qid ? quiz : q
            ) as any;
        },

        // addModule: (state, { payload: module }) => {
        //     const newQuiz: any = {
        //         aid: new Date().getTime().toString(),
        //         lessons: [],
        //         name: module.name,
        //         course: module.course,
        //     };
        //     state.modules = [...state.modules, newModule] as any;
        // },
        // deleteModule: (state, { payload: moduleId }) => {
        //     state.modules = state.modules.filter(
        //         (m: any) => m._id !== moduleId);
        // },
        // updateModule: (state, { payload: module }) => {
        //     state.modules = state.modules.map((m: any) =>
        //         m._id === module._id ? module : m
        //     ) as any;
        // },
        // editModule: (state, { payload: moduleId }) => {
        //     state.modules = state.modules.map((m: any) =>
        //         m._id === moduleId ? { ...m, editing: true } : m
        //     ) as any;
        // },
    },
});
export const { setQuizzes,updateQuiz } =
quizzesSlice.actions;
export default quizzesSlice.reducer;