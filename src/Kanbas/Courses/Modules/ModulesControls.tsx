import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import BanCheckmark from "./BanCheckmoark";
import ModuleEditor from "./ModuleEditor";
import { useSelector } from "react-redux";

export default function ModulesControls(

  { moduleName, setModuleName, addModule }:
    {
      moduleName: string;
      setModuleName: (title: string) => void; addModule: () => void;
    }


) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFACULTY = currentUser.role === "FACULTY";




  return (
    <div id="wd-modules-controls" className="text-nowrap">
      {isFACULTY ?
        <button id="wd-add-module-btn"
          className="btn btn-lg btn-danger me-1 float-end"
          data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog"
        >
          <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
          Module</button> : null
      }
      {isFACULTY ?
        <div className="dropdown d-inline me-1 float-end">
          <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
            type="button" data-bs-toggle="dropdown">
            <GreenCheckmark />
            Publish All</button>
          <ul className="dropdown-menu">
            <li>
              <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href='Kanbas/Courses/1234/Home'
              >
                <GreenCheckmark />
                Publish all modules and items</a>
            </li>
            <li>
              <a id="wd-publish-modules-only-button" className="dropdown-item" href='Kanbas/Courses/1234/Home'>
                <GreenCheckmark />
                Publish modules only</a>
            </li>
            <li>
              <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href='Kanbas/Courses/1234/Home'>
                <BanCheckmark />
                Unpublish all modules and items</a>
            </li>
            <li>
              <a id="wd-unpublish-modules-only" className="dropdown-item" href='Kanbas/Courses/1234/Home'>
                <BanCheckmark />
                Unpublish modules only</a>
            </li>

          </ul>
        </div> : null}



      

      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
        View Progress</button>
      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-1 float-end">
        Collapse All</button>
      {/* Implement the View Progress and Collapse All buttons with IDs wd-view-progress and wd-collapse-all */}

      <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
        setModuleName={setModuleName} addModule={addModule} />
    </div>
  );
}
