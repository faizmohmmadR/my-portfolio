import { Box, LinearProgress, Typography } from "@mui/material";
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

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 101) {
          return 0;
        }
        const diff = Math.random() * 1;

        return Math.min(oldProgress + diff, value);
      });
    }, 20);

    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (
    <StyledBox
      sx={{
        width: { xs: "95vw", sm: "100vw", md: "75vw", lg: "50vw", xl: "50vw" },
      }}
    >
      <Typography
        color="white"
        sx={{
          width: { xs: "27%", sm: "17%", md: "20%", lg: "20%", xl: "13%" },
        }}
      >
        {skill}
      </Typography>
      <LinearProgress
        value={progress}
        variant="determinate"
        sx={{
          width: { xs: "60%", sm: "60%", md: "60%", lg: "60%", xl: "23%" },
          padding: "10px",
        }}
      />
      <Typography
        variant="body1"
        color="white"
        ml={2}
        sx={{
          width: {
            xs: "10%",
            sm: "10%",
            md: "10%",
            lg: "10%",
            xl: "3%",
          },
        }}
      >
        {Math.ceil(progress)}%
      </Typography>
    </StyledBox>
  );
};

export default Progress;
