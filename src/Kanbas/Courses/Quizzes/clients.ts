import axios from "axios";


const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/api/quizzes`;

export const fetchQuizzesWithCid = async (courseId: string) => {
    const response = await axios
        .get(`${API}/course/${courseId}`);

    return response.data;
};

export const fetchQuizWithqid = async (qid: string) => {
    const response = await axios
        .get(`${API}/quiz/${qid}`);

    return response.data;
};


// export const unpublish = async (qid: number) => {
//     const response = await axios
//         .put(`${API}/${qid}`);

//     return response.data;
// };


export const updateQuiz = async (qid: string, quiz: any) => {
    const { data } = await axios.put(`${API}/${qid}`, quiz);
    return data;
};
// export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
//     // assignment._id = ;
//     const response = await axios.post(
//         `${COURSES_API}/${courseId}`,
//         assignment
//     );
//     return response.data;
// };



// export const deleteAssignment = async (assignmentId: string) => {
//     const response = await axios.delete(`${COURSES_API}/${assignmentId}`);
//     return response.data;
// };
