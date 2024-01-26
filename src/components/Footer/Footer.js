import styled from "@emotion/styled";
import { Container, Grid } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";

import FacebookIcon from "@mui/icons-material/Facebook";

// import EmailIcon from "@mui/icons-material/Email";

import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
}));
const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Grid container backgroundColor="#0a0416" padding={"10px"}>
      <RootContainer>
        <Grid container spacing={4} textAlign={"center"} alignItems={"center"}>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            padding={1}
            textAlign={"center"}
          >
            Designed By Faiz Mohammad Rahmdel
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            padding={1}
            textAlign={"center"}
          >
            <h3>Copyright © {year} SB</h3>
          </Grid>
          <Grid
            item
            lg={4}
            md={4}
            sm={12}
            xs={12}
            padding={1}
            textAlign={"center"}
          >
            <ul className="home-about-social-links">
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
                  href="https://github.com/faizmohmmadR"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon className="icon-colour" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/faizmohmmadR"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon className="icon-colour" />
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </RootContainer>
    </Grid>
  );
};

export default Footer;
