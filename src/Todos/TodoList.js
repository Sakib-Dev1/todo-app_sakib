import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Checkbox, ListItem, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import EditTodo from "./EditTodo";

const TodoList = ({ todo, remove,edit }) => {
  const [isEditing, setIsEditing] = useState(false);
  console.log(todo);
  const { tName, id } = todo;
  console.log(tName, id);
  const thisComponent = (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 1,
        bgcolor: "background.paper",
        mb: 2,
      }}
    >
      <ListItem key={id}>
        <Checkbox defaultChecked={false} color="success" />
        {tName}
      </ListItem>
      <Stack direction="row" spacing={2}>
        <Button
          onClick={() => setIsEditing(true)}
          color="success"
          variant="outlined"
          startIcon={<EditIcon />}
        ></Button>
        <Button
          onClick={() => remove(id)}
          color="error"
          variant="outlined"
          endIcon={<DeleteIcon />}
        ></Button>
      </Stack>
    </Box>
  );
  const newComponent = <EditTodo edit={edit} item={todo} />;
  return <>{(isEditing && newComponent) || (!isEditing && thisComponent)}</>;
};

export default TodoList;
