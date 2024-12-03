import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useParams, useLocation } from "react-router";
import { useEffect, useCallback, useState } from "react";
import * as client from './clients'





export default function QuizDetail() {


    const { qid } = useParams();
    
    const { pathname } = useLocation();

    const [quiz, setQuiz] = useState<any>({});

    

    // fetch quizzes from server
    const fetchQuiz = useCallback(async () => {
        const serverQuiz = await client.fetchQuizWithqid(qid as string);
        
        setQuiz(serverQuiz.data);
    }, [qid]);

    useEffect(() => {

        fetchQuiz();
    }, [fetchQuiz]);

    
    // quiz hashmap
    const QuizTypeMapping: { [key: string]: string } = {
        '1': 'Graded Quiz',
        '2': 'Practice Quiz',
        '3': 'Graded Survey',
        '4': 'Ungraded Survey',
    };
    const AssignmentGroupMapping: { [key: string]: string } = {
        '1': 'Quizzes',
        '2': 'Exams',
        '3': 'Assignments',
        '4': 'Project',
    };
    return (
        <div>
            <div className="d-flex justify-content-center">

                <Button variant="secondary" className='me-2 ' >Preview</Button>
                <Button variant="secondary" className='me-2 '
                    href={`#/Kanbas/Courses/${pathname.split("/")[3]}/Quizzes/${qid}/Editor/Details`}
                >
                    Edit
                </Button>
            </div>
            <br />
            <br />
            <Form>
                {/* quiz title */}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Quiz Title
                    </Col>
                    <Col sm={5} align="left">
                        {quiz?.title}
                    </Col>
                </Form.Group>

                {/* quiz type */}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Quiz Type
                    </Col>
                    <Col sm={5} align="left">
                        {QuizTypeMapping[quiz.type] || 'N/A'}
                    </Col>
                </Form.Group>
                {/*  point */}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Points
                    </Col>
                    <Col sm={5} align="left">
                        {quiz.point}
                    </Col>
                </Form.Group>
                {/* Assignment group */}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Assignment group
                    </Col>
                    <Col sm={5} align="left">
                        {AssignmentGroupMapping[quiz.assignmentGroup]}
                    </Col>
                </Form.Group>
                {/* isShuffle */}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Shuffle Answers
                    </Col>
                    <Col sm={5} align="left">
                        {quiz.isShuffle ? "Yes" : "No"}
                    </Col>
                </Form.Group>
                {/* timeLimit */}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Time Limit
                    </Col>
                    <Col sm={5} align="left">
                        {quiz.isisTimeLimit ? "No Time Limit" : quiz.timeLimit + " min"}
                    </Col>
                </Form.Group>
                {/* is Multiple Attempts */}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Multiple Attempts
                    </Col>
                    <Col sm={5} align="left">
                        {quiz.attempts > 0 ? "Yes" : "No"}
                    </Col>
                </Form.Group>
                {/* Multiple Attempts */}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        How Many Attempts
                    </Col>
                    <Col sm={5} align="left">
                        {quiz.isMultiAttempts ? quiz.attempts : "1"}
                    </Col>
                </Form.Group>
                {/* Show Correct Answers */}
                {quiz.attempts > 0 ? <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Show Correct Answers
                    </Col>
                    <Col sm={5} align="left">
                        {quiz.isShowAnswer ? "Yes" : "No"}
                    </Col>
                </Form.Group> : null}
                {/*  Access Code*/}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Access Code
                    </Col>
                    <Col sm={5} align="left">
                        {quiz.accessCode}
                    </Col>
                </Form.Group>
                {/* One Question at a Time */}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        One Question at a Time
                    </Col>
                    <Col sm={5} align="left">
                        {quiz.isOnePATime ? 'Yes' : 'No'}
                    </Col>
                </Form.Group>
                {/* Webcam Required */}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Webcam Required
                    </Col>
                    <Col sm={5} align="left">
                        {quiz.isCamReq ? 'Yes' : 'No'}
                    </Col>
                </Form.Group>
                {/*  Lock Questions After Answering*/}
                <Form.Group as={Row} className="mb-2 " >
                    <Col sm={5} align="right">
                        Lock Questions After Answering
                    </Col>
                    <Col sm={5} align="left">
                        {quiz.isLockAfter ? 'Yes' : 'No'}
                    </Col>
                </Form.Group>

                {/* date and time */}



            </Form>
            <Table style={{ width: "50%", margin: "0 auto" }}>
                <thead>
                    <tr>
                        <th>Due</th>
                        <th>For</th>
                        <th>Availible from</th>
                        <th>Until</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{`${new Date(quiz.dueDate)?.toLocaleDateString()} ${new Date(quiz.dueDate)?.toLocaleTimeString()}`}</td>
                        <td>Everyone</td>
                        <td>{`${new Date(quiz.availibleDate)?.toLocaleDateString()} ${new Date(quiz.availibleDate)?.toLocaleTimeString()}`}</td>
                        <td>{`${new Date(quiz.untilDate)?.toLocaleDateString()} ${new Date(quiz.untilDate)?.toLocaleTimeString()}`}</td>

                    </tr>
                </tbody>
            </Table>
        </div>
    )
}