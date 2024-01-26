import React from "react";
import { Typography, Grid, Avatar, Container } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

import InstagramIcon from "@mui/icons-material/Instagram";

import FacebookIcon from "@mui/icons-material/Facebook";

// import EmailIcon from "@mui/icons-material/Email";

import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { containerVariants, itemVariants } from "../CommonStyle/CommonStyle";
const AvatarImage = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(30),
  height: theme.spacing(30),
}));

const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  marginTop: "5%",
}));

const Home2 = () => {
  return (
    <RootContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Grid
          container
          spacing={4}
          justifyContent="center"
          color={"#61dafb"}
          className="grid-center"
        >
          <Grid item xs={12} sm={12} md={9} lg={8} className="grid-center">
            <motion.div variants={itemVariants}>
              <Typography
                sx={{ fontSize: { xs: "1.5em", sm: "2.6em" } }}
                className="white-color"
              >
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </Typography>
              <p className="home-about-body white-color">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️
                <br />
                <br />I am fluent in classics like
                <i>
                  <b className="purple">
                    Javascript,TypeScript,ReactJS and NextJS.{" "}
                  </b>
                </i>
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also in areas related to <b className="purple">Blockchain.</b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className="purple">JavaScript</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={4} className="grid-center">
            <motion.div variants={itemVariants}>
              <AvatarImage alt="Profile Picture" src="./myPic/mypic.jpeg" />
            </motion.div>
          </Grid>
        </Grid>

        <Grid item lg={12} textAlign={"center"}>
          <Typography variant="h4" textAlign={"center"} paddingTop={2}>
            FIND ME ON
          </Typography>
          <Typography pb={2} mt={2}>
            Feel free to <span className="purple">connect </span>with me
          </Typography>
          <ul style={{ marginRight: "25px" }}>
            <li className="social-icons">
              <a
                href="https://github.com/faizmohmmadR"
                target="_blank"
                rel="noreferrer"
              >
                <GitHubIcon className="icon-colour" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/faizmohammad-rahmdel061028251"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon className="icon-colour" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/faizmohammadramdel/"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon className="icon-colour" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/profile.php?id=100015165183602&mibextid=kFxxJD"
                target="_blank"
                rel="noreferrer"
              >
                <FacebookIcon className="icon-colour" />
              </a>
            </li>
          </ul>
        </Grid>
      </motion.div>
    </RootContainer>
  );
};

export default Home2;
