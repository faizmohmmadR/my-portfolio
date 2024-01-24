import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./skills.css";
import styled from "@emotion/styled";

const StyledBox = styled(Box)({
  width: "70vw",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: 10,
});

const Progress = ({ skill, value }) => {
  const [progress, setProgress] = useState(1);
  const [state, setState] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress == 101) {
          return 0;
        }
        const diff = Math.random() * 1;
        setState(true);
        return Math.min(oldProgress + diff, value);
      });
    }, 20);

    return () => {
      if (state) {
        clearTimeout(timer);
      }
    };
  }, []);
  return (
    <StyledBox
      sx={{ width: { xs: "100vw", sm: "100vw", md: "75vw", lg: "50vw" } }}
    >
      <Typography color="#61dafb" sx={{ width: { xs: "35%", sm: "20%" } }}>
        {skill}
      </Typography>
      <LinearProgress
        value={progress}
        variant="determinate"
        sx={{ width: "75%", padding: "10px" }}
      />
      <Typography variant="body1" color="#07e237" ml={2} width="10%">
        {Math.ceil(progress)}%
      </Typography>
    </StyledBox>
  );
};

export default Progress;
