import { IoEllipsisVertical } from "react-icons/io5";
import { useLocation } from "react-router";
import * as client from "./clients"
import { useSelector, useDispatch } from "react-redux";
import { updateQuiz } from './reducer';
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaBan } from "react-icons/fa";
import { useState } from "react";


export default function QuizOperation(
    { quiz }:
        {
            quiz: {
                qid: number,
                title: string,
                type: string,
                point: number,
                dueDate: string,
                availibleDate: string,
                untilDate: string,
                numberOfP: number,
                isPublished: boolean,
            }
        }
) {
    // const { qid } = useParams();
    const { pathname } = useLocation();
    const [isPublished, setIsPublished] = useState(quiz.isPublished);
    const courseId = pathname.split('/')[3] as string;


    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    const dbQuiz = quizzes.find((a: any) => a.qid === quiz.qid);
    const dispatch = useDispatch();
    const handlePublish = async () => {
        const updatedQuiz = { ...dbQuiz, isPublished: !dbQuiz.isPublished };
        setIsPublished(!isPublished);
        // dbQuiz.isPublished = !dbQuiz.isPublished;
        await client.updateQuiz(dbQuiz.qid, updatedQuiz);
        dispatch(updateQuiz(dbQuiz));
    }

    return (
        <div>


            <div className="dropdown d-inline me-1 float-end">


                <IoEllipsisVertical className="fs-4 float-end" data-bs-toggle="dropdown" />

                <ul className="dropdown-menu">
                    <li>
                        <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href={`#/Kanbas/Courses/${courseId}/Quizzes/${quiz.qid}`}>
                            Edit
                        </a>
                    </li>
                    <li>
                        <button id="wd-publish-modules-only-button" className="dropdown-item" >
                            Delete
                        </button>
                    </li>
                    <li>
                        <button id="wd-unpublish-all-modules-and-items" className="dropdown-item" onClick={handlePublish}>

                            {isPublished ? "Unpublish" : "Publish"}
                        </button>
                    </li>


                </ul>

                <span className="float-end">
                    {isPublished ?

                        <GreenCheckmark /> :
                        <FaBan color="red" />
                    }
                </span>
            </div>
        </div>
    )
}