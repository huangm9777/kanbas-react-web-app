import { Route, Routes } from "react-router";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab1 from "./Lab1";
export default function Labs() {
  return (
    <div>
      <TOC />
      <h1>Labs</h1>
      <h1>Mingfu Huang, CS5610.20596.202510</h1>
      <Routes>
        {/* <Route path="/" element={<Navigate to="Lab1" />} /> */}
        <Route path="Lab1" element={<Lab1 />} />
        <Route path="Lab2" element={<Lab2 />} />
        <Route path="Lab3/*" element={<Lab3 />} />
      </Routes>
    </div>
  );
}
