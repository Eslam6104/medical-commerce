import { Box, Button, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useCartAndWishlist } from "../customHook/useCartAndWishlist";

const ProductActions = ({ product }) => {
  const { requireLogin, addProductToCart, addProductToWishlist } =
    useCartAndWishlist();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        my: 2,
        "@media (max-width: 768px)": { alignItems: "center" },
      }}
    >
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          onClick={() => requireLogin(() => addProductToCart(product))}
          sx={{
            backgroundColor: "var(--main-color)",
            "&:hover": { backgroundColor: "var(--main-color)" },
          }}
        >
          ADD TO CART
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderColor: "var(--main-color)",
            color: "var(--main-color)",
          }}
        >
          BUY NOW
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            cursor: "pointer",
          }}
          onClick={() => requireLogin(() => addProductToWishlist(product))}
        >
          <FavoriteBorderIcon sx={{ color: "var(--main-color)" }} />
          <Typography sx={{ color: "var(--main-color)", fontSize: 14 }}>
            Add to Wishlist
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductActions;
