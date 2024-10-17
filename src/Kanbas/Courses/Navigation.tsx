import { NavLink } from "react-router-dom";
import { useParams  } from "react-router";

export default function CoursesNavigation() {

  const { cid } = useParams();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];


  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">

      {links.map((link) => {
        return (
          <NavLink to={`/Kanbas/Courses/${cid}/${link}`} id={`wd-course-${link}-link`}
            className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
          > {link} </NavLink>
        )
      })
      }
{/*       
      <NavLink to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}

      > Home </NavLink>

      <NavLink to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
      > Modules </NavLink>

      <NavLink to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
      > Piazza </NavLink>

      <NavLink to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
      > Zoom </NavLink>

      <NavLink to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
      > Assignments </NavLink>

      <NavLink to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
      > Quizzes </NavLink>

      <NavLink to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}
      > People </NavLink> */}

    </div>
  );
}
