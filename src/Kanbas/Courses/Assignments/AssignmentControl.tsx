import Form from 'react-bootstrap/Form';

import { Button, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';  // For the search icon

import { useSelector } from "react-redux";


export default function AssignmentControl(courseId: any) {
    // console.log('courseID='+courseId.courseId);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFACULTY = currentUser.role === "FACULTY";
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
            {isFACULTY &&
                <div className='float-end'>

                    {/* Group button */}
                    <Button variant="outline-secondary" className="me-2">
                        + Group
                    </Button>

                    {/* Assignment button */}
                    <a className="wd-assignment-link"
                        href={`#/Kanbas/Courses/${courseId.courseId}/Assignments/A999`}
                        style={{ textDecoration: 'none', color: 'black' }}>

                        <Button variant="danger">
                            + Assignment
                        </Button>
                    </a>

                </div>}
        </div>



    )
}