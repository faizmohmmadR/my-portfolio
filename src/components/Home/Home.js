import React from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  Avatar,
  Container,
} from "@mui/material";
import myImg from "../../assets/about.png";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Home2 from "./Home2";
import "./home.css";
const AvatarImage = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(20),
  height: theme.spacing(20),
}));

const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  height: "100vh",
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const Home = () => {
  return (
    <RootContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        // className="root"
      >
        <Grid
          container
          spacing={4}
          color={"#61dafb"}
          className="grid-center"
          mt={5}
          mb={1}
        >
          <Grid item lg={7} xs={12} sm={12} md={6}>
            <motion.div variants={itemVariants}>
              <Box md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Faiz Mohammad</strong>
                </h1>
              </Box>
              <Typography variant="h6" sx={{ marginTop: "10%" }}>
                <Typewriter
                  options={{
                    strings: ["Front-End Web Enginner"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </Typography>
            </motion.div>
          </Grid>

          <Grid item lg={5} md={6} sm={12} xs={12} className="grid-center">
            <motion.div variants={itemVariants}>
              <img
                src={myImg}
                style={{ width: "100%", height: "100%" }}
                className="img-fluid"
                alt="avatar"
              />
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </RootContainer>
  );
};

export default Home;
