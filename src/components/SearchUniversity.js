import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../style/SearchUniversity.css";
import { Link } from "react-router-dom";

const SearchUniversity = () => {
  return (
    <Box className="mainbody">
      <Box sx={{ width: "100%" }}>
        <Box>
          <Typography variant="h4" className="center">
            Search University
          </Typography>
          <hr style={{ width: "25%" }} />
        </Box>
        <Box className="dataBox">
          <Grid>
            <Grid item>
              <Link to="/UniversityDescription">
                <Button>Fast Nuces CFD Campus</Button>
              </Link>
            </Grid>
            <Grid item>
              <Button>GC University</Button>
            </Grid>
            <Grid item>
              <Button>Agriculture University</Button>
            </Grid>
            <Grid item>
              <Button>Ripha University</Button>
            </Grid>
          </Grid>
          <Grid item className="center">
            <Accordion style={{ width: "75%" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Fast Nuces CFD Campus</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Description: Its the 5th campus of FAST-NU in the middle of
                  Chiniot - Faisalabad. It has the honor of being Pakistan's
                  first federal chartered multi-campus University.
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
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchUniversity;
