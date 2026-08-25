import { useEffect } from "react";
import {
  Box,
  Paper,
  Typography,
  Divider,
  Avatar,
  Stack,
} from "@mui/material";
import Loading from "../customHook/Loading";

const CheckoutCart = ({
  loading,
  cartFirebase,
  total,
  fetchCartFromFirebase,
}) => {
  useEffect(() => {
    fetchCartFromFirebase();
  }, [fetchCartFromFirebase]);

  if (loading) {
    return <Loading />;
  }

  if (cartFirebase.length === 0) {
    return (
      <Paper
        elevation={3}
        sx={{
          p: 3,
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Your Cart
        </Typography>

        <Box
          sx={{
            minHeight: 300,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography fontSize={22} fontWeight="bold">
            Your cart is Empty
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography fontSize={22} fontWeight={600}>
            Total:
          </Typography>
          <Typography fontSize={18}>${total}</Typography>
        </Box>
      </Paper>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Your Cart
      </Typography>

      <Stack spacing={2} sx={{ mb: 2 }}>
        {cartFirebase.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Avatar
                src={item.image}
                alt={item.name}
                sx={{ width: 48, height: 48 }}
              />
              <Box>
                <Typography>{item.name}</Typography>
                <Typography fontSize={14} color="text.secondary">
                  {item.quantity} {item.quantity > 1 ? "Pieces" : "Piece"}
                </Typography>
              </Box>
            </Box>

            <Typography fontWeight={500}>
              ${item.price * item.quantity}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography fontSize={22} fontWeight={600}>
          Total:
        </Typography>
        <Typography fontSize={18}>${total}</Typography>
      </Box>
    </Paper>
  );
};

export default CheckoutCart;
