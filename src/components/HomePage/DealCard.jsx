import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Rating,
} from "@mui/material";
import { useCartAndWishlist } from "../customHook/useCartAndWishlist";

const DealCard = ({ product }) => {
  const { requireLogin, addProductToCart } = useCartAndWishlist();
  const [timeLeft, setTimeLeft] = useState({
    day: 0,
    hrs: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const target = new Date(product.dealEnd).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) return clearInterval(countdown);

      setTimeLeft({
        day: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
        min: Math.floor((diff / (1000 * 60)) % 60),
        sec: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [product.dealEnd]);

  return (
    <Card
      sx={{
        display: "flex",
        border: "1px solid var(--main-color)",
        borderRadius: 3,
        p: 5,
        alignItems: "center",
        position: "relative",
        flexDirection: { xs: "column", lg: "row" },
        height: { xs: "auto", lg: 350 },
      }}
    >
      <Chip
        label={`-${product.discount}%`}
        color="error"
        size="small"
        sx={{ position: "absolute", top: 10, left: 10, fontWeight: "bold" }}
      />

      <CardMedia
        component="img"
        image={product.image}
        alt={product.name}
        sx={{ width: 180, height: 180, objectFit: "contain", mx: 2 }}
      />

      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle2" color="text.secondary">
          {product.category}
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", mb: 1, width: "80%", overflow: "hidden" }}
          noWrap
        >
          {product.name}
        </Typography>

        <Box display="flex" alignItems="center" mb={1}>
          <Rating
            value={product.customer_reviews.average_rating}
            precision={0.5}
            readOnly
            size="small"
          />
          <Typography variant="body2" sx={{ ml: 1 }}>
            ({product.customer_reviews.total_reviews})
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" mb={2}>
          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              color: "text.secondary",
              mr: 1,
            }}
          >
            ${product.price}
          </Typography>
          <Typography variant="h6" color="var(--main-color)">
            ${product.price - (product.price * product.discount) / 100}
          </Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={1} mb={2}>
          {["day", "hrs", "min", "sec"].map((key) => (
            <Box
              key={key}
              sx={{
                textAlign: "center",
                backgroundColor: "#e4e2e2ff",
                p: 1,
                borderRadius: 1,
                width: 40,
                height: 50,
              }}
            >
              <Typography
                variant="body1"
                color="error"
                lineHeight={1.2}
                fontWeight="bold"
              >
                {timeLeft[key]}
              </Typography>
              <Typography
                variant="caption "
                color="text.secondary"
                fontSize="10px"
              >
                {key.toUpperCase()}
              </Typography>
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          onClick={() => requireLogin(() => addProductToCart(product))}
          sx={{
            mt: 1,
            borderRadius: 2,
            backgroundColor: "var(--main-color)",
            width: "280px",
            textTransform: "capitalize",
            "&:hover": {
              bgcolor: "var( --blue-color)",
              color: "white",
            },
            transition: "0.5s",
            fontSize: "16px",
          }}
        >
          ADD TO CART
        </Button>
      </CardContent>
    </Card>
  );
};
export default DealCard;
