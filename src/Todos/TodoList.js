import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { List, ListItem } from "@mui/material";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/system";
import "./TodoList.css";

const TodoList = ({ todos, remove }) => {
  console.log(todos);
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 460,
          bgcolor: "background.paper",
          borderRadius: 4,
          mx: "auto",
        }}
      >
        {todos.map((todo) => {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: 1,
                bgcolor: "background.paper",
              }}
            >
              <ListItem key={todo.id}>
                <Checkbox defaultChecked={false} color="success" />
                {todo.tName}
              </ListItem>
              <Stack direction="row" spacing={2}>
                <Button variant="outlined" startIcon={<EditIcon />}></Button>
                <Button
                  onClick={() => remove(todo.id)}
                  variant="outlined"
                  endIcon={<DeleteIcon />}
                ></Button>
              </Stack>
            </Box>
          );
        })}
      </List>
    </>
  );
};

export default TodoList;
