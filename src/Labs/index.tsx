import { Route, Routes } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
  return (
    <div>
      <TOC />
      <h1>Labs</h1>
      <Routes>
        {/* <Route path="/" element={<Navigate to="Lab1" />} /> */}
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
