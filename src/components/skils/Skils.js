import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import "./style.css";
import Progress from "./Progress";

const skills = [
  { name: "HTML", value: 99 },
  { name: "CSS", value: 99 },
  { name: "JavaScript", value: 90 },
  { name: "TypeScript", value: 90 },
  { name: "MUL", value: 90 },
  { name: "Git/Github", value: 99 },
  { name: "Linux", value: 80 },
  { name: "Test", value: 70 },
];

const Skils = () => {
  return (
    <Grid container className="root">
      <Paper sx={{ padding: 5 }}>
        <Box component="div" className="root">
          <Typography variant="h3" mb={5} color="primary">
            My Skills
          </Typography>
          {skills.map((skill) => (
            <div key={skill.name} className="skill">
              <Progress
                key={skill.name}
                skill={skill.name}
                value={skill.value}
              />
            </div>
          ))}
        </Box>
      </Paper>
    </Grid>
  );
};

export default Skils;
