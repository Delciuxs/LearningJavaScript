import React from "react";
import { useState, useEffect } from "react";
import { List } from "immutable";

import TodoList from "./TodoList";
import Formulario from "./Formulario";

import "./App.scss";
import UpdateTodoModal from "./UpdateTodoModal";

const App = () => {
  const [todos, setTodos] = useState(List);
  const [showModalUpdateTodo, setShowModalUpdateTodo] = useState(false);
  const [todoToBeUpdated, setTodoToBeUpdated] = useState({});
  const [idTodoToBeUpdated, setIdTodoToBeUpdated] = useState(-1);

  const addTodo = (todo) => {
    const auxTodos = sortTodoByDate(todos.push(todo));
    setTodos(auxTodos);
    updateLocalStorage(auxTodos);
  };
  const deleteTodo = (index) => {
    const auxTodos = todos.delete(index);
    setTodos(auxTodos);
    updateLocalStorage(auxTodos);
  };
  const getTodo = (index) => todos.get(index);
  const updateTodo = (index, newTodo) => {
    const auxTodos = sortTodoByDate(todos.set(index, newTodo));
    setTodos(auxTodos);
    updateLocalStorage(auxTodos);
  };

  const openModalUpdateTodo = (idTodo) => {
    setIdTodoToBeUpdated(idTodo);
    setShowModalUpdateTodo(true);
    setTodoToBeUpdated(getTodo(idTodo));
  };
  const closeModalUpdateTodo = () => {
    setShowModalUpdateTodo(false);
  };

  const updateLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const sortTodoByDate = (todoList) => {
    const todoListSorted = todoList.sort((val1, val2) => {
      const date1 = new Date(val1.fecha);
      const date2 = new Date(val2.fecha);
      if (date1 < date2) {
        return -1;
      }
      if (date1 > date2) {
        return 1;
      } else {
        return 0;
      }
    });
    return todoListSorted;
  };

  useEffect(() => {
    const todosStr = localStorage.getItem("todos");
    if (todosStr && todosStr.length > 0) {
      const todos = JSON.parse(todosStr);
      let auxTodos = List();
      todos.forEach((todo) => {
        auxTodos = auxTodos.push(todo);
      });
      setTodos(sortTodoByDate(auxTodos));
    }
  }, []);

  return (
    <div className="contenedor">
      {!showModalUpdateTodo ? (
        <>
          <Formulario addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            getTodo={getTodo}
            openModal={openModalUpdateTodo}
          />
        </>
      ) : (
        <UpdateTodoModal
          closeModal={closeModalUpdateTodo}
          todo={todoToBeUpdated}
          idTodo={idTodoToBeUpdated}
          updateTodo={updateTodo}
        />
      )}
    </div>
  );
};

export default App;
