import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { ButtonGroup } from "react-bootstrap";
import { useState, useEffect,useCallback } from "react";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./Enrollment/reducer";
import * as client from "./Enrollment/client"


export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
    }
) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const dispatch = useDispatch();


  const isFACULTY = currentUser.role === "FACULTY";

  const userId = currentUser._id;


  function handleIsEnroll(): void {
    setIsEnrolled(!isEnrolled);
  }

  const enrollCourse = (course: string) => {
    client.enrollCourses(userId, course);
    dispatch(addEnrollment({ course: course, user: userId }));

  }

  const unenrollCourse = (course: string) => {
    client.unenrollCourses(userId, course);

    dispatch(deleteEnrollment({ course: course, user: userId }))

  }

  // const fetchEnrollments = async () => {
  //   const enrollments = await client.findAllEnrollments();
  //   dispatch(setEnrollments(enrollments));
  // }


  const fetchEnrollments = useCallback (async () => {
    const enrollments = await client.findAllEnrollments();
    dispatch(setEnrollments(enrollments));
  },[dispatch])
  useEffect(() => {
    fetchEnrollments();

  }, [fetchEnrollments]);

  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  return (

    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

      {/* new course edit area */}
      {isFACULTY ?
        <h5>New Course
          <ButtonGroup className="float-end">
            <button className="btn btn-primary "
              id="wd-add-new-course-click"
              onClick={addNewCourse} >
              Add
            </button>
            <button className="btn btn-warning "
              onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </ButtonGroup>
        </h5>
        : null
      }



      <hr />
      {
        isFACULTY &&
        <input defaultValue={course.name} className="form-control mb-2"
          value={course.name} placeholder="Course Name"
          onChange={(e) => setCourse({ ...course, name: e.target.value })} >
        </input>
      }
      {
        isFACULTY &&
        <textarea defaultValue={course.description} className="form-control"
          value={course.description} placeholder="Course Description"
          onChange={(e) => setCourse({ ...course, description: e.target.value })}>
        </textarea>
      }


      {/* published courses  */}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />

      {/* enrollment switch for student  */}
      {!isFACULTY &&
        <div className="d-flex justify-content-end" onClick={handleIsEnroll}>
          <button className="btn btn-primary mb-2">Enrollments</button>
        </div>
      }

      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {isFACULTY ?
            // is faculty
            courses
              .map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <Link to={`/Kanbas/Courses/${course._id}/Home`}
                      className="wd-dashboard-course-link text-decoration-none text-dark" >
                      <img src={course.image} alt="course img" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">
                          {course.name} </h5>
                        <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                          {course.description} </p>
                        <button className="btn btn-primary"> Go </button>



                        <button onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }} className="btn btn-danger me-2 float-end"
                          id="wd-delete-course-click">
                          Delete
                        </button>
                        <button id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);

                          }}
                          className="btn btn-warning me-2 float-end" >
                          Edit
                        </button>



                      </div>
                    </Link>
                  </div>
                </div>
              ))
            :
            // not faculty
            courses
              .filter((course) =>
                enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                ))
              .map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">

                    <img src={course.image} alt="course img" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>

                      <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <button className="btn btn-primary"> Go </button>
                      </Link>
                      <button className="btn btn-danger float-end"
                        // onClick={() => {
                        //   dispatch(deleteEnrollment({ course: course._id, user: userId }))
                        // }}
                        onClick={() => {
                          unenrollCourse(course._id)
                        }}
                      > Unenroll </button>
                    </div>

                  </div>
                </div>
              ))}

          {/* list the non enrolled courses  */}
          {
            (!isFACULTY && isEnrolled) &&

            courses
              .filter((course) =>
                enrollments.every(
                  (enrollment: any) =>
                    !(enrollment.user === currentUser._id && enrollment.course === course._id)
                )
              )
              .map((course) => (
                <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card rounded-3 overflow-hidden">
                    <img src={course.image} alt="course img" width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        {course.name} </h5>
                      <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                        {course.description} </p>
                      <Link to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark" >
                        <button className="btn btn-primary"> Go </button>
                      </Link>
                      <button className="btn btn-success float-end"
                        // onClick={() => {
                        //   dispatch(addEnrollment({ course: course._id, user: userId }))
                        // }}   
                        onClick={() => {
                          enrollCourse(course._id)
                        }}

                      > Enroll </button>
                    </div>
                  </div>
                </div>
              ))


          }






        </div>
      </div>
    </div>
  );
}
