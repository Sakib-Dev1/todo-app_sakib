import AddCircleOutlined from "@mui/icons-material/AddCircle";
import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddTodo.css";
import Todos from "./Todos";
const AddTodo = () => {
  const [todos, setTodos] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodoListHandler = (tName) => {
    setTodoList((prevTodos) => {
      return [...prevTodos, { tName, id: uuidv4() }];
    });
  };
  const clearTodo = () => {
    setTodoList([]);
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
  const edit = (id) => {
    const editTodo = todoList.find((todo) => todo.id === id);
    console.log(id);
    setTodoList(editTodo);
  };
  const remove = (id) => {
    const removeArr = todoList.filter((todo) => todo.id !== id);
    console.log(id);
    setTodoList(removeArr);
  };
  return (
    <>
      <div className="container">
        <form onSubmit={addTodoHandler}>
          <TextField
            value={todos}
            onChange={addTodo}
            InputProps={{
              endAdornment: (
                <Button type="submit">
                  <AddCircleOutlined />
                </Button>
              ),
            }}
          />
        </form>
      </div>
      <Box sx={{ height: "auto", mb: 4 }}>
        <Todos edit={edit} remove={remove} clear={clearTodo} todos={todoList} />
      </Box>
    </>
  );
};

export default AddTodo;
