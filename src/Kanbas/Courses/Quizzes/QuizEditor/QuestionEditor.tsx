
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams, useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import * as client from './client'
import { useEffect, useCallback, useState } from "react";


export default function QuestionEditor() {
    const [questionType, setQuestionType] = useState("1");
    const [title, setTitle] = useState("New Question");
    const [points, setPoints] = useState(1);
    const [questionText, setQuestionText] = useState("");
    const [answers, setAnswers] = useState<string[]>([""]);
    const [correctAnswer, setCorrectAnswer] = useState<number | string | boolean | null>(null);

    const navigate = useNavigate();
    const { qid } = useParams();
    const { pathname } = useLocation();
    const { quid } = useParams();
    const intQid = parseInt(qid as string);
    const intQuid = parseInt(quid as string);


    // Add an answer
    const addAnswer = () => setAnswers([...answers, ""]);

    // Remove an answer
    const removeAnswer = (index: number) => setAnswers(answers.filter((_, i) => i !== index));

    // Update an answer
    const updateAnswer = (index: number, value: string) => {
        const updatedAnswers = answers.map((answer, i) => (i === index ? value : answer));
        setAnswers(updatedAnswers);
    };

    // Save or update the question
    const saveQuestion = async () => {
        const questionData = {
            quid: intQuid,
            qid: intQid,
            title,
            points,
            questionText,
            type: questionType,
            answers,
            correctAnswer,
        };
        const response = await client.saveQuestion(questionData);
        if (response.status === 200) {

            console.log("Saved Question:", questionData);
        } else {
            console.error("Failed to save question:", response.status);
        }
        cancelChanges()
    };

    // Cancel all changes
    const cancelChanges = () => {
        navigate(`/Kanbas/Courses/${pathname.split("/")[3]}/Quizzes/${qid}/Editor/Details`);

    };

    const fetchQuestion = async (quid: string) => {
        const response = await client.findQuestionsWithQuId(quid);
        if (response.status === 200) {
            console.log("response:", response)
            if (response.data.length < 1) {
                // if it is a new question 
            } else {
                // use database data
                console.log("Question:", response.data);
                const question = response.data;
                setTitle(question.title);
                setPoints(question.points);
                setQuestionText(question.questionText);
                setQuestionType(question.type);
                setAnswers(question.answers);
                setCorrectAnswer(question.correctAnswer);
            }
            // saveQuestion();

        } else {
            console.error("Failed to save quiz. Status:");
            alert("Failed to save quiz. Please try again.");

        }
    }
    useEffect(() => {
        fetchQuestion(quid as string);
    }, [])

    return (
        <div className="question-editor container">
            <h3>Question Editor</h3>

            <Form>

                <Form.Group as={Row} className="mb-2 " controlId="formPoints">
                    <Row>
                        {/* problem title */}
                        <Col sm={5}>
                            <Form.Control type="" placeholder=''
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}

                            />
                        </Col>
                        <Col sm={4}>
                            {/* problem type */}

                            <Form.Select

                                value={questionType}
                                onChange={(e) => setQuestionType(e.target.value)}

                            >

                                <option value='1'>Multiple Choice</option>
                                <option value='2'>True / False</option>
                                <option value='3'>Fill in the blank</option>

                            </Form.Select>
                        </Col>

                        <Form.Label column align="right">
                            pts:
                        </Form.Label>
                        <Col sm={2}>

                            <Form.Control type="number"
                                value={points}
                                onChange={(e) => setPoints(parseInt(e.target.value, 10) || 0)}

                            />

                        </Col>

                    </Row>
                </Form.Group>
                <Form.Group as={Row} className="mb-3 " controlId="formPoints">

                </Form.Group>

            </Form>

            {/* Question Text (WYSIWYG Editor) */}
            <label htmlFor="questionText" className="form-label fw-bold">
                Question:
            </label>
            <ReactQuill value={questionText} onChange={setQuestionText} />


            {/* MCQ */}
            {questionType === "1" && (
                <>
                    <label className="form-label fw-bold">Answers:</label>
                    {answers.map((answer, index) => (
                        <div key={index} className="d-flex align-items-center mb-2">
                            <input
                                type="text"
                                className="form-control me-2"
                                value={answer}
                                onChange={(e) => updateAnswer(index, e.target.value)}
                                placeholder="Possible Answer"
                            />
                            <input
                                type="radio"
                                name="correctAnswer"
                                checked={correctAnswer === index}
                                onChange={() => setCorrectAnswer(index)}
                            />
                            <button
                                type="button"
                                className="btn btn-danger ms-2"
                                onClick={() => removeAnswer(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="btn btn-link text-danger float-end me-2"
                        onClick={addAnswer}
                    >
                        + Add Another Answer
                    </button>
                </>
            )}
            {/* true false type */}
            {questionType === "2" && (
                <div>
                    <label className="form-label fw-bold">Answer:</label>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="trueOption"
                            name="trueFalse"
                            checked={correctAnswer === true}
                            onChange={() => setCorrectAnswer(true)}
                        />
                        <label htmlFor="trueOption" className="form-check-label">
                            True
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            id="falseOption"
                            name="trueFalse"
                            checked={correctAnswer === false}
                            onChange={() => setCorrectAnswer(false)}
                        />
                        <label htmlFor="falseOption" className="form-check-label">
                            False
                        </label>
                    </div>
                </div>
            )}
            {/* fill in the blank */}
            {questionType === "3" && (
                <>
                    <label className="form-label fw-bold">Answers:</label>
                    {answers.map((answer, index) => (
                        <div key={index} className="d-flex align-items-center mb-2">
                            <input
                                type="text"
                                className="form-control me-2"
                                value={answer}
                                onChange={(e) => updateAnswer(index, e.target.value)}
                                placeholder="Possible Correct Answer"
                            />
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => removeAnswer(index)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="btn btn-link text-danger float-end me-2"
                        onClick={addAnswer}
                    >
                        + Add Another Answer
                    </button>
                </>
            )}

            {/* Save and Cancel Buttons */}
            <div className="mt-3">
                <button
                    type="button"
                    className="btn btn-secondary me-3"
                    onClick={cancelChanges}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={saveQuestion}
                >
                    Save Question
                </button>
            </div>
        </div>
    );
}
