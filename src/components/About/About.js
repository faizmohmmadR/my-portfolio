import React from "react";
import { Typography, Container, Grid, Box } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
// import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import FeedIcon from "@mui/icons-material/Feed";
import { SkillsList } from "../Skills/SkillsList";
const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(4),
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const MyTypography = styled(Typography)({
  backgroundColor: "#F5F5F5",
  padding: "4px 8px",
  borderRadius: "4px",
  color: "#87209e",
  fontWeight: "bold",
});

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
              <Typography variant="h2" sx={{ marginBottom: "16px" }}>
                Know Who <span style={{ color: "#87209e" }}> I'M</span>
              </Typography>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Typography
                variant="body1"
                sx={{ marginBottom: "32px", lineHeight: 1.6, color: "white" }}
              >
                Hi, I'm Faiz Mohammad Rahmdel from{" "}
                <spam style={{ color: "#51e4d0" }}>Ghor Afghanistan</spam>, a
                frontend web engineer currently pursuing a degree in Computer
                Science at Kandahar University. I am in my last semester and
                have four years of experience in front-end development.
                <br />
                <br />
                Specializing in CSS, HTML, JavaScript, TypeScript, React.js,
                Next.js, and RESTful APIs, I have a passion for creating
                beautiful and performant user interfaces. My expertise lies in
                bringing ideas to life with clean, maintainable, and scalable
                code.
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
                {SkillsList.map((skill, i) => (
                  <MyTypography variant="body2" key={i}>
                    {skill.name}
                  </MyTypography>
                ))}
              </Box>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Typography mt={5} color={"white"}>
                Apart from coding, some other activities that I love to do!
              </Typography>
              <Grid container fontSize={"30px"}>
                <Grid
                  xs={6}
                  sm={3}
                  padding={2}
                  textAlign={"center"}
                  color="white"
                >
                  <LocalAirportIcon />
                  <Typography>Travelling</Typography>
                </Grid>
                <Grid
                  xs={6}
                  sm={3}
                  padding={2}
                  textAlign={"center"}
                  color="white"
                >
                  <SportsEsportsIcon />
                  <Typography>Playing Games</Typography>
                </Grid>
                <Grid
                  xs={6}
                  sm={3}
                  padding={2}
                  textAlign={"center"}
                  color="white"
                >
                  <MenuBookIcon />
                  <Typography>Studing</Typography>
                </Grid>
                <Grid
                  xs={6}
                  sm={3}
                  padding={2}
                  textAlign={"center"}
                  color="white"
                >
                  <FeedIcon />
                  <Typography>News Reading</Typography>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>
        </motion.div>
      </motion.div>
    </RootContainer>
  );
};

export default About;
