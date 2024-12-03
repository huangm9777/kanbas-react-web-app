import Form from 'react-bootstrap/Form';
import * as client from './clients'
import { Button, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';  // For the search icon
import { useNavigate } from "react-router-dom";
import { useLocation ,useParams } from "react-router";



export default function QuizControl() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const {cid} = useParams()


    const addNewQuiz = async () => {
        const qid = new Date().getTime();
        const quiz = { qid , title:"Unnamed Quiz", course:cid};
        await client.createQuiz(quiz);
        navigate(`${pathname}/${qid}/Editor/Details`);

    }

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


                    <Button variant="danger" onClick={addNewQuiz}>
                        + Quiz
                    </Button>

                </div>



            </div>
        </div>
    )
}