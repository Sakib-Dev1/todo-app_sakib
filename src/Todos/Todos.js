import { Button, List } from "@mui/material";
import React from "react";
import TodoList from "./TodoList";
import "./TodoList.css";

const Todos = ({ todos, clear }) => {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 460,

        borderRadius: 4,
        mx: "auto",
      }}
    >
      {todos.map((todo) => {
        return <TodoList todo={todo} />;
      })}

      <div className="btn-clear">
        <Button ocClick={clear} variant="outlined">
          ClearTodos
        </Button>
      </div>
    </List>
  );
};

export default Todos;
