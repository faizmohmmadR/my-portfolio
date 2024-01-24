import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  height: "73vh",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Description = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Name = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const About = () => {
  return (
    <RootContainer maxWidth="md">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Grid item xs={12} md={8}>
            <motion.div variants={itemVariants}>
              <Typography
                variant="h2"
                sx={{ marginBottom: "16px", fontWeight: 700 }}
              >
                About Me
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{ marginBottom: "32px", lineHeight: 1.6 }}
              >
                Hi, I'm Faiz Mohammad Rahmdel, a frontend web engineer with 4
                years of experience. I specialize in creating beautiful and
                performant user interfaces using modern web technologies. With
                expertise in CSS/CSS3, HTML/HTML5, JavaScript, ReactJS, Next.js,
                and Redux, I bring your ideas to life with clean, maintainable,
                and scalable code.
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                My Skills:
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginTop: "8px",
                }}
              >
                <Typography
                  variant="body2"
                  color="#3f2783"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  CSS/CSS3
                </Typography>
                <Typography
                  variant="body2"
                  color="#3f2783"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  HTML/HTML5
                </Typography>
                <Typography
                  variant="body2"
                  color="#3f2783"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  JavaScript
                </Typography>
                <Typography
                  variant="body2"
                  color="#3f2783"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  ReactJS
                </Typography>
                <Typography
                  variant="body2"
                  color="#3f2783"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  Next.js
                </Typography>
                <Typography
                  variant="body2"
                  color="#3f2783"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  Redux
                </Typography>
                <Typography
                  variant="body2"
                  color="#3f2783"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  Material-UI (MUI)
                </Typography>
                <Typography
                  variant="body2"
                  color="#3f2783"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  Restful APIs
                </Typography>
                <Typography
                  variant="body2"
                  color="#3f2783"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  Responsive Design
                </Typography>
                <Typography
                  variant="body2"
                  color="#3f2783"
                  sx={{
                    backgroundColor: "#F5F5F5",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  Clean Code
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </motion.div>
      </motion.div>
    </RootContainer>
  );
};

export default About;
