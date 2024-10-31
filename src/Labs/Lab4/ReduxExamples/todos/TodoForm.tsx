import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";


export default function TodoForm() {

    const { todo } = useSelector((state: any) => state.todosReducer);
    const dispatch = useDispatch();
    return (

        <li className="list-group-item button-spacing " style={{ maxWidth: "500px" }}>
            <button className=" btn btn-success me-2 float-end d-flex" onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"> Add </button>
            <button className="btn btn-warning me-2 float-end d-flex" onClick={() => dispatch(updateTodo(todo))}
                id="wd-update-todo-click me-2"> Update </button>
            <input defaultValue={todo.title}
                onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))} />
        </li>
    );
}
