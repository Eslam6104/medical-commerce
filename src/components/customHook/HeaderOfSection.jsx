import React from "react";
import { Box, Typography, Breadcrumbs, Link } from "@mui/material";

const HeaderOfSection = ({ title, breadcrumbs = [] }) => {
  return (
    <Box
      sx={{
        mb: 5,
        py: 6,
        px: 4,
        borderRadius: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      bgcolor="var(--third-color)"
    >
      <Typography variant="h5" fontWeight="bold">
        {title}
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbs.map((item, index) =>
          item.href ? (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              href={item.href}
              sx={{ "&:hover": { color: "var(--main-color)" } }}
            >
              {item.label}
            </Link>
          ) : (
            <Typography key={index} sx={{ color: "text.primary" }}>
              {item.label}
            </Typography>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
};

export default HeaderOfSection;
