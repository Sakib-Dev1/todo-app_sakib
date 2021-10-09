import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import AddTodo from "./Todos/AddTodo";
import Todos from "./Todos/Todos";
const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addTodoListHandler = (tName) => {
    setTodoList((prevTodos) => {
      return [...prevTodos, { tName, id: Math.random().toString() }];
    });
  };
  const clearTodo = () => {
    setTodoList([]);
  };

  return (
    <Container
      sx={{
        position: " absolute",
        left: " 50%",
        top: " 50%",
        transform: " translate(-50%, -50%)",
      }}
      maxWidth="md"
    >
      <Box sx={{ bgcolor: "#cfe8fc", width: "auto", height: "50vh", mb: 4 }}>
        <AddTodo onAddTodos={addTodoListHandler} />
      </Box>

      <Box sx={{ bgcolor: "#eee", height: "auto", mb: 4 }}>
        <Todos clear={clearTodo} todos={todoList} />
      </Box>
    </Container>
  );
};

export default App;
