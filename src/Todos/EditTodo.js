import UpdateIcon from "@mui/icons-material/Update";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./EditTodo.css";

const EditTodo = ({ item, edit, onUpdateList }) => {
  // console.log(item);
  const [updatedValue, setUpdatedValue] = useState(item.tName);

  const handleSubmit = (event) => {
    event.preventDefault();

    const editObj = { tName: updatedValue, id: item.id };
    console.log({ editObj });
    edit(editObj);
    onUpdateList();
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        sx={{ width: "100%", mb: 2 }}
        value={updatedValue}
        onChange={(event) => setUpdatedValue(event.target.value)}
        InputProps={{
          endAdornment: (
            <Button color="success" variant="outlined" type="submit">
              <UpdateIcon />
            </Button>
          ),
        }}
      />
    </form>
  );
};

export default EditTodo;
