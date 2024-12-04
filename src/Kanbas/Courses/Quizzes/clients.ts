import axios from "axios";


const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/api/quizzes`;

export const fetchQuizzesWithCid = async (courseId: string) => {
    const response = await axios
        .get(`${API}/course/${courseId}`);

    return response;
};

export const findQuestionsWithQuizId = async (qid: string) => {
    const response = await axios
        .get(`${API}/question/${qid}`);
    return response;
};

export const fetchQuizWithqid = async (qid: string) => {
    const response = await axios
        .get(`${API}/quiz/${qid}`);

    return response;
};

export const updateQuiz = async (qid: string, quiz: any) => {
    const  data  = await axios.put(`${API}/${qid}`, quiz);
    return data;
};

export const createQuiz= async (quiz: any) => {
    // assignment._id = ;
    const response = await axios.post(
        `${API}/${quiz.qid}`,
        quiz
    );
    return response;
};





// export const deleteAssignment = async (assignmentId: string) => {
//     const response = await axios.delete(`${COURSES_API}/${assignmentId}`);
//     return response.data;
// };
