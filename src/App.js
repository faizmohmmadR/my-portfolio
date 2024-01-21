import { Box } from "@mui/material";
import React from "react";
import "./components/style/style.css";
import "./components/Home/home.css";
// import NavBar from "./components/Home/NavBar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <Box className="root">
      <Home />
    </Box>
  );
};

export default App;
