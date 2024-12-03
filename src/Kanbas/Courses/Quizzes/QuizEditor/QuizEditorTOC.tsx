import { useLocation } from "react-router";



export default function QuizEditorTOC() {
    const { pathname } = useLocation();

    return (
        <div>

            <ul className="nav nav-pills justify-content-center" >

                <li className="nav-item">
                    <a id="wd-a1"
                        href={`#/Kanbas/Courses/${pathname.split("/")[3]}/Quizzes/${pathname.split("/")[5]}/Editor/Details`}
                        
                        className={`nav-link ${pathname.includes("Details") ? "active" : ""}`}
                    >
                        Details
                    </a>
                </li>
                <li className="nav-item">
                    <a id="wd-a2"
                        href={`#/Kanbas/Courses/${pathname.split("/")[3]}/Quizzes/${pathname.split("/")[5]}/Editor/Questions`}
                        className={`nav-link ${pathname.includes("Questions") ? "active" : ""}`}
                    >
                        Questions
                    </a>
                </li>
            </ul>
        </div>
    )
}