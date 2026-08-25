import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useCartAndWishlist } from "../customHook/useCartAndWishlist";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Rating,
  Box,
  IconButton,
  CardActions,
} from "@mui/material";

const WishlistCard = ({ product, handleDelete }) => {
  const { addProductToCart } = useCartAndWishlist();

  return (
    <Card
      sx={{
        borderRadius: 3,
        bgcolor: "transparent",
        boxShadow: "none",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRight: "1px solid #dbdbdbff",
        padding: "4px",
        position: "relative",
        "&:hover .delete-icon": {
          opacity: 1,
          transform: "translateX(0)",
        },
      }}
    >
      <IconButton
        onClick={() => handleDelete(product.id)}
        className="delete-icon"
        sx={{
          position: "absolute",
          top: 9,
          right: 9,
          bgcolor: "white",
          color: "black",
          opacity: 0,
          transform: "translateX(20px)",
          transition: "transform 0.4s, opacity 0.4s",
          "&:hover": {
            bgcolor: "red",
            color: "white",
          },
          zIndex: 10,
        }}
      >
        <AiOutlineDelete size={20} />
      </IconButton>

      <Box
        component={Link}
        to={`/product/${product.id}`}
        sx={{ textDecoration: "none" }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            objectFit: "contain",
            "&:hover": { scale: "1.05" },
            transition: "0.5s",
            height: "260px",
            px: 2,
          }}
        />

        <CardContent sx={{ textAlign: "left", flexGrow: 1 }}>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            fontSize={15}
            noWrap
            sx={{
              cursor: "pointer",
              transition: "0.3s",
              py: "8px",
              "&:hover": { color: "var(--main-color)" },
            }}
          >
            {product.name}
          </Typography>

          <Box display="flex" alignItems="center" mb={1}>
            <Rating
              value={product.customer_reviews?.average_rating || 0}
              precision={0.5}
              readOnly
              size="small"
            />
          </Box>

          <Typography variant="h6" color="var(--main-color)" fontWeight={700}>
            {product.price} $
          </Typography>
        </CardContent>
      </Box>

      <CardActions>
        <Button
          variant="contained"
          onClick={() => addProductToCart(product)}
          sx={{
            mt: 0,
            borderRadius: 2,
            width: "100%",
            textTransform: "capitalize",
            color: "var(--main-color)",
            transition: "all 0.5s",
            fontSize: "16px",
            "&:hover": {
              bgcolor: "var(--main-color)",
              color: "white",
            },
            bgcolor: "transparent",
          }}
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default WishlistCard;
