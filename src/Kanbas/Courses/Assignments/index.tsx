import "./index.css";
import { useParams } from "react-router";
import AssignmentControl from "./AssignmentControl";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { PiNotePencil } from "react-icons/pi";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import AssignmentConfirm from "./AssignmentConfirm";



export default function Assignments() {

  const { cid } = useParams();
  // assignment from database
  // const assignments = db.assignments;
  // user from state
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFACULTY = currentUser.role === "FACULTY";
  // assignment from state
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  const dispatch = useDispatch();

  const handleDelete = (assignmentId: string) => {

    const isConfirmed = window.confirm("Are you sure you want to delete this assignment?");

    // If the user clicks "OK", delete the assignment
    if (isConfirmed) {
      dispatch(deleteAssignment(assignmentId));
    }
    // dispatch(deleteAssignment(assignmentId));
  }


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

            {/* <ModulesControlButtons /> */}
          </div>

          <ul className="wd-lessons list-group rounded-0">
            {isFACULTY ?

              assignments.filter((assignment: any) => assignment.course === cid)
                .map((a: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">

                    <div className="flex-left">
                      <BsGripVertical className="me-2 fs-3" />
                      <PiNotePencil color="green" />

                      <div className="d-flex flex-column">
                        <strong>
                          <a className="wd-assignment-link"
                            href={`#/Kanbas/Courses/${cid}/Assignments/${a._id}`}
                            style={{ textDecoration: 'none', color: 'black' }}>

                            {a.title}
                          </a>
                        </strong>
                        <span className="text-danger">Multiple Modules</span>
                        <span className="text-muted">
                          Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                        </span>
                      </div>
                    </div>
                    {/* <FaTrash className="text-danger me-2 mb-1" onClick={(e) => handleDelete(a._id)} /> */}
                    <FaTrash className="text-danger me-2 mb-1" 
                    data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog"
                     />

                    <LessonControlButtons />
                    <AssignmentConfirm dialogTitle="Delete Assignment" 
                       deleteAssignment={()=>dispatch(deleteAssignment(a._id))} />

                  </li>
                ))
              :
              assignments.filter((assignment: any) => assignment.course === cid)
                .map((a: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">

                    <div className="flex-left">
                      <BsGripVertical className="me-2 fs-3" />


                      <div className="d-flex flex-column">
                        <strong>
                          <p className="wd-assignment-link"
                            style={{ textDecoration: 'none', color: 'black' }}>

                            {a.title}
                          </p>
                        </strong>
                        <span className="text-danger">Multiple Modules</span>
                        <span className="text-muted">
                          Not available until May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                        </span>
                      </div>
                    </div>



                  </li>
                ))
            }


          </ul>
        </li>
      </ul>
      <div>
      </div>




    </div>
  );
}
