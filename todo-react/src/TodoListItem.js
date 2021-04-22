import React from "react";

import "./TodoListItem.scss";

function TodoListItem(props) {
  const todo = props.todoText;
  const terminada = props.terminada;
  const fecha = new Date(props.fecha);
  const idTodo = props.id;

  const tareaCompletada = (idTodo) => {
    const todo = props.getTodo(idTodo);
    props.updateTodo(idTodo, { ...todo, terminada: !todo.terminada });
  };

  const eliminarTarea = (idTodo) => props.deleteTodo(idTodo);
  const editarTarea = (idTodo) => props.openModal(idTodo);

  return (
    <div className="elementoLista">
      <div className="checkbox-text">
        <input
          checked={terminada}
          type="checkbox"
          className="checkbox"
          onChange={() => tareaCompletada(idTodo)}
        />
        <div className="tarea-fecha">
          <h3
            className={`${terminada && "tarea-marcada"}`}
            itemID={`t${idTodo}`}
          >
            {todo}
          </h3>
          <h6
            className={`${terminada && "tarea-marcada"}`}
          >{`${fecha.getDate()}/${
            fecha.getMonth() + 1
          }/${fecha.getFullYear()}`}</h6>
        </div>
      </div>
      <div className="actions-elemento-lista">
        <i
          id="edit"
          className="fas fa-pencil-alt"
          onClick={() => editarTarea(idTodo)}
        ></i>
        <i
          id="delete"
          className="fas fa-trash-alt"
          onClick={() => eliminarTarea(idTodo)}
        ></i>
      </div>
    </div>
  );
}

export default TodoListItem;
