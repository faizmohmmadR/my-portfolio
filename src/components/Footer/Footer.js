import styled from "@emotion/styled";
import { Box, Container, Grid, Stack } from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";

import FacebookIcon from "@mui/icons-material/Facebook";

import EmailIcon from "@mui/icons-material/Email";

import GitHubIcon from "@mui/icons-material/GitHub";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  backgroundColor: "#0a0416",
}));
const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <RootContainer>
      <Grid container spacing={3}>
        <Grid lg={4} md={4} sm={12} xs={12}>
          Designed By Faiz Mohammad
        </Grid>
        <Grid lg={4} md={4} sm={12} xs={12}>
          <h3>Copyright © {year} SB</h3>
        </Grid>
        <Grid lg={4} md={4} sm={12} xs={12}>
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
              <a href="#" target="_blank" rel="noreferrer">
                <InstagramIcon className="icon-colour" />
              </a>
            </li>
            <li className="social-icons">
              <a href="#" target="_blank" rel="noreferrer">
                <FacebookIcon className="icon-colour" />
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </RootContainer>
  );
};

export default Footer;
