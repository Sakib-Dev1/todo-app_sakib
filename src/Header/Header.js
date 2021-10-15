import { Button, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import moment from "moment";
import { useState } from "react";

const Header = ({ active }) => {
  let time = moment().format("MMMM Do YYYY, h:mm:ss a");
  const [cTime, setcTime] = useState(time);

  const updateTime = () => {
    time = moment().format("MMMM Do YYYY, h:mm:ss a");
    setcTime(time);
  };
  setInterval(updateTime, 1000);
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
      <Typography sx={{ textAlign: "center" }}>{cTime}</Typography>
      <Box sx={{ flexGrow: 1, pt: 4 }}>
        <AppBar
          sx={{
            width: "100%",
            maxWidth: 460,
            bgcolor: "#fff",
            mx: "auto",
          }}
          position="static"
        >
          <Toolbar>
            <Container
              sx={{
                display: { xs: "flex", md: "flex" },
              }}
            >
              <Box
                sx={{
                  display: { xs: "flex", md: "flex" },
                  alignItems: { xs: "center", md: "center" },
                }}
              >
                <Typography
                  variant="h6"
                  component="h6"
                  noWrap
                  sx={{
                    fontSize: "1rem",
                    mr: 2,
                    color: "#333",
                  }}
                >
                  {active} active
                </Typography>
              </Box>
              <Box
                sx={{
                  display: { xs: "flex", md: "flex" },
                  justifyContent: { xs: "center", md: "center" },
                  alignItems: { xs: "center", md: "center" },
                }}
              >
                <Button noWrap variant="contained">
                  All
                </Button>
                <Button sx={{ ml: 1, mr: 1 }} noWrap variant="contained">
                  Complete
                </Button>
                <Button noWrap variant="contained">
                  Uncomplete
                </Button>
              </Box>
            </Container>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default Header;
