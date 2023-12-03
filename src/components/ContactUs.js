import { Button, Typography, Grid, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import pic from "../img/contactUs.gif";
import "../style/contactUs.css";

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(!submitted);
  };

  if (submitted) {
    return (
      <Box className="mainBody">
        <Box>
          <Box style={{ marginTop: "15px", textAlign: "center" }}>
            <Typography variant="h4">Thank you!</Typography>
            <Typography variant="h6">We'll be in touch soon.</Typography>
          </Box>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            size="sm"
            color="error"
            sx={{ marginTop: "15px", marginLeft: "11%" }}
          >
            Submit another one
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Container className="formAndImage" maxWidth="lg">
      <Container maxWidth="xs">
        <Box>
          <img src={pic} className="contactPic" />
        </Box>
      </Container>
      <Container>
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Typography
              variant="h5"
              style={{ marginBottom: "5px", textAlign: "center" }}
            >
              Contact Us
            </Typography>
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Grid item xs={12} md={10}>
                <TextField
                  name="Fullname"
                  required
                  fullWidth
                  id="FullName"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} md={10}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} md={10}>
                <TextField
                  required
                  fullWidth
                  id="Message"
                  label="Your Message"
                  name="Message"
                  autoComplete="Message"
                  multiline
                />
              </Grid>
            </Grid>
            <Box style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default ContactUs;
