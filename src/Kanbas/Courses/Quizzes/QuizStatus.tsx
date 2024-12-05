import { useEffect,  useState } from "react";
import * as client from './clients'


export default function QuizStatus(
    { quiz }:
        {
            quiz: {
                qid: number,
                title: string,
                type: string,
                point: number,
                dueDate: string,
                availibleDate: string,
                untilDate: string
                numberOfP: number
                isPublished: boolean
            }
        }


) {

    const currentDate = new Date();
    const availableDate = new Date(quiz.availibleDate);
    const untilDate = new Date(quiz.untilDate);
    const dueDate = new Date(quiz.dueDate);

    const [numberOfP, setNumberOfP] = useState(0);
    
    // Determine availability status
    let status = "";
    if (currentDate < availableDate) {
        status = `Not available until ${availableDate.toLocaleDateString()} at ${availableDate.toLocaleTimeString()}`;
    } else if (currentDate >= availableDate && currentDate <= untilDate) {
        status = "Available";
    } else {
        status = "Closed";
    }
    const fetchQuestionNumber = async () => {
        const response = await client.findQuestionsWithQuizId(String(quiz.qid));
        if(response.status === 200) {
            const data = await response.data;
            setNumberOfP(data.length)
            
        } else {
            console.log(response.status)
        }
    }

    useEffect(() => {
        fetchQuestionNumber();
    },[])


    return (
        <div className="flex flex-col gap-2">
            <span style={{ fontWeight: "bold" }}>{status}</span> | Due {dueDate.toLocaleDateString()} {dueDate.toLocaleTimeString()} | {quiz.point} pts | {numberOfP} Questions
            
        </div>
    )
}