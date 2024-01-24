import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NightlightIcon from "@mui/icons-material/Nightlight";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NavBar = ({ setMode, mode }) => {
  const [openMenu, setOpenMenu] = useState(false);

  let color = "white";

  if (mode === "dark") {
    color = "white";
  } else {
    color = "black";
  }

  return (
    <AppBar
      position="sticky"
      sx={{ color: "#61dafb", backgroundColor: "#2b0b3a", opacity: "0.8" }}
    >
      <Container>
        <StyledToolbar>
          <MenuItem
            onClick={() => {
              setOpenMenu(true);
            }}
            sx={{ display: { xs: "block", sm: "none" }, mt: 1 }}
          >
            <MenuIcon />
          </MenuItem>
          <Typography
            sx={{ display: { xs: "none", md: "block" } }}
            variant="h6"
          >
            Faiz Mohammad
          </Typography>

          <Typography
            sx={{ display: { xs: "block", md: "none" } }}
            variant="h6"
          >
            Rahmdel
          </Typography>

          <Box
            sx={{ display: { xs: "none", sm: "flex" } }}
            bgcolor={"Background.default"}
            color={"#61dafb"}
          >
            <MenuItem>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                Home
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                About
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                Contact
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/projects"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                Projects
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/cv"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                Resume
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/skills"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                Skills
              </NavLink>
            </MenuItem>
          </Box>
          <Menu
            id="demo-positioned-menu"
            open={openMenu}
            onClick={() => {
              setOpenMenu(false);
            }}
            onClose={() => {
              setOpenMenu(false);
            }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem>
              <NavLink
                to="/"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                Home
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/about"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                About
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/contact"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                Contact
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/projects"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                Projects
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/cv"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                Resume
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/skills"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#61dafb",
                    textDecoration: "none",
                  };
                }}
              >
                Skills
              </NavLink>
            </MenuItem>
          </Menu>
          <Box>
            <Avatar src="./myPic/mypic.jpeg" />
          </Box>

          <NightlightIcon
            onClick={() => {
              setMode(mode === "dark" ? "light" : "dark");
            }}
            sx={{
              ":hover": { cursor: "pointer" },

              color: color,
              display: "none",
            }}
          />
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
