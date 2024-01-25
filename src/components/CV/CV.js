import { Box, Container, Paper } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
// import cv from "../../assets/images/cv/";

const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
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

const CV = () => {
  return (
    <RootContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: { xs: "73vh", sm: "95vh" },
              color: "#61dafb",
            }}
          >
            <Paper
              component="iframe"
              src="/pdf/junior-front-end-developer.pdf"
              sx={{
                height: { xs: "100vh", sm: "100%" },
                width: { xs: "100%", sm: "50%" },
              }}
            ></Paper>

            <a
              style={{ textDecoration: "none" }}
              href="/pdf/junior-front-end-developer.pdf"
              download
            >
              <FileDownloadIcon
                sx={{
                  backgroundColor: "green",
                  width: { xs: "10vw", sm: "5vw" },
                  height: { xs: "5vh", lg: "10vh" },
                  borderRadius: "50%",
                  color: "white",
                  position: "relative",
                  bottom: "100px",
                  ":hover": {
                    opacity: "0.8",
                  },
                }}
              />
            </a>
          </Box>
        </motion.div>
      </motion.div>
    </RootContainer>
  );
};

export default CV;
