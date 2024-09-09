import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input id="wd-username" placeholder="username" /> <br />
      <input id="wd-password" placeholder="password" type="password" /> <br />
      {/* sign in button, lead to dashboard */}
      <Link  id="wd-signin-btn"
              to="/Kanbas/Dashboard"> Sign in </Link> <br />


  {/* sign up button, lead to profile */}
      <Link  id="wd-signup-link" to="/Kanbas/Account/Profile">Sign up</Link>
    </div>
);}
