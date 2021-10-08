import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useState } from "react";
import Todo from "./Todos/Todo";
import TodoList from "./Todos/TodoList";
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
  const removeTodo = (id) => {
    const removeArr = todoList.filter((todo) => todo.id !== id);
    setTodoList(removeArr);
  };
  return (
    <Container maxWidth="md">
      <Box sx={{ bgcolor: "#cfe8fc", width: "auto", height: "50vh" }}>
        <Todo onAddTodos={addTodoListHandler} />
      </Box>

      <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
        <div className="btn-clear">
          <Button onClick={clearTodo} variant="outlined">
            ClearTodos
          </Button>
        </div>
        <TodoList remove={removeTodo} todos={todoList} />
      </Box>
    </Container>
  );
};

export default App;
