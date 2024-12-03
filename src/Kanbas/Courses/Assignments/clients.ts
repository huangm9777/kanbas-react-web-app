import axios from "axios";


const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/assignments`;

export const fetchAssignmentsWithCid = async (courseId: string) => {
    const response = await axios
        .get(`${COURSES_API}/${courseId}`);

    return response.data;
};



export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
    // assignment._id = ;
    const response = await axios.post(
        `${COURSES_API}/${courseId}`,
        assignment
    );
    return response.data;
};

export const updateAssignment = async (courseId: string, assignment: any) => {
    const { data } = await axios.put(`${COURSES_API}/${courseId}`, assignment);
    return data;
};


export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${COURSES_API}/${assignmentId}`);
    return response.data;
};
