import { IoEllipsisVertical } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FiPlus />
      <IoEllipsisVertical className="fs-4" />
    </div>
);}
