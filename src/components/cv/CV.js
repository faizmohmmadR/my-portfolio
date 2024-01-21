import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";

// import cv from "../../assets/images/cv/";

const CV = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: { lg: "95vh", xs: "100vh" },
      }}
    >
      <Typography variant="h3" color="primary" padding="10px">
        My Resume
      </Typography>
      <Paper
        component="iframe"
        src="/pdf/junior-front-end-developer.pdf"
        sx={{
          height: { lg: "100%", md: "100%", sm: "100%", xs: "100%" },
          width: "30%",
        }}
      ></Paper>
      <Button variant="contained" sx={{ mt: 2 }}>
        <a
          style={{ textDecoration: "none" }}
          href="/pdf/junior-front-end-developer.pdf"
          download
        >
          Download
        </a>
      </Button>
    </Box>
  );
};

export default CV;
