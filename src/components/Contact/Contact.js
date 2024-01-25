import React from "react";
import { Typography, Container, Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";

const RootContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  height: "81vh",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  marginBottom: theme.spacing(2),
}));

const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  alignSelf: "flex-start",
  width: "fit-content",
  marginTop: theme.spacing(2),
}));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <RootContainer maxWidth="md">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <Box>
            <Heading variant="h2" gutterBottom>
              Contact Me
            </Heading>
            <Form onSubmit={handleSubmit}>
              <StyledTextField
                label="Name"
                variant="outlined"
                required
                sx={{ backgroundColor: "#9278d8" }}
              />
              <StyledTextField
                label="Email"
                variant="outlined"
                type="email"
                required
                sx={{ backgroundColor: "#9278d8" }}
              />
              <StyledTextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                required
                sx={{ backgroundColor: "#9278d8" }}
              />
              <SubmitButton type="submit" variant="contained" color="primary">
                Submit
              </SubmitButton>
            </Form>
          </Box>
        </motion.div>
      </motion.div>
    </RootContainer>
  );
};

export default Contact;
