import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NavBar = ({ setMode, mode }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const navigate = useNavigate();
  return (
    <AppBar position="sticky">
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
            F.M
          </Typography>

          <Box
            sx={{ display: { xs: "none", sm: "flex" } }}
            bgcolor={"Background.default"}
            color={"text.primary"}
          >
            <MenuItem>
              <NavLink
                to="/home"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#aa55fa",
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
                    color: isActive ? "white" : "#aa55fa",
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
                    color: isActive ? "white" : "#aa55fa",
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
                    color: isActive ? "white" : "#aa55fa",
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
                    color: isActive ? "white" : "#aa55fa",
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
                    color: isActive ? "white" : "#aa55fa",
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
                to="/home"
                style={({ isActive }) => {
                  return {
                    color: isActive ? "white" : "#aa55fa",
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
                    color: isActive ? "white" : "#aa55fa",
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
                    color: isActive ? "white" : "#aa55fa",
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
                    color: isActive ? "white" : "#aa55fa",
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
                    color: isActive ? "white" : "#aa55fa",
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
                    color: isActive ? "white" : "#aa55fa",
                    textDecoration: "none",
                  };
                }}
              >
                Skills
              </NavLink>
            </MenuItem>
          </Menu>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Switch
              onChange={() => {
                setMode(mode === "dark" ? "light" : "dark");
              }}
            />
            <Avatar src="./myPic/mypic.jpeg" />
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
