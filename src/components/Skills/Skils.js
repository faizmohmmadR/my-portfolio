import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import "./skills.css";
import Progress from "./Progress";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { SkillsList } from "./SkillsList";
import { containerVariants, itemVariants } from "../CommonStyle/CommonStyle";
const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const Skils = () => {
  return (
    <RootContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            bgcolor={"Background.default"}
            color={"text.primary"}
          >
            <Typography variant="h5" mb={1} color={"#61dafb"}>
              My Skills
            </Typography>
            {SkillsList.map((skill, i) => (
              <Box key={i}>
                <Progress key={i} skill={skill.name} value={skill.value} />
              </Box>
            ))}
          </Grid>
        </motion.div>
      </motion.div>
    </RootContainer>
  );
};

export default Skils;
