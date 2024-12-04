// import { useLocation } from "react-router";
import { Tab, Tabs } from "react-bootstrap";
import { useState } from "react";
import QuizEditorDetail from "./QuizEditorDetail";
// import QuizEditorQuestion from "./QuizEditorQuestion";
import QuestionEditor from "./QuestionEditor";
import QuestionPanel from "./QuestionPanel";



export default function QuizEditorTOC() {
    // const { pathname } = useLocation();

    const [activeTab, setActiveTab] = useState("details");

    return (
        <div>
            <Tabs
                activeKey={activeTab}
                onSelect={(key) => setActiveTab(key || "details")}
                className="mb-3 justify-content-center text-color-dark"
            >
                <Tab eventKey="details" title="Details">
                    {activeTab === "details" && <QuizEditorDetail />}
                </Tab>
                <Tab eventKey="questions" title="Questions">
                    {activeTab === "questions" && <QuestionPanel />}
                    {/* {activeTab === "questions" && <QuestionEditor />} */}
                </Tab>
            </Tabs>

            {/* 

            <ul className="nav nav-pills justify-content-center" >

                <li className="nav-item me-2">
                    <a id="wd-a1"
                        href={`#/Kanbas/Courses/${pathname.split("/")[3]}/Quizzes/${pathname.split("/")[5]}/Editor/Details`}

                        // className={`nav-link ${pathname.includes("Details") ? "active" : ""}`}
                        className={` ${pathname.includes("Details") ? "border-top border-dark" : ""}`}
                    >
                        Details
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-a2"
                        href={`#/Kanbas/Courses/${pathname.split("/")[3]}/Quizzes/${pathname.split("/")[5]}/Editor/Questions`}
                        className={` ${pathname.includes("Questions") ? "border-top border-right border-left border-dark" : ""}`}
                    >
                        Questions
                    </a>
                </li>
            </ul> */}
        </div>
    )
}