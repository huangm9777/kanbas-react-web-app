import "./index.css";
import { BsGripVertical } from "react-icons/bs";
// import { IoEllipsisVertical } from "react-icons/io5";

import QuizControl from './QuizControl';
import QuizStatus from "./QuizStatus";
import QuizOperation from "./QuizOperation";
import { useEffect, useCallback } from "react";
import * as client from "./clients";
import { useParams } from "react-router";
import { setQuizzes } from "./reducer";
import { useSelector, useDispatch } from "react-redux";





export default function Quizzes() {
    // check if user is faculty
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFACULTY = currentUser.role === "FACULTY";

    // const currentDateTime = new Date();
    // get course id from path
    const {cid } = useParams();
    // initial dispatch
    const dispatch = useDispatch();
    // get assignment from redux
    const { quizzes } = useSelector((state: any) => state.quizzesReducer);
    // fetch quizzes from server
    const fetchQuizzes = useCallback(async () => {
        const serverQuizzes = await client.fetchQuizzesWithCid(cid as string);
        dispatch(setQuizzes(serverQuizzes));
        // console.log(quizzes);
    }, [cid, dispatch]);

    useEffect(() => {

        fetchQuizzes();
      }, [fetchQuizzes]);
    
      

    // const quizProperties = [{
    //     qid: 1,
    //     assignmentGroup: "Mathematics",
    //     isShuffle: true,
    //     timeLimit: 30, // in minutes
    //     attempts: 3,
    //     isShowAnswer: false,
    //     accessCode: "MATH101",
    //     isOnePATime: true,
    //     isCamReq: false,
    //     isLockAfter: false,
    // },
    // {
    //     qid: 2,
    //     assignmentGroup: "Mathematics",
    //     isShuffle: true,
    //     timeLimit: 30, // in minutes
    //     attempts: 3,
    //     isShowAnswer: false,
    //     accessCode: "MATH101",
    //     isOnePATime: true,
    //     isCamReq: false,
    //     isLockAfter: false,
    // },
    // ]




    return (
        <div id="wd-assignments" className="container">
            {/* render the quiz control */}
            {isFACULTY && <QuizControl />}
            <br />
            <br />
            <br />


            <ul id="wd-modules" className="list-group rounded-0">


                <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">


                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        Assignment Quizzes

                        {/* <ModulesControlButtons /> */}
                    </div>

                    <ul className="wd-lessons list-group rounded-0">

                        {quizzes.map((quiz: any) => (
                            <li className="wd-lesson list-group-item p-3 ps-1">

                                <div >
                                    <BsGripVertical className="me-2 fs-3 float-start" />
                                    {/* control button for quiz CRUD */}
                                    {isFACULTY &&
                                        <QuizOperation quiz={quiz} />
                                    }


                                    <div className="d-flex flex-column">
                                        <strong>
                                            <a className="wd-assignment-link"
                                                href={`#/Kanbas/Courses/${cid}/Quizzes/${quiz.qid}`}
                                                style={{ textDecoration: 'none', color: 'black' }}>

                                                {quiz.title}
                                            </a>
                                        </strong>
                                        <span className="text-muted">
                                            <QuizStatus quiz={quiz} />
                                        </span>
                                    </div>
                                </div>


                            </li>
                        ))
                        }


                    </ul>
                </li>
            </ul>


        </div>
    )
}