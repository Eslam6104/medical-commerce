import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { features } from "./features";

const FeatureBar = () => {
  return (
    <Box
      sx={{
        border: "2px solid var(--main-color)",
        borderRadius: 2,
        p: 3,
        my: 4,
        mx: 5,
        overflow: "hidden",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        wrap="no-wrap"
        sx={{ overflowX: { xs: "scroll", lg: "auto" } }}
      >
        {features.map((feature, index) => (
          <Grid
            item
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              justifyContent: "center",
              textAlign: "left",
              minWidth: "270px",
            }}
          >
            <Box
              sx={{
                color: "gray",
                "&:hover": { color: "var(--main-color)" },
                transition: "all 0.2s ease-in",
              }}
            >
              {feature.icon}
            </Box>
            <Box>
              <Typography variant="subtitle1" fontWeight="bold">
                {feature.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {feature.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureBar;
