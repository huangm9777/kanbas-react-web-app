import Form from 'react-bootstrap/Form';

import { Button, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';  // For the search icon



export default function QuizControl() {


    return (
        <div>
            {/* <h1>Quizzes</h1> */}
            <div >
                {/* Search input with icon */}
                <InputGroup className="me-2 float-start" style={{ width: '250px' }}>
                    <InputGroup.Text id="search-icon">
                        <FaSearch />
                    </InputGroup.Text>

                    <Form.Control
                        type="text"
                        placeholder="Search for Quiz"
                        aria-label="Search"
                        aria-describedby="search-icon"
                    />
                </InputGroup>
                <div className='float-end'>


                    {/* Assignment button */}
                    <a className="wd-assignment-link"
                        // href={`#/Kanbas/Courses/${courseId.courseId}/Assignments/A999`}
                        style={{ textDecoration: 'none', color: 'black' }}>

                        <Button variant="danger">
                            + Quiz
                        </Button>
                    </a>

                </div>



            </div>
        </div>
    )
}