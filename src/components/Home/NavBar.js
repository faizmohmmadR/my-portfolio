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

import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
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

          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>CV</MenuItem>
            <MenuItem>Skills</MenuItem>
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
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Contact</MenuItem>
            <MenuItem>Projects</MenuItem>
            <MenuItem>CV</MenuItem>
            <MenuItem>Skills</MenuItem>
          </Menu>

          <Avatar src="./myPic/mypic.jpeg" />
        </StyledToolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
