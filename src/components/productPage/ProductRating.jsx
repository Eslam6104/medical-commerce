import { Box, Rating, Typography } from "@mui/material";

const ProductRating = ({ product }) => {
  const averageRating = product.customer_reviews?.average_rating || 0;
  const totalReviews = product.customer_reviews?.total_reviews || 0;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap", 
        gap: 1,
        mb: 1,
        justifyContent: { xs: "center", sm: "flex-start" },
      }}
    >
      <Rating value={averageRating} precision={0.5} readOnly size="medium" />

      <Typography
        variant="body2"
        sx={{ color: "var(--main-color)", fontSize: "14px" }}
      >
        {totalReviews > 0 ? `(${totalReviews} Reviews)` : "(No Reviews)"}
      </Typography>
    </Box>
  );
};

export default ProductRating;
