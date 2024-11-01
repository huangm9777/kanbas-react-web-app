// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";



export default function Signin() {

  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kanbas/Dashboard");
  };



  return (
    <div id="wd-signin-screen " className=" container">
      <h3>Sign in</h3>
      <input defaultValue={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="form-control mb-2" placeholder="username" id="wd-username" />
      <input defaultValue={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
      <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup"> Sign up </Link>
{/* 
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={4} align="right">
            Username
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="string" placeholder="Username" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={4} align="right">
            Password
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <Form.Group as={Col} className="mb-3 ">
          <Col sm={{ span: 5, offset: 2 }}>

            <Link id="wd-signin-btn"
              to="/Kanbas/Dashboard">

              <Button type="submit" className="btn-secondary mb-3">
                Sign in</Button>
            </Link>

          </Col>

          <Col sm={{ span: 5, offset: 2 }}>

            <Link id="wd-signin-btn"
              to="/Kanbas/Account/Profile">

              <Button type="submit">
                Sign up</Button>
            </Link>

          </Col>
        </Form.Group>
      </Form> */}

    </div>
  );
}
