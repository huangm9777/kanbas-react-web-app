import { useEffect, useCallback, useState } from "react";
import * as quizClient from '.././clients'
import { useParams, useLocation } from "react-router";
import { CiCircleQuestion } from "react-icons/ci";


export default function QuestionPanel() {

    const { qid } = useParams();
    const { cid } = useParams();

    const [questions, setQuestions] = useState(['']);

    const addNewQuestion = async () =>{
        // const qid = 
    }

    const fetchQuestion = async () => {
        if (qid) {
            const response = await quizClient.findQuestionsWithQuizId(qid);
            console.log(response);
            setQuestions(response.data)
        }
    }


    useEffect(() => {
        fetchQuestion();
    }, []);

    return (

        <div className="container">

            <button
                type="button"
                className="btn btn-secondary "
            >
                + New Qestion
            </button>
            <ul className="list-group">
                {questions.map((question: any) => (
                    <li className="list-group-item">

                        <div >
                            <CiCircleQuestion 
                                style={{ textDecoration: 'none', color: 'red' }}/>

                            <a className="wd-assignment-link"
                            
                                href={`#/Kanbas/Courses/${cid}/Quizzes/${qid}/Editor/Details/${question.quid}`}
                                style={{ textDecoration: 'none', color: 'red' }} >
                                {question.title}
                            </a>

                        </div>


                    </li>
                ))
                }
            </ul>

        </div>
    )
}