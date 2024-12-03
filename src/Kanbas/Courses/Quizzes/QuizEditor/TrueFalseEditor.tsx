
import { useState } from "react";
import ReactQuill from "react-quill"; // WYSIWYG Editor
import "react-quill/dist/quill.snow.css"; // Quill Styles
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function TrueFalseEditor() {
    const [title, setTitle] = useState("Is 2 + 2 = 4?"); // Title of the question
    const [points, setPoints] = useState(3); // Points for the question
    const [question, setQuestion] = useState("Is it true that 2 + 2 = 4?"); // Question text
    const [isTrue, setIsTrue] = useState(true); // Correct answer (true/false)

    // problem 
    const [problem, setProblem] = useState({

        title: "Is 2 + 2 = 4?",
        points: 3,
        question: "Is it true that 2 + 2 = 4?",
        answer: true,

    })

    const handleCancel = () => {
        // Reset to default values
        setTitle("Is 2 + 2 = 4?");
        setPoints(3);
        setQuestion("Is it true that 2 + 2 = 4?");
        setIsTrue(true);
    };

    const handleSave = () => {
        const questionData = {
            title,
            points,
            question,
            correctAnswer: isTrue ? "True" : "False",
        };

    };

    return (
        <div className="true-false-question-editor container">

            {/* Question Config */}
            <div className="d-flex align-items-center mb-3">
                {/* Title */}
                {/* <input
                    type="text"
                    className="form-control me-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter question title"
                    style={{ maxWidth: "300px" }}
                /> */}
                {/* problem type and question title */}
                <Form>

                    <Form.Group as={Row} className="mb-2 " controlId="formPoints">
                        <Row>
                            {/* problem title */}
                            <Col sm={5}>
                                <Form.Control type="" placeholder=''
                                    value={problem.title}
                                    onChange={(e) => setProblem({ ...problem, title: e.target.value })}

                                />
                            </Col>
                            <Col sm={4}>
                                {/* problem type */}

                                <Form.Select

                                >

                                    <option value='1'>Graded Quiz</option>
                                    <option value='2'>Practice Quiz</option>
                                    <option value='3'>Graded Survey</option>

                                </Form.Select>
                            </Col>

                            <Form.Label column align="right">
                                pts:
                            </Form.Label>
                            <Col sm={2}>

                                <Form.Control type="number" value={problem.points}
                                onChange={(e) => setProblem({ ...problem, points: parseInt(e.target.value, 10) || 0 })}

                                />

                            </Col>

                        </Row>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3 " controlId="formPoints">

                    </Form.Group>

                </Form>

                {/* Points */}
                {/* <div className="d-flex align-items-center">
                    <span className="me-2">pts:</span>
                    <input
                        type="number"
                        className="form-control"
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))}
                        style={{ maxWidth: "80px" }}
                    />
                </div> */}
            </div>

            <p className="text-muted">
                Enter your question text, then select if True or False is the correct answer.
            </p>

            {/* Question (WYSIWYG Editor) */}
            <label htmlFor="question" className="form-label fw-bold">
                Question:
            </label>
            <ReactQuill
                value={question}
                onChange={setQuestion}
                theme="snow"
                className="mb-3"
            />

            {/* True/False Answer */}
            <div>
                <label className="form-label fw-bold">Answers:</label>
                <div className="form-check">
                    <input
                        type="radio"
                        id="true"
                        name="correctAnswer"
                        className="form-check-input"
                        checked={isTrue}
                        onChange={() => setIsTrue(true)}
                    />
                    <label htmlFor="true" className="form-check-label text-success">
                        True
                    </label>
                </div>
                <div className="form-check">
                    <input
                        type="radio"
                        id="false"
                        name="correctAnswer"
                        className="form-check-input"
                        checked={!isTrue}
                        onChange={() => setIsTrue(false)}
                    />
                    <label htmlFor="false" className="form-check-label text-danger">
                        False
                    </label>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-3">
                <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={handleSave}
                >
                    Update Question
                </button>
            </div>
        </div>
    );
}
