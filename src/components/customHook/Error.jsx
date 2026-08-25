import React from "react";
import { Box, Typography } from "@mui/material";

const Error = () => {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1" color="red">
        Oops ! An Error Occured
      </Typography>
    </Box>
  );
};

export default Error;
