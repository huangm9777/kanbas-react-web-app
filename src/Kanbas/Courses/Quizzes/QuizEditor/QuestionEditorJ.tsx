import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function QuestionEditor() {
    const [questionType, setQuestionType] = useState("Multiple Choice");
    const [title, setTitle] = useState("");
    const [points, setPoints] = useState(1);
    const [questionText, setQuestionText] = useState("");
    const [answers, setAnswers] = useState<string[]>([""]);
    const [correctAnswer, setCorrectAnswer] = useState<number | string | boolean | null>(null);

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
    const saveQuestion = () => {
        const questionData = {
            title,
            points,
            questionText,
            type: questionType,
            answers,
            correctAnswer,
        };
        console.log("Saved Question:", questionData);
    };

    // Cancel all changes
    const cancelChanges = () => {
        setTitle("");
        setPoints(1);
        setQuestionText("");
        setAnswers([""]);
        setCorrectAnswer(null);
    };

    return (
        <div className="question-editor container">
            <h3>Edit Question</h3>

            {/* Dropdown to select question type */}
            <div className="mb-3">
                <label htmlFor="questionType" className="form-label">
                    Select Question Type:
                </label>
                <select
                    id="questionType"
                    className="form-select"
                    value={questionType}
                    onChange={(e) => setQuestionType(e.target.value)}
                >
                    <option value="Multiple Choice">Multiple Choice</option>
                    <option value="True/False">True/False</option>
                    <option value="Fill in the Blank">Fill in the Blank</option>
                </select>
            </div>

            {/* Title and Points */}
            <div className="mb-3 d-flex align-items-center">
                <input
                    type="text"
                    className="form-control me-3"
                    placeholder="Enter Question Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <div className="d-flex align-items-center">
                    <span className="me-2">Points:</span>
                    <input
                        type="number"
                        className="form-control"
                        value={points}
                        onChange={(e) => setPoints(Number(e.target.value))}
                        style={{ maxWidth: "100px" }}
                    />
                </div>
            </div>

            {/* Question Text (WYSIWYG Editor) */}
            <label htmlFor="questionText" className="form-label fw-bold">
                Question:
            </label>
            <ReactQuill
                value={questionText}
                onChange={setQuestionText}
                theme="snow"
                className="mb-3"
            />

            {/* Render question type-specific inputs */}
            {questionType === "Multiple Choice" && (
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

            {questionType === "True/False" && (
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

            {questionType === "Fill in the Blank" && (
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
