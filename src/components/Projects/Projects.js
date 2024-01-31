import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../CommonStyle/CommonStyle";
import "./project.css";
import { ProjectsInfo } from "./ProjectsInfo";
import { Link } from "react-router-dom";
const RootContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(),
  marginBottom: theme.spacing(4),
}));

const Project = () => {
  return (
    <RootContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        // className="root"
      >
        <motion.div variants={itemVariants}>
          <Typography variant="h3" textAlign={"center"}>
            Projects
          </Typography>
          <Grid container mt={4} gap={5} justifyContent={"center"}>
            {ProjectsInfo.map((project, i) => (
              <Grid
                item={true}
                xs={12}
                sm={4}
                md={4}
                lg={3}
                key={i}
                sx={{ boxShadow: "0px 0px 12px #333" }}
              >
                <Card
                  className="card-bacgroun-color"
                  sx={{
                    transitionProperty: "transform",
                    transitionDuration: "1s",
                    ":hover": {
                      transform: "scale(1.1,1.1)",
                    },
                  }}
                >
                  <Link
                    to={`detail/${project.id}`}
                    style={{ textDecoration: "none" }}
                    title="For more images and information please click on"
                  >
                    <CardMedia
                      component="img"
                      src={project.image}
                      height="150px"
                      sx={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                      alt={project.title}
                      translate="test for as"
                    ></CardMedia>
                  </Link>
                  <CardContent
                    className="text-color"
                    sx={{
                      height: { xl: "250px", lg: "30vh", xs: "30vh" },
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography variant="h5" color={"#61dafb"}>
                        {project.title}
                      </Typography>
                      <Typography>
                        {project.discriptin.length <= 150
                          ? project.discriptin
                          : `${project.discriptin.slice(0, 150)}...`}
                      </Typography>
                    </Box>

                    <Button
                      variant="contained"
                      sx={{ width: "8vw", backgroundColor: "#2b0b3a", mt: 1 }}
                      component="a"
                      href={project.githubLink}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </motion.div>
    </RootContainer>
  );
};

export default Project;
