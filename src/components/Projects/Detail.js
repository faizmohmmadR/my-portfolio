import { Box, Container, Grid, Typography } from "@mui/material";
import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import { ProjectsInfo } from "./ProjectsInfo";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../CommonStyle/CommonStyle";

const Detail = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <Container sx={{ height: "100%" }}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        // className="root"
      >
        <motion.div variants={itemVariants}>
          {ProjectsInfo.map((project, i) => {
            return (
              <Fragment key={i}>
                {project.id === parseInt(id) && (
                  <Grid
                    container
                    textAlign={"center"}
                    justifyContent={"center"}
                  >
                    <Typography variant="h3">{project.title} images</Typography>
                    {project.images.map((image, i) => (
                      <motion.div variants={itemVariants}>
                        <Grid item={true} key={i} xs={12} lg={12} mt={3} mb={8}>
                          <Box
                            component="img"
                            src={image.src}
                            sx={{ width: "90%", height: "95%" }}
                          ></Box>
                        </Grid>
                      </motion.div>
                    ))}
                    <Typography
                      color={"white"}
                      width={"90%"}
                      mb={10}
                      textAlign={"start"}
                    >
                      {project.discriptin}
                    </Typography>
                  </Grid>
                )}
              </Fragment>
            );
          })}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Detail;
