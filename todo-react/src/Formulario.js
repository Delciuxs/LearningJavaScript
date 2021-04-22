import React from "react";
import { useRef, useState } from "react";
import Fecha from "./Fecha";

import "./Formulario.scss";

const Formulario = (props) => {
  const todayDate = new Date();
  const [datePickerValue, onChangeDatePicker] = useState(todayDate);
  const inputRef = useRef();

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const todoText = event.target.firstChild.value;
    if (todoText && todoText.length > 0) {
      props.addTodo({
        todoText: todoText,
        terminada: false,
        fecha: datePickerValue,
      });
    }
    inputRef.current.value = "";
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmitForm}>
        <input
          ref={inputRef}
          className="tarea"
          type="text"
          id="texto-tarea"
          placeholder="Tarea"
          autoComplete="off"
        />
        <div
          className="date-picker"
          onBlur={() => {
            if (datePickerValue === null) {
              onChangeDatePicker(todayDate);
            }
          }}
        >
          <Fecha
            datePickerValue={datePickerValue}
            onChangeDatePicker={onChangeDatePicker}
          />
        </div>
        <input type="submit" value="+" id="agregar" />
      </form>
    </>
  );
};

export default Formulario;
