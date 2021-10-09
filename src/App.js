import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AddTodo from "./Todos/AddTodo";

const App = () => {
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
      <Box sx={{ bgcolor: "#cfe8fc", width: "auto", height: "auto", mb: 4 }}>
        <AddTodo />
      </Box>
    </Container>
  );
};

export default App;
