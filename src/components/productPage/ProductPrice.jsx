import { Typography } from "@mui/material";

const ProductPrice = ({ price }) => (
  <Typography variant="h5" sx={{ color: "var(--main-color)", mb: 1 }}>
    ${price}
  </Typography>
);

export default ProductPrice;
