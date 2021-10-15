import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddTodo from "./Todos/AddTodo";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          minwidth: "200px",
          minheight: "500px",
          mb: 4,
          mt: 20,
          borderRadius: "1rem",
        }}
      >
        <AddTodo />
      </Box>
    </Container>
  );
};

export default App;
