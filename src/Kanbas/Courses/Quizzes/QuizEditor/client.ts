import axios from "axios";


const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/api/question`;


export const findQuestionsWithQuId = async (quid: string) => {
    const response = await axios
        .get(`${API}/${quid}`);
    return response;
};

export const saveQuestion= async (question: any) => {
    
    const response = await axios.post(
        `${API}/${question.quid}`,
        question
    );
    return response;
};
