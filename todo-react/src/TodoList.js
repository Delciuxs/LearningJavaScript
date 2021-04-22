import React from "react";
import { useState, useRef, useEffect } from "react";

import "./TodoList.scss";
import TodoListItem from "./TodoListItem";

function TodoList(props) {
  const todoList = props.todos;
  const [showListValue, setShowListValue] = useState("todas");
  const contTodo = useRef(0);

  useEffect(() => {
    contTodo.current = 0;
  });

  return (
    <div className="lista">
      <div className="mostrar-tareas">
        <select
          onChange={(e) => {
            const selectHtml = e.target;
            const optionSelect =
              selectHtml.options[selectHtml.selectedIndex].value;
            setShowListValue(optionSelect);
          }}
        >
          <option value="todas" defaultValue="selected">
            Todas
          </option>
          <option value="completadas">Completadas</option>
          <option value="incompletas">No Completadas</option>
        </select>
      </div>
      {todoList.size === 0 ? (
        <p id="vacio">No tienes nada pendiente :)</p>
      ) : (
        todoList.map((todo, index) => {
          if (
            (showListValue === "completadas" && todo.terminada === true) ||
            (showListValue === "incompletas" && todo.terminada === false) ||
            showListValue === "todas"
          ) {
            contTodo.current = contTodo.current + 1;
            return (
              <TodoListItem
                key={index}
                todoText={todo.todoText}
                terminada={todo.terminada}
                fecha={todo.fecha}
                id={index}
                deleteTodo={props.deleteTodo}
                updateTodo={props.updateTodo}
                getTodo={props.getTodo}
                openModal={props.openModal}
              />
            );
          }
          return null;
        })
      )}
      {todoList.size !== 0 &&
        contTodo.current === 0 &&
        showListValue === "completadas" && (
          <p id="vacio">No tienes tareas completadas :(</p>
        )}
      {todoList.size !== 0 &&
        contTodo.current === 0 &&
        showListValue === "incompletas" && (
          <p id="vacio">No tienes tareas incompletadas :)</p>
        )}
    </div>
  );
}

export default TodoList;
