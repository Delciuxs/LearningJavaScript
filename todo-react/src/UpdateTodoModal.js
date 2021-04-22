import React from "react";
import { useRef, useEffect, useState } from "react";

import Fecha from "./Fecha";

import "./UpdateTodoModal.scss";

const UpdateTodoModal = (props) => {
  const todoDate = new Date(props.todo.fecha);
  const idTodo = props.idTodo;
  const [todoTextValue, setTodoTextValue] = useState(props.todo.todoText);
  const [datePickerValue, onChangeDatePicker] = useState(todoDate);
  const inputRef = useRef();

  const handleCancelButton = () => {
    props.closeModal();
  };
  const handleConfirmButton = () => {
    if (todoTextValue !== "" && datePickerValue !== null && idTodo !== -1) {
      props.updateTodo(idTodo, {
        todoText: todoTextValue,
        terminada: false,
        fecha: datePickerValue,
      });
      props.closeModal();
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="modal-container">
      <div className="modal-header">
        <h3>EDITING TODO</h3>
      </div>
      <div className="modal-content">
        <input
          className="tarea"
          ref={inputRef}
          type="text"
          defaultValue={props.todo.todoText}
          onChange={() => setTodoTextValue(inputRef.current.value)}
        ></input>
        <div
          className="date-picker"
          onBlur={() => {
            if (datePickerValue === null) {
              onChangeDatePicker(todoDate);
            }
          }}
        >
          <Fecha
            datePickerValue={datePickerValue}
            onChangeDatePicker={onChangeDatePicker}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button id="cancelUpdate" onClick={handleCancelButton}>
          Cancel
        </button>
        <button id="confirmUpdate" onClick={handleConfirmButton}>
          Confirm
        </button>
      </div>
    </div>
  );
};

export default UpdateTodoModal;
