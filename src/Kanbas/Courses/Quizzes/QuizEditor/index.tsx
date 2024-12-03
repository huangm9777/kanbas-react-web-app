import QuizEditorDetail from "./QuizEditorDetail";
import QuizEditorQuestion from "./QuizEditorQuestion";
import QuizEditorTOC from "./QuizEditorTOC";
import { Route, Routes } from "react-router";




export default function QuizEditor() {
  return (
    <div>

      <QuizEditorTOC />
      <Routes>
        <Route path="Details" element={<QuizEditorDetail />} />
        <Route path="Questions/*" element={<QuizEditorQuestion />} />

        <Route path="Quizzes/:qid/Editor/Details" element={<QuizEditorDetail />} />
        {/* <Route path="/*" element={<div>Quiz Editor</div>} />
        <Route path="/Questions" element={<div>Quiz Questions</div>} /> */}
      </Routes>
    </div>
  )
}