import Form from 'react-bootstrap/Form';
import { CiSearch } from "react-icons/ci";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';  // For the search icon




export default function AssignmentControl() {
    return (

        <div className=" container">
            {/* Search input with icon */}
            <InputGroup className="me-2 float-start" style={{ width: '250px' }}>
                <InputGroup.Text id="search-icon">
                    <FaSearch />
                </InputGroup.Text>

                <Form.Control
                    type="text"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="search-icon"
                />
            </InputGroup>

            <div className='float-end'>

            {/* Group button */}
            <Button variant="outline-secondary" className="me-2">
                + Group
            </Button>

            {/* Assignment button */}
            <Button variant="danger">
                + Assignment
            </Button>

            </div>
            {/* <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Search..."
                md="4"
            /> 
            <Form.Control placeholder="First name" className='float-start mb-3'/>

            <button className="btn btn-lg btn-secondary me-1 float-end">+ Group</button>
            <button className="btn btn-lg btn-danger me-1 float-end">+ Assignment</button>
*/}
        </div>



    )
}