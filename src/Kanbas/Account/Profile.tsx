import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>


      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="username"
          placeholder="Alice"
        />
        <label htmlFor="floatingInputCustom">Username</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="string"
          placeholder="Alice"
        />
        <label htmlFor="floatingInputCustom">First Nane</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="placeholder"
          placeholder="Alice"
        />
        <label htmlFor="floatingInputCustom">Username</label>
      </Form.Floating>

      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>

      <div>
        <label htmlFor="date-input" className="form-label md-3">
          Select a date:
        </label>
        <input
          id="date-input"
          type="date"
          className="form-control"

        />
      </div>
        <p>Select Role: </p>
      <Form.Select aria-label="Default select example" className="mb-3">
        <option>Role</option>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>

      <Link id="wd-signin-btn"
        to="/Kanbas/Account/Signin" >

        <Button type="submit">
          Sign up</Button>
      </Link>


    </div>
  );
}
