import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import NightlightIcon from "@mui/icons-material/Nightlight";

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NavBar = ({ setMode, mode }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  let color = "white";

  if (mode === "dark") {
    color = "white";
  } else {
    color = "black";
  }

  return (
    <AppBar
      position="sticky"
      sx={{ color: "#61dafb", backgroundColor: "#2b0b3a", opacity: "0.9" }}
    >
      <Container>
        <StyledToolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
            sx={{ display: { xs: "block", sm: "none" }, mt: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Link
            style={{
              textDecoration: "none",
              color: "#61dafb",
              fontWeight: "bold",
            }}
            to="/"
          >
            <Typography
              sx={{ display: { xs: "none", md: "block" } }}
              variant="h6"
            >
              Faiz Mohammad
            </Typography>
          </Link>

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
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{ style: { backgroundColor: "#2b0b3a" } }}
          >
            <MenuItem color="inherit" onClick={handleClose}>
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
            <MenuItem onClick={handleClose}>
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
            <MenuItem onClick={handleClose}>
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
            <MenuItem onClick={handleClose}>
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
            <MenuItem onClick={handleClose}>
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
            <MenuItem onClick={handleClose}>
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
