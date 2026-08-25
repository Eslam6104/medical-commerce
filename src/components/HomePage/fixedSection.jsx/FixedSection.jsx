import React from "react";
import { Box, Typography, Button } from "@mui/material";

const FixedSection = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://prestashop.codezeel.com/PRS22/PRS220545/default/img/cms/parallax-banner-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: { xs: "auto", md: "fixed" },
        width: "100%",
        height: { xs: "60vh", md: "80vh" },
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, sm: 3, md: 6 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          bgcolor: "rgba(210, 210, 210, 0.02)",
          zIndex: 0,
        }}
      ></Box>

      <Box
        sx={{
          position: "absolute",
          zIndex: "2",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 3,
          height: "100%",
        }}
      >
        <Typography variant="body1">HIGHER LEVEL OF CARE</Typography>
        <Typography
          variant="h3"
          sx={{
            width: { xs: "60%", md: "60%" },
            fontWeight: "bold",
            fontSize: { xs: "30px", md: "50px" },
          }}
        >
          Genuine Commitment To Your Health
        </Typography>
        <Typography variant="body2">
          Lorem Ipsum is simply the printing and typesetting industry
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "var(--main-color)",
            color: "#fff",
            px: 3,
            py: 1,
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": { backgroundColor: "#00796b" },
          }}
        >
          SHOP NOW
        </Button>
      </Box>
    </Box>
  );
};

export default FixedSection;
