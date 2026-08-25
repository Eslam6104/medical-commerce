import { Typography, Box } from "@mui/material";

const ProductTitle = ({ product }) => {
  return (
    <Box>
      <Typography
        variant="body2"
        sx={{
          color: "gray",
          textTransform: "capitalize",
          fontSize: "13px",
          letterSpacing: "0.5px",
          mb: 0.5,
        }}
      >
        {product.category}
      </Typography>

      <Typography variant="h4">{product.name}</Typography>
    </Box>
  );
};
export default ProductTitle;
