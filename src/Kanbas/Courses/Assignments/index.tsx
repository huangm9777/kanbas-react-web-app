import "./index.css";
import { useParams } from "react-router";
import AssignmentControl from "./AssignmentControl";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModulesControlButtons from "../Modules/ModulesControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import * as db from "../../Database";




export default function Assignments() {

  const { cid } = useParams();
  const assignments = db.assignments;
  

  return (
    <div id="wd-assignments" className="container">

      <AssignmentControl />
      <br />
      <br />
      <br />

      <ul id="wd-modules" className="list-group rounded-0">


        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">

          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS <span className="percentage_and_plus"><span className="percentage ">40% of Total</span> +</span>

            <ModulesControlButtons />
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {assignments.filter((assignment: any) => assignment.course === cid)
              .map((a) => (
                <li className="wd-lesson list-group-item p-3 ps-1">

                  <div className="flex-left">
                    <BsGripVertical className="me-2 fs-3" />
                    <PiNotePencil color="green" />


                    <div className="d-flex flex-column">
                      <strong>
                        <a className="wd-assignment-link"
                          href={`#/Kanbas/Courses/${cid}/Assignments/${a._id}`}>

                          {a.title}
                        </a>
                      </strong>
                      <span className="text-danger">Multiple Modules</span>
                      <span className="text-muted">
                        Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                      </span>
                    </div>
                  </div>
                  <LessonControlButtons />


                </li>
              ))}

            {/* <li className="wd-lesson list-group-item p-3 ps-1">

              <div className="flex-left">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencil color="green" />


                <div className="d-flex flex-column">
                  <strong>
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A1 - ENV + HTML
                    </a>
                  </strong>
                  <span className="text-danger">Multiple Modules</span>
                  <span className="text-muted">
                    Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                  </span>
                </div>
              </div>
              <LessonControlButtons />


            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">

              <div className="flex-left">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencil color="green" />


                <div className="d-flex flex-column">
                  <strong>
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A2
                    </a>
                  </strong>
                  <span className="text-danger">Multiple Modules</span>
                  <span className="text-muted">
                    Not available until May 16 at 12:00am | Due May 13 at 11:59pm | 100 pts
                  </span>
                </div>
              </div>
              <LessonControlButtons />


            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">

              <div className="flex-left">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotePencil color="green" />


                <div className="d-flex flex-column">
                  <strong>
                    <a className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123">
                      A3
                    </a>
                  </strong>
                  <span className="text-danger">Multiple Modules</span>
                  <span className="text-muted">
                    Not available until May 26 at 12:00am | Due May 13 at 11:59pm | 100 pts
                  </span>
                </div>
              </div>
              <LessonControlButtons />


            </li> */}






          </ul>
        </li>
      </ul>
      <div>
      </div>




    </div>
  );
}
