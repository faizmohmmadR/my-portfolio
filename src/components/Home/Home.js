import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { indigo } from "@mui/material/colors";

const Home = () => {
  console.log(indigo);
  return (
    <Container>
      <Grid>
        <Typography
          color="#aa55fa"
          variant="h3"
          sx={{ textAlign: "start", mt: 2 }}
        >
          <Typewriter
            options={{
              strings: [
                "Hi I am Faiz Mohammad Rahmdel",
                "I am Front-End Web Developer!!",
                "Skills: CSS,HTML,JavaScript,ReactJS,NextJS,TypeScript",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </Typography>
      </Grid>
    </Container>
  );
};

export default Home;
