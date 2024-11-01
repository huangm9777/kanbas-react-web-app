import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";


export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">

      {links.map((link) => (

        <NavLink to={`/Kanbas/Account/${link}`} id="wd-course-home-link"
          className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}

        > {link} </NavLink>

      ))}
      {/* <NavLink to={`/Kanbas/Account/Signup`} id="wd-course-home-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}

      > Signup </NavLink>
      <NavLink to={`/Kanbas/Account/Profile`} id="wd-course-home-link"
        className={({ isActive }) => isActive ? "list-group-item active border border-0" : "list-group-item text-danger border border-0"}

      > Profile </NavLink> */}

    </div>
  );
}
