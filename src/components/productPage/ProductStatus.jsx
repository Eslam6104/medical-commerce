import { Box, Typography } from "@mui/material";

const ProductStatus = ({ stock_quantity }) => (
  <Box
    sx={{
      mt: 1,
      textAlign: "left",
      "@media (max-width: 768px)": {
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      },
    }}
  >
    <Typography sx={{ color: stock_quantity > 0 ? "green" : "red" }}>
      {stock_quantity > 0 ? "In Stock" : "Out of Stock"}
    </Typography>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mt: 1,
        cursor: "pointer",
      }}
    ></Box>
  </Box>
);

export default ProductStatus;
