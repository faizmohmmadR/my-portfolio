import { Box, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import "./components/style/style.css";
import "./components/Home/home.css";
// import NavBar from "./components/Home/NavBar";
import Home from "./components/Home/Home";

const App = () => {
  const [mode, setMode] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="root">
        <Home setMode={setMode} mode={mode} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
