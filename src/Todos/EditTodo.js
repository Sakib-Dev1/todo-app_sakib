import UpdateIcon from "@mui/icons-material/Update";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import "./EditTodo.css";

const EditTodo = ({ item, edit }) => {
  // console.log(item);
  const [updatedValue, setUpdatedValue] = useState(item.tName);
  console.log(updatedValue, setUpdatedValue);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ updatedValue });

    const editObj = { tName: updatedValue, id: item.id };

    edit(editObj);
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <TextField
        sx={{ width: "100%", mb: 2 }}
        value={updatedValue}
        onChange={(event) => setUpdatedValue(event.target.value)}
        InputProps={{
          endAdornment: (
            <Button
              color="success"
              variant="outlined"
              type="submit"
              onClick={(event) => setUpdatedValue(event.target.value)}
            >
              <UpdateIcon />
            </Button>
          ),
        }}
      />
    </form>
  );
};

export default EditTodo;
