import AddCircleOutlined from "@mui/icons-material/AddCircle";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header/Header";
import "./AddTodo.css";
import Todos from "./Todos";
const AddTodo = () => {
  const [todos, setTodos] = useState("");
  const [todoList, setTodoList] = useState([
    {
      tName: "Let's add something",
      id: uuidv4(),
      isCompleted: false,
    },
    {
      tName: "Good Morning",
      id: uuidv4(),
      isCompleted: false,
    },
  ]);

  const addTodoListHandler = (tName) => {
    console.log({ tName });
    setTodoList((prevTodos) => {
      return [...prevTodos, { tName, id: uuidv4(), isCompleted: false }];
    });
  };

  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todos.trim().length === 0) {
      return;
    }
    addTodoListHandler(todos);
    setTodos("");
  };
  const addTodo = (event) => {
    setTodos(event.target.value);
  };

  const clearTodo = () => {
    setTodoList([]);
  };
  const edit = ({ tName, id }) => {
    const newList = todoList.map((todo) => {
      return todo.id === id ? { ...todo, tName } : todo;
    });
    console.log({ newList });
    setTodoList(newList);
  };
  const remove = (id) => {
    const removeArr = todoList.filter((todo) => todo.id !== id);
    console.log(id);
    setTodoList(removeArr);
  };
  const handleCheckboxChange = (id) => {
    console.log({ id });
    const todoForCheckBox = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
      return todo;
    });
    setTodoList(todoForCheckBox);
  };
  const activeTodos = todoList.filter(
    (todo) => todo.isCompleted === false
  ).length;
  console.log(activeTodos);

  return (
    <>
      <Header active={activeTodos} />
      <div className="container">
        <form onSubmit={addTodoHandler}>
          <TextField
            label="Enter a task"
            value={todos}
            onChange={addTodo}
            InputProps={{
              endAdornment: (
                <Button color="primary" variant="outlined" type="submit">
                  <AddCircleOutlined />
                </Button>
              ),
            }}
          />
        </form>
      </div>

      <Box sx={{ height: "auto", mb: 4 }}>
        <Todos
          todos={todoList}
          edit={edit}
          remove={remove}
          clear={clearTodo}
          check={handleCheckboxChange}
        />
      </Box>
    </>
  );
};

export default AddTodo;
