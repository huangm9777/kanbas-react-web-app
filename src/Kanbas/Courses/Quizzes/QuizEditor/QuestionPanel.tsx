import { useEffect, useCallback, useState } from "react";
import * as quizClient from '.././clients'
import { useParams, useLocation } from "react-router";
import { CiCircleQuestion } from "react-icons/ci";
import { useNavigate } from "react-router-dom"; 


export default function QuestionPanel() {

    const navigate = useNavigate();
    const { qid } = useParams();
    const { pathname } = useLocation();
    const { cid } = useParams();

    const [questions, setQuestions] = useState(['']);

    const addNewQuestion = async () => {
        const quid = Date.now();
        navigate(`/Kanbas/Courses/${pathname.split("/")[3]}/Quizzes/${qid}/Editor/Details/${quid}`);

    }

    const fetchQuestion = async () => {
        if (qid) {
            const response = await quizClient.findQuestionsWithQuizId(qid);
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
                onClick={addNewQuestion}
            >
                + New Qestion
            </button>
            <ul className="list-group">
                {questions.map((question: any) => (
                    <li className="list-group-item">

                        <div >
                            <CiCircleQuestion
                                style={{ textDecoration: 'none', color: 'red' }} />

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