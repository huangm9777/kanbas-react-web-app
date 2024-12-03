import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams, useLocation } from "react-router";
import { useEffect, useCallback, useState } from "react";
import * as client from '../clients'
import InputGroup from 'react-bootstrap/InputGroup';
// import ReactQuill from "react-quill"; // WYSIWYG Editor
import { useNavigate } from "react-router-dom"; 


export default function QuizEditorDetail(propQuiz: any) {
    const navigate = useNavigate();

    const [quiz, setQuiz] = useState(propQuiz);

    const { qid } = useParams();
    const { pathname } = useLocation();


    // save quiz
    const saveQuiz = async () => {

        const status = await client.updateQuiz(qid as string, quiz);
        console.log(status);
        if (status.status === 200) {
            console.log("Quiz saved successfully!");
            navigate(`/Kanbas/Courses/${pathname.split("/")[3]}/Quizzes/${pathname.split("/")[5]}`);
        } else {
            console.error("Failed to save quiz. Status:", status);
            alert("Failed to save quiz. Please try again.");
        }

    }
    // fetch quizzes from server
    const fetchQuiz = useCallback(async () => {
        const serverQuiz = await client.fetchQuizWithqid(qid as string);

        setQuiz(serverQuiz.data);
    }, [qid]);

    useEffect(() => {
        fetchQuiz();
    }, [fetchQuiz]);

    return (

        <div id="wd-assignments-editor" className='container'>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

                    <Form.Control type="text" placeholder=""
                        value={quiz.title}
                        onChange={(e) => setQuiz({ ...quiz, title: e.target.value })}

                    />


                </Form.Group>



            </Form>
            <label htmlFor="question" className="form-label fw-bold">
                Quiz instructions:
            </label>
            {/* <ReactQuill
                // value={question}
                // onChange={setQuestion}
                theme="snow"
                className="mb-3"
            /> */}



            <br />



            <Form>
                {/*  Quiz Type*/}
                <Form.Group as={Row} className="mb-2 " controlId="formPoints">
                    <Form.Label column sm={5} align="right">
                        Quiz Type
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Select value={quiz.type}

                            onChange={(e) => setQuiz({ ...quiz, type: e.target.value })}
                        >

                            <option value='1'>Graded Quiz</option>
                            <option value='2'>Practice Quiz</option>
                            <option value='3'>Graded Survey</option>
                            <option value='4' >Ungraded Survey</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                {/* point */}
                <Form.Group as={Row} className="mb-2 " controlId="formPoints">
                    <Form.Label column sm={5} align="right">
                        Points
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="number" placeholder='' defaultValue={quiz.point}
                            onChange={(e) => setQuiz({ ...quiz, point: e.target.value })}

                        />
                    </Col>
                </Form.Group>

                {/* Assignment Group */}
                <Form.Group as={Row} className="mb-2 " controlId="formPoints">
                    <Form.Label column sm={5} align="right">
                        Assignment Group
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Select value={quiz.assignmentGroup}
                            onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}
                        >

                            <option value="1">Quizzes </option>
                            <option value="2">Exams</option>
                            <option value="3">Assignments</option>
                            <option value="4">Project</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                {/* Assignment Group */}
                <Form.Group as={Row} className="mb-2 " controlId="formPoints">


                    <Form.Label column sm={5} align="right">

                    </Form.Label>
                    <Col sm={5}>
                        <Form.Label className='bold'>Options</Form.Label>

                        <div >
                            <Form.Check
                                label='Shuffle Answers'
                                checked={quiz.isShuffle}
                                onChange={(e) => setQuiz({ ...quiz, isShuffle: e.target.checked })}

                            />
                            <Form.Check
                                checked={quiz.isShowAnswer}
                                onChange={(e) => setQuiz({ ...quiz, isShowAnswer: e.target.checked })}
                                label='Show Correct Answers'
                            />
                            <Form.Check
                                checked={quiz.isOnePATime}
                                onChange={(e) => setQuiz({ ...quiz, isOnePATime: e.target.checked })}
                                label='One Question at a Time'
                            />
                            <Form.Check
                                checked={quiz.isCamReq}
                                onChange={(e) => setQuiz({ ...quiz, isCamReq: e.target.checked })}
                                label='Webcam Required'
                            />
                            <Form.Check
                                checked={quiz.false}
                                onChange={(e) => setQuiz({ ...quiz, false: e.target.checked })}
                                label='Lock Questions After Answering'
                            />

                            <InputGroup className="mb-3" >
                                <InputGroup.Checkbox aria-label="a"
                                    checked={quiz.isAccessCode}
                                    onChange={(e) => setQuiz({ ...quiz, isAccessCode: e.target.checked })}
                                />
                                <InputGroup.Text id="inputGroup-sizing-sm">Access Code</InputGroup.Text>
                                <Form.Control
                                    disabled={!quiz.isAccessCode}
                                    aria-label="Text input with checkbox"
                                    value={quiz.accessCode}
                                    onChange={(e) => setQuiz({ ...quiz, accessCode: e.target.value })}
                                />
                            </InputGroup>


                            <InputGroup className="mb-3" >
                                <InputGroup.Checkbox aria-label="a"
                                    checked={quiz.isTimeLimit}
                                    onChange={(e) => setQuiz({ ...quiz, isTimeLimit: e.target.checked })}
                                />
                                <InputGroup.Text id="inputGroup-sizing-sm">Time Limit</InputGroup.Text>
                                <Form.Control
                                    disabled={!quiz.isTimeLimit}
                                    aria-label="Text input with checkbox"
                                    type='number'
                                    value={quiz.timeLimit}
                                    onChange={(e) => setQuiz({ ...quiz, timeLimit: e.target.value })}

                                />
                            </InputGroup>

                            <InputGroup className="mb-3" >
                                <InputGroup.Checkbox aria-label="a"
                                    checked={quiz.isMultiAttempts}
                                    onChange={(e) => setQuiz({ ...quiz, isMultiAttempts: e.target.checked })}
                                />
                                <InputGroup.Text id="inputGroup-sizing-sm">Multiple Attempts</InputGroup.Text>
                                <Form.Control
                                    disabled={!quiz.isMultiAttempts}
                                    type='number'
                                    value={quiz.attempts}
                                    onChange={(e) => setQuiz({ ...quiz, attempts: e.target.value })}
                                    aria-label="Text input with checkbox"
                                />
                            </InputGroup>

                        </div>
                    </Col>
                </Form.Group>






                <Form.Group as={Row} className="mb-5 " controlId="formPoints">
                    <Form.Label column sm={5} align="right">
                        Assign
                    </Form.Label >

                    <Col sm={5} className="border border-secondary rounded  pb-3"  >


                        <Form.Label column sm={5} align="left">
                            Due date
                        </Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={quiz.dueDate?.slice(0, 16) || ''}
                            onChange={(e) => setQuiz({ ...quiz, dueDate: e.target.value })}
                        />

                        <Form.Label column sm={5} align="left">
                            Avalible from
                        </Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={quiz.availibleDate?.slice(0, 16) || ''}
                            onChange={(e) => setQuiz({ ...quiz, availibleDate: e.target.value })}
                        />
                        <Form.Label column sm={5} align="left">
                            Util
                        </Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={quiz.untilDate?.slice(0, 16) || ''}
                            onChange={(e) => setQuiz({ ...quiz, untilDate: e.target.value })}
                        />


                    </Col></Form.Group>




            </Form>
            {/* <a href={`#/Kanbas/Courses/${pathname.split("/")[3]}/Quizzes/${pathname.split("/")[5]}`}> */}

            <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end"
                onClick={saveQuiz}>
                Save
            </button>

            <a
                href={`#/Kanbas/Courses/${pathname.split("/")[3]}/Quizzes`}
            >
                <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">

                    Cancel</button>
            </a>




        </div>

    )
}