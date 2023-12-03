import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <Box>
      <Box>
        <Typography variant="h4" style={{display: "flex", justifyContent: "center", margin: "15px"}}>University Description</Typography>
      </Box>
      <Box style={{display: "flex", justifyContent: "center"}}>
        <Card sx={{ display: "flex", width: "85%" }}>
          <CardMedia
            component="img"
            sx={{ width: 551 }}
            image="https://cfd.nu.edu.pk/wp-content/uploads/2017/08/IMG_5750_1-min-760x400.jpg"
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h5">FAST NUCES CFD CAMPUS</Typography>
              <Typography>
                Description: Its the 5th campus of FAST-NU in the middle of
                Chiniot - Faisalabad. It has the honor of being Pakistan's first
                federal chartered multi-campus University.
              </Typography>
              <Typography>
                Fee Strcuture:{" "}
                <a
                  href="https://nu.edu.pk/Admissions/FeeStructure"
                  target="_blank"
                >
                  check Fee sturcture
                </a>
              </Typography>
              <Typography>
                Location: FAST-NU, FAST Square, 9 Km from Faisalabad Motorway
                Interchange towards Chiniot.
              </Typography>
            </CardContent>
          </Box>
        </Card>
      </Box>
    </Box>
  );
}
