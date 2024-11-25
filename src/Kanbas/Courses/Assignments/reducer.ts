import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
};
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {


        setAssignment: (state, action) => {
            state.assignments = action.payload;
        },


        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                description: assignment.description,
                course: assignment.course
            }
            state.assignments = [...assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: assignmentId }) => {

            state.assignments = state.assignments
                .filter((a: any) => a._id !== assignmentId)

        },
        updateAssignment: (state, { payload: assignment }) => {

            state.assignments = state.assignments.map((a: any) => a._id === assignment._id ? assignment : a);


        },
        editAssignement: (state, { payload: assignment }) => {

            state.assignments = state.assignments.map((a: any) => a._id === assignment._id ? { ...a, assignment } : a) as any
        }
    },
});
export const {setAssignment, addAssignment, deleteAssignment, updateAssignment, editAssignement } = assignmentSlice.actions;
export default assignmentSlice.reducer;