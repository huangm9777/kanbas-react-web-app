import axios from "axios";


const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const API = `${REMOTE_SERVER}/api/enrollments`;


export const enrollCourses = async (userId: string, courseId: string) => {
    const { data } = await axios.put(API, {
        data: { userId, courseId }, // Pass the payload inside `data`
    });
    return data;
};


export const unenrollCourses = async (userId: string, courseId: string) => {
    const { data } = await axios.delete(API, {
        data: { userId, courseId }, // Pass the payload inside `data`
    });
    return data;
};

export const findAllEnrollments = async () => {
    const { data } = await axios.get(API);
    return data;
};