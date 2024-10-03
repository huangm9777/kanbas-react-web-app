import React from "react";
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function Signup() {
  return (
    <div id="wd-signup-screen  ">

  
      <h3>Sign up</h3>

      
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalUsername">
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
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
          <Form.Label column sm={5} align="right">
            Verify Password
          </Form.Label>
          <Col sm={7}>
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>



        <Form.Group as={Col} className="mb-3 ">
          <Col sm={{ span: 5, offset: 2 }}>

            <Link id="wd-signin-btn"
              to="/Kanbas/Dashboard">

              <Button type="submit" className="btn-secondary">
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
      </Form>




    </div>
);}
