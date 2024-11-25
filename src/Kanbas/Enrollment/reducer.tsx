import { createSlice } from "@reduxjs/toolkit";
// import { enrollments } from "../Database";
const initialState = {
    enrollments: [],
};
const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        setEnrollments: (state, action ) => {
            state.enrollments = action.payload;
        },
        addEnrollment: (state, { payload: enrollment }) => {
            
            const newModule: any = {
                _id: new Date().getTime().toString(),
                user: enrollment.user,
                course: enrollment.course,
            };
            state.enrollments = [...state.enrollments, newModule] as any;
        },
        deleteEnrollment: (state, { payload: enrollment }) => {

            state.enrollments = state.enrollments
            .filter((e: any) => !(e.course=== enrollment.course&&e.user===enrollment.user))
            
        },

    },
});
export const { addEnrollment,deleteEnrollment,setEnrollments } =
    enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;