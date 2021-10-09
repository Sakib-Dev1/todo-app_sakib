import { Button, List } from "@mui/material";
import TodoList from "./TodoList";
import "./Todos.css";

const Todos = ({ todos, clear, remove, edit }) => {
  console.log(todos);

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
        return (
          <TodoList key={todo.id} edit={edit} remove={remove} todo={todo} />
        );
      })}
      {todos.length > 0 && (
        <div className="btn-clear">
          <Button onClick={clear} variant="outlined">
            ClearTodos
          </Button>
        </div>
      )}
    </List>
  );
};

export default Todos;
