import UpdateIcon from "@mui/icons-material/Update";
import { Button, ListItem } from "@mui/material";
import { useState } from "react";
import "./EditTodo.css";

const EditTodo = ({ item, edit }) => {
  console.log(item);
  const [updatedValue, setUpdatedValue] = useState(item.tName);

  const handleSubmit = (event) => {
    event.preventDefault();
    edit();
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <ListItem>{updatedValue}</ListItem>

      <Button
        type="submit"
        onClick={(event) => setUpdatedValue(event.target.value)}
      >
        <UpdateIcon />
      </Button>
    </form>
  );
};

export default EditTodo;
