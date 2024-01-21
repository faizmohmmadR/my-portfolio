import React, { Fragment } from "react";
import "./home.css";
import NavBar from "./NavBar";
import { Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";
import { indigo } from "@mui/material/colors";
import Type from "./Type";

const infos = [
  {
    me: "Hi I am Faiz Mohammad Rahmdel",
    fild: "I am Frontend Web Developer!!",
    skills: "My Experences: CSS,HTML,JavaScript,ReactJS,NextJS,TypeScript",
  },
];
const Home = () => {
  console.log(indigo);
  return (
    <div className="root">
      <NavBar />
      <Typography color="#aa55fa" variant="h3" sx={{ textAlign: "start",mt: 2 }}>
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
    </div>
  );
};

export default Home;
