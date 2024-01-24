import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./project.css";
// import img from "../../assets/images/ai.png";
// import img2 from "../../assets/images/programming.png";
// import img3 from "../../assets/images/robotics.png";

import car_home from "../../assets/images/car-stor/car-home.png";
import car_dark from "../../assets/images/car-stor/car-dark-mode.png";
import car_edit from "../../assets/images/car-stor/car-edit.png";
import car_moblie from "../../assets/images/car-stor/car-moblie.png";
import car_product from "../../assets/images/car-stor/car-product.png";
import car_user_profile from "../../assets/images/car-stor/car-user-profile.png";

import dry_home from "../../assets/images/dry/dry-home.png";
import dry_product from "../../assets/images/dry/dry-product.png";
import dry_top from "../../assets/images/dry/dry-top.png";
import dry_footer from "../../assets/images/dry/dry-footer.png";
import dry_singup from "../../assets/images/dry/dry-singup.png";
import dry_add from "../../assets/images/dry/dry-add.png";

import plo_home from "../../assets/images/ploranzia/plo-home.png";
import plo_search from "../../assets/images/ploranzia/plo-search.png";
import plo_detail from "../../assets/images/ploranzia/plo-detail.png";
import plo_mobile from "../../assets/images/ploranzia/plo-mobile.png";
import plo_mobile1 from "../../assets/images/ploranzia/plo-mobile1.png";
import plo_profile from "../../assets/images/ploranzia/plo-user-profile.png";

import turest_home from "../../assets/images/turest/Screenshot from 2024-01-19 14-20-40.png";
import turest_page from "../../assets/images/turest/tures-pages.png";
import turest_page1 from "../../assets/images/turest/turest-pages.png";

const projects = [
  {
    title: "Car Store",
    discriptin: "Car Store is the only project in here",
    image: car_home,
    images: [
      { src: car_home },
      { src: car_dark },
      { src: car_edit },
      { src: car_moblie },
      { src: car_product },
      { src: car_user_profile },
    ],
  },
  {
    title: "Dry Fruits",
    discriptin: "Car Store is the only project in here",
    image: dry_home,
    images: [
      { src: dry_home },
      { src: dry_product },
      { src: dry_top },
      { src: dry_footer },
      { src: dry_singup },
      { src: dry_add },
    ],
  },
  {
    title: "Ploranzia ",
    discriptin: "Car Store is the only project in here",
    image: plo_home,
    images: [
      { src: plo_home },
      { src: plo_search },
      { src: plo_detail },
      { src: plo_mobile },
      { src: plo_mobile1 },
      { src: plo_profile },
    ],
  },

  {
    title: "Afghan Turest ",
    discriptin: "Car Store is the only project in here",
    image: turest_home,
    images: [{ src: turest_home }, { src: turest_page }, { src: turest_page1 }],
  },
];

const Projects = () => {
  const [imgUrl, setUrl] = useState();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.div variants={itemVariants}>
        <Grid container>
          {projects.map((project, index) => {
            return (
              <Box
                item
                key={index}
                className="center"
                bgcolor={"Background.default"}
                color={"text.primary"}
              >
                <Typography className="title" variant="h5" color="primary">
                  {project.title}
                </Typography>
                <Box
                  className="project-img"
                  component="img"
                  src={imgUrl || project.image}
                  sx={{
                    height: { sm: "60vh", md: "60vh", lg: "60vh", xs: "50vh" },
                    width: { xs: "95vw", sm: "90vw", md: "80vw", lg: "70vw" },
                  }}
                ></Box>
                <Box className="sub-image-container">
                  {project.images.map((image, index) => {
                    return (
                      <Box
                        key={index}
                        className="sub-image"
                        component="img"
                        onClick={(e) => {
                          setUrl(e.target.src);
                        }}
                        sx={{
                          height: {
                            xs: "15vh",
                            sm: "10vh",
                            md: "12vh",
                            lg: "15vh",
                          },
                          borderRadius: "15px",
                        }}
                        src={image.src}
                      ></Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Grid>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
