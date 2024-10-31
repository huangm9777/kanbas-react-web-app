import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem( todo: any) {
    const dispatch = useDispatch();
    todo = todo.Todo;
    return (
        <li key={todo.id} className="list-group-item" style={{ maxWidth: "500px" }}>
            <button className = "btn btn-danger me-2 float-end d-flex"onClick={() => dispatch(deleteTodo(todo.id))}
                id="wd-delete-todo-click"> Delete </button>
            <button  className = "btn btn-primary me-2 float-end d-flex" onClick={() => dispatch(setTodo(todo))}
                id="wd-set-todo-click"> Edit </button>
            {todo.title}    </li>);
}