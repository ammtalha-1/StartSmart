import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "../style/mainMenu.css";
import chatbot from "../img/chatbot.png";
import marksheet from "../img/marksheet.png";
import ranking from "../img/Ranking.png";
import Search from "../img/search_uni.png";
import TrainningSessions from "../img/TrainningSessions.png";
import LiveChat from "../img/LiveChat.png";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <Container className="mainMenu">
      <Box sx={{ width: "70%" }}>
        <Box className="mainBody">
          <Box className="headBox">
            <Typography variant="h6">Get Recomendations</Typography>
            <Box className="mainBox">
              <Card sx={{ display: "flex" }} className="seperateCards">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginTop: "20px" }}
                    >
                      Interact with <br /> Chatbot
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia component="" sx={{ width: 120 }} image={chatbot} />
              </Card>
              <Card sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginTop: "10px" }}
                    >
                      Based on <br /> intermediate <br /> marks
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia component="" sx={{ width: 120 }} image={marksheet} />
              </Card>
            </Box>
          </Box>
        </Box>
        <hr style={{ width: "50%" }} />
        <Box className="mainBody">
          <Box className="headBox">
            <Typography variant="h6">Search University</Typography>
            <Box className="mainBox">
              <Card sx={{ display: "flex" }} className="seperateCards">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      variant="subtitle1"
                      component=""
                      style={{ marginTop: "20px" }}
                    >
                      Top HEC <br /> Ranking
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia component="" sx={{ width: 140 }} image={ranking} />
              </Card>
              <Link to="/SearchUniversity">
                <Card sx={{ display: "flex" }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        variant="subtitle1"
                        style={{ marginTop: "10px" }}
                      >
                        Courses & <br /> University
                      </Typography>
                    </CardContent>
                  </Box>
                  <CardMedia component="" sx={{ width: 140 }} image={Search} />
                </Card>
              </Link>
            </Box>
          </Box>
        </Box>
        <hr style={{ width: "50%" }} />
        <Box className="mainBody">
          <Box className="headBox">
            <Typography variant="h6">Get Help by Experts</Typography>
            <Box className="mainBox">
              <Card sx={{ display: "flex" }} className="seperateCards">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginTop: "20px" }}
                    >
                      Training <br /> Sessions
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia
                  component=""
                  sx={{ width: 140 }}
                  image={TrainningSessions}
                />
              </Card>
              <Card sx={{ display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography
                      variant="subtitle1"
                      style={{ marginTop: "25px" }}
                    >
                      Live Chat
                    </Typography>
                  </CardContent>
                </Box>
                <CardMedia component="" sx={{ width: 140 }} image={LiveChat} />
              </Card>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{ width: "30%", borderLeft: "1px gray solid", textAlign: "center" }}
      >
        <Typography variant="h5" style={{ marginTop: "25px" }}>
          News
        </Typography>
        <a href="https://cfd.nu.edu.pk/all-departments/" target="_blank">
          <Typography variant="subtitle1">
            Check Out the Departments at Fast CFD.
          </Typography>
        </a>
        <a
          href="
        https://www.hec.gov.pk/english/universities/pages/rank.aspx"
          target="_blank"
        >
          <Typography variant="subtitle1">
            Top University Ranking by HEC.
          </Typography>
        </a>
      </Box>
    </Container>
  );
};

export default MainMenu;
