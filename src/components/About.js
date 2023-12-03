import { Container, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container style={{ textAlign: "center", marginTop: "15px" }}>
      <Typography variant="h4">About Us</Typography>
      <hr style={{ width: "10%" }} />
      <Typography
        variant="body"
        style={{
          lineHeight: "25px",
          fontSize: "20px",
          display: "flex",
          textAlign: "justify",
          marginTop: "15px"
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nulla
        ut ipsum blandit iaculis eget vel dui. Curabitur rutrum purus felis.
        Vestibulum hendrerit aliquam ante, quis molestie mauris volutpat in.
        Vestibulum rhoncus ultricies libero, laoreet luctus metus faucibus
        vitae. Ut at nulla enim. Suspendisse potenti. Ut ultrices, massa nec
        viverra ullamcorper, purus felis imperdiet elit, sit amet tincidunt dui
        urna eu orci. Integer quis fringilla risus. Interdum et malesuada fames
        ac ante ipsum primis in faucibus. Aenean leo nulla, feugiat in lacus a,
        pellentesque vestibulum dui. Praesent facilisis turpis sit amet massa
        fringilla auctor. Aenean quis cursus risus. Nulla ac odio semper,
        tristique nisi a, finibus enim. Vestibulum quis ex augue. Praesent
        commodo tortor vitae purus pulvinar dapibus.
      </Typography>
    </Container>
  );
};

export default About;
