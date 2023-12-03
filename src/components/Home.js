import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import mainPic from "../img/MainIdea.png";
import "../style/Home.css";

const Home = () => {
  return (
    <Container className="homeBody" maxWidth="xl">
      <Container style={{ padding: "10px", marginTop: "10px" }}>
        <Box sx={{ marginLeft: "10px", marginTop: "10%" }}>
          <Typography variant="h4" className="heroHeading">
            Start Start Smart with Us.
          </Typography>
          <Typography variant="body1" className="heroBody">
            We are Providing platform by which will we guide our users to choose
            a suitable degree program and institute for students and a training
            session for their better performance.
          </Typography>
          <Box>
            <Link to="/SignUp" style={{ textDecoration: "none" }}>
              <Button
                variant="contained"
                size="Meduim"
                color="success"
                className="heroButton"
              >
                Get Register
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
      <Container maxWidth="sm">
        <Box>
          <img src={mainPic} className="heroImage" />
        </Box>
      </Container>
    </Container>
  );
};

export default Home;
