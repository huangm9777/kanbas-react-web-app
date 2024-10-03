import { NavLink } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">

      <NavLink to={`/Kanbas/Account/Signin`} id="wd-course-home-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}

      > Signin </NavLink>
      <NavLink to={`/Kanbas/Account/Signup`} id="wd-course-home-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}

      > Signup </NavLink>
      <NavLink to={`/Kanbas/Account/Profile`} id="wd-course-home-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}

      > Profile </NavLink>

      {/* <Link to={`/Kanbas/Account/Signin`}  > Signin  </Link> <br/>
      <Link to={`/Kanbas/Account/Signup`}  > Signup  </Link> <br/>
      <Link to={`/Kanbas/Account/Profile`} > Profile </Link> <br/> */}
    </div>
  );
}
