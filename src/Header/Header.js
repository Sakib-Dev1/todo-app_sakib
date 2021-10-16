import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { useState } from "react";

const Header = ({ active, unCompletedTodos, completedTodos, allTodos }) => {
  let time = moment().format("MMMM Do YYYY, h:mm:ss a");
  const [cTime, setcTime] = useState(time);

  const updateTime = () => {
    time = moment().format("MMMM Do YYYY, h:mm:ss a");
    setcTime(time);
  };
  setInterval(updateTime, 1000);
  const handleComplete = (e) => {
    completedTodos();
  };
  const handleUncomplete = (e) => {
    unCompletedTodos();
  };
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          textTransform: "uppercase",
          color: "#333",
          p: 4,
        }}
      >
        ToDo
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          color: "#333",
          borderRadius: "9px",
        }}
      >
        <Typography sx={{ mb: 2 }} variant="h5" component="h5">
          {cTime}
        </Typography>
        <Typography
          noWrap
          sx={{
            fontSize: "1rem",
            mb: 1,
            color: "#32CD32",
          }}
        >
          {active} Active Tasks
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, pt: 4 }}>
        <AppBar
          sx={{
            width: "100%",
            maxWidth: 460,
            bgcolor: "#fff",
            mx: "auto",
            borderRadius: "9px",
          }}
          position="static"
        >
          <Toolbar
            sx={{
              display: { xs: "flex", md: "flex" },
              justifyContent: { xs: "space-between", md: "space-between" },
              alignItems: { xs: "center", md: "center" },
            }}
          >
            <Button
              color="secondary"
              onClick={() => allTodos()}
              variant="contained"
            >
              All
            </Button>
            <Button
              color="secondary"
              onClick={handleComplete}
              variant="contained"
            >
              Complete
            </Button>
            <Button
              color="secondary"
              onClick={handleUncomplete}
              variant="contained"
            >
              Incomplete
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
