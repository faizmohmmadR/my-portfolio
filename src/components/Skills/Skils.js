import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./skills.css";
import Progress from "./Progress";

const skills = [
  { name: "HTML5", value: 99 },
  { name: "CSS3", value: 99 },
  { name: "Responsive", value: 100 },
  { name: "JavaScript", value: 90 },
  { name: "TypeScript", value: 80 },
  { name: "React JS", value: 95 },
  { name: "NextJS", value: 90 },
  { name: "Redux", value: 95 },
  { name: "ReactQuery", value: 94 },
  { name: "MUI", value: 92 },
  { name: "Git/Github/Gitlab", value: 98 },
  { name: "Linux", value: 85 },
  { name: "Clean Code", value: 97 },
];

const Skils = () => {
  return (
    <Container>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 1,
        }}
        bgcolor={"Background.default"}
        color={"text.primary"}
      >
        <Typography variant="h3" mb={3} color={"primary"}>
          My Skills
        </Typography>
        {skills.map((skill, i) => (
          <Box key={i}>
            <Progress key={i} skill={skill.name} value={skill.value} />
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Skils;
