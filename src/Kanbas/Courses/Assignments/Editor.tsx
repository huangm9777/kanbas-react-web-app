import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';






export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Assignment Name</Form.Label>
          <Form.Control type="email" placeholder=""
            defaultValue="A1 - ENV + HTML"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

          <Form.Control as="textarea" rows={3} cols={50}
            defaultValue="The assignment is available online Submit a link to the landing page of"
          />
        </Form.Group>

      </Form>


      <br />



      <Form>
        <Form.Group as={Row} className="mb-3 " controlId="formPoints">
          <Form.Label column sm={5} align="right">
            Points
          </Form.Label>
          <Col sm={5}>
            <Form.Control type=" " placeholder=" " defaultValue={"100"} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formAssigmenntGroup">
          <Form.Label column sm={5} align="right">
            Assignemnt Group
          </Form.Label>
          <Col sm={5}>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Assignments</option>
            </Form.Select>
          </Col>
        </Form.Group>


        <Form.Group as={Row} className="mb-3" controlId="formAssigmenntGroup">
          <Form.Label column sm={5} align="right">
            Display Grade as
          </Form.Label>
          <Col sm={5}>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Percentage</option>
            </Form.Select>
          </Col>
        </Form.Group>


        <Form.Group as={Row} className="mb-3" controlId="formAssigmenntGroup">
          <Form.Label column sm={5} align="right">
            Submition Type
          </Form.Label>
          <Col sm={5}>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>Online</option>
            </Form.Select>
          </Col>
        </Form.Group>


        <Form.Group as={Row} className="mb-3 " >
          <Form.Label column sm={5} align="right">

          </Form.Label>

          <Col sm={5}>
            <Form.Check // prettier-ignore
              type='checkbox'
              id={`default`}
              label={`Text Entry`}
            />
            <Form.Check // prettier-ignore
              type='checkbox'
              id={`default`}
              label={`Website URL`}
            />
            <Form.Check // prettier-ignore
              type='checkbox'
              id={`default`}
              label={`Media Recordings`}
            />
            <Form.Check // prettier-ignore
              type='checkbox'
              id={`default`}
              label={`Student Annotation`}
            />
            <Form.Check // prettier-ignore
              type='checkbox'
              id={`default`}
              label={`File Uploads`}
            />
          </Col>
        </Form.Group>


        <Form.Group as={Row} className="mb-3" controlId="formAssigmenntGroup">
          <Form.Label column sm={5} align="right">
            Assign
          </Form.Label>
          
          <Col sm={5}>
            <Form.Control type=" " placeholder=" " defaultValue={"100"} />
          </Col>
          
        </Form.Group>


      </Form>

      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        
        Module</button>
      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        
        Cancel</button>






{/* 
      <table>
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assignment-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-assignment-group">
                <option>ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade">
                <option>Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
              </select>
            </td>
          </tr>
        </table>

        <h3>Online Entry Options</h3>
        <div>
          <input type="checkbox" id="wd-text-entry" />
          <label htmlFor="wd-text-entry">Text Entry</label>
        </div>
        <div>
          <input type="checkbox" id="wd-website-url" />
          <label htmlFor="wd-website-url">Website URL</label>
        </div>
        <div>
          <input type="checkbox" id="wd-media-recordings" />
          <label htmlFor="wd-media-recordings">Media Recordings</label>
        </div>
        <div>
          <input type="checkbox" id="wd-student-annotation" />
          <label htmlFor="wd-student-annotation">Student Annotation</label>
        </div>
        <div>
          <input type="checkbox" id="wd-file-uploads" />
          <label htmlFor="wd-file-uploads">File Uploads</label>
        </div>

        <div>
          <label htmlFor="wd-assign-to">Assign </label>
          <input id="wd-assign-to" value="Everyone" />
        </div>

        <div>
          <label htmlFor="wd-due-date">Due </label>
          <input type="date" id="wd-due-date" value="2024-05-13" />
        </div>

        <div>
          <label>Available from </label>
          <input type="date" id="wd-available-from" value="2024-05-06" />
          <label > Until </label>
          <input type="date" id="wd-available-until" value="2024-05-20" />
        </div>

        <div>
          <button> Cancel </button>
          <button> Save </button>
        </div>
      </table> */}
    </div>
  );
}
