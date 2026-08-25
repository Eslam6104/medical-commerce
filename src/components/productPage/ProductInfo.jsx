import { Box } from "@mui/material";
import ProductTitle from "./ProductTitle";
import ProductPrice from "./ProductPrice";
import ProductRating from "./ProductRating";
import ProductDescription from "./ProductDescription";
import ProductActions from "./ProductActions";
import ProductStatus from "./ProductStatus";

const ProductInfo = ({ product }) => (
  <Box
    sx={{
      width: "100%",
      maxWidth: 500, 
      textAlign: { xs: "center", md: "left" }, 
    }}
  >
    <ProductTitle product={product} />
    <ProductPrice price={product.price} />
    <ProductRating product={product} />
    <ProductDescription product={product} />
    <ProductActions product={product} />
    <ProductStatus stock_quantity={product.stock_quantity} />
  </Box>
);

export default ProductInfo;
