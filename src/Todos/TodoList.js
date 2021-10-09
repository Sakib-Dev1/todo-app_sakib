import { DeleteIcon } from "@mui/icons-material/Delete";
import { EditIcon } from "@mui/icons-material/Edit";
import { Button, Checkbox, ListItem, Stack } from "@mui/material";
import { Box } from "@mui/system";

const TodoList = ({ todo }) => {
  const { tName, id } = todo;
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
      <ListItem key={id}>
        <Checkbox defaultChecked={false} color="success" />
        {tName}
      </ListItem>
      <Stack direction="row" spacing={2}>
        <Button
          color="success"
          variant="outlined"
          startIcon={<EditIcon />}
        ></Button>
        <Button
          color="error"
          // onClick={() => remove(todo.id)}
          variant="outlined"
          endIcon={<DeleteIcon />}
        ></Button>
      </Stack>
    </Box>
  );
};

export default TodoList;
