import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useParams, useLocation } from "react-router";
import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateAssignment, addAssignment } from './reducer';
import { useNavigate } from "react-router-dom";
import * as client from "./clients"







export default function AssignmentEditor() {
  const navigate = useNavigate();
  const { aid } = useParams();
  const { pathname } = useLocation();
  // const assignments = db.assignments;

  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const dbAssignment = assignments.find((a: any) => a._id === aid);

  const [assignment, setAssignment] = useState(
    dbAssignment || {
      _id: "",
      title: "",
      course: "",
      description: ""
    }
  );


  const handleSave = async (e: any) => {
    e.preventDefault();
    // TODO: Save assignment 
    const find = assignments.find((a: any) => a._id === assignment._id);
    if (find) {
      await client.updateAssignment(pathname.split('/')[3] as string, assignment);
      // dispatch(updateAssignment(assignment));
      

    } else {

      const updatedAssignment = {
        ...assignment,
        course: pathname.split('/')[3],
      };
      // Update state and then dispatch with the updated assignment
      
      const createdAssignment = await client.createAssignmentForCourse(pathname.split('/')[3] as string, updatedAssignment);
      setAssignment(createdAssignment);
      dispatch(addAssignment(createdAssignment));

    }
    

    navigate(`/Kanbas/Courses/${pathname.split("/")[3]}/Assignments`);

  }
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="email" placeholder=""
            defaultValue={assignment?.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />


        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

          <Form.Control as="textarea" rows={3} cols={50}
            defaultValue={assignment?.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          />
        </Form.Group>

      </Form>


      <br />



      <Form>
        <Form.Group as={Row} className="mb-5 " controlId="formPoints">
          <Form.Label column sm={5} align="right">
            Points
          </Form.Label>
          <Col sm={5}>
            <Form.Control type=" " placeholder=" " defaultValue={"100"} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-5 " controlId="formPoints">
          <Form.Label column sm={5} align="right">
            Assign
          </Form.Label >

          <Col sm={5} className="border border-secondary rounded  pb-3"  >

            <Form.Label column sm={5} align="left">
              Due date
            </Form.Label>
            <Form.Control type="datetime-local" />

            <Form.Label column sm={5} align="left">
              Avalible from
            </Form.Label>
            <Form.Control type="datetime-local" />
            <Form.Label column sm={5} align="left">
              Util
            </Form.Label>
            <Form.Control type="datetime-local" />


          </Col></Form.Group>




      </Form>

      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end" onClick={handleSave}>

        Save</button>
      <a href={`#/Kanbas/Courses/${pathname.split("/")[3]}/Assignments`}>

        <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">

          Cancel</button>
      </a>




    </div>
  );
}
