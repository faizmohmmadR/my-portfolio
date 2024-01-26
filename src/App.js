import { Box, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
// import "./components/style/style.css";
// import "./components/Home/home.css";
// import NavBar from "./components/Home/NavBar";
import { Outlet } from "react-router-dom";
import NavBar from "./components/Home/NavBar";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"Background.default"} color={"#61dafb"}>
        <NavBar setMode={setMode} mode={mode} />
        <Outlet />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
