import { AddCircleOutlined } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./Todo.css";
const AddTodo = ({ onAddTodos }) => {
  const [todos, setTodos] = useState("");
  const addTodoHandler = (event) => {
    event.preventDefault();
    if (todos.trim().length === 0) {
      return;
    }
    onAddTodos(todos);
    setTodos("");
  };
  const addTodo = (event) => {
    setTodos(event.target.value);
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
    </>
  );
};

export default AddTodo;
