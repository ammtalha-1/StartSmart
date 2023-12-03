import { Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        position: "absolute",
        left: "0",
        width: "100%",
        textAlign: "center",
        marginTop: "1.3rem",
        borderTop: "1px solid grey",
      }}
    >
      <Typography variant="caption">
        {new Date().getFullYear()}&copy; Copyright, StartSmart
      </Typography>
    </div>
  );
};

export default Footer;
