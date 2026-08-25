import React from "react";
import { Box, Typography } from "@mui/material";

const SIZE = { xs: 90, sm: 110, md: 120 };
const CategoriesCard = ({ category }) => {
  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        cursor: "pointer",
        p: 2,
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: -12,
          height: 12,
        },
        "&:hover .circle": { transform: "scale(1.05)" },
        "&:hover .shop": { opacity: 1, transform: "translateY(0)" },
      }}
    >
      <Box
        className="circle"
        sx={{
          width: SIZE,
          height: SIZE,
          mx: "auto",
          mb: 1,
          borderRadius: "50%",
          bgcolor: "#f5f5f5",
          display: "grid",
          placeItems: "center",
          transition: "transform 0.3s ease",
        }}
      >
        <Box
          component="img"
          src={category.img}
          alt={category.title}
          loading="lazy"
          sx={{ width: "65%", height: "65%", objectFit: "contain" }}
        />
      </Box>
      <Typography fontWeight={700} fontSize={{ xs: 13, sm: 15 }}>
        {category.title}
      </Typography>
      <Typography
        className="shop"
        sx={{
          mt: 0.5,
          opacity: 0,
          transform: "translateY(8px)",
          transition: "all .45s ease .12s",
          fontWeight: 700,
          fontSize: { xs: 13, sm: 15 },
          color: "black",
          position: "relative",
          display: "inline-block",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: "-6px -10px",
          },
          "&:hover": { color: "var(--main-color)" },
        }}
      >
        SHOP NOW
      </Typography>
    </Box>
  );
};

export default CategoriesCard;
