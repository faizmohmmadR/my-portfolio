import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";

const Progress = ({ skill, value }) => {
  const [progress, setProgress] = useState(1);
  const [state, setState] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress == 100) {
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
    <>
      <Typography className="title">{skill}</Typography>
      <LinearProgress
        value={progress}
        variant="determinate"
        sx={{ width: "50vw", padding: "10px" }}
      />
      <Typography variant="body1" color='primary' className="title" ml={2}>
        {Math.ceil(progress)}%
      </Typography>
    </>
  );
};

export default Progress;
