import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Divider, Stack, Paper } from "@mui/material";

const Order = ({ cartFirebase, total, subTotal, estimatedTax, itemCount }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout", {
      state: { cartFirebase, total },
    });
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        borderRadius: 2,
        bgcolor: "var(--third-color)",
      }}
    >
      <Stack spacing={3}>
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize={15} color="text.secondary">
            {itemCount > 1 ? `${itemCount} items` : `${itemCount} item`}
          </Typography>
          <Typography fontSize={16} color="var(--blue-color)">
            ${subTotal}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography fontSize={15} color="text.secondary">
            Shipping
          </Typography>
          <Typography fontSize={16} color="var(--blue-color)">
            ${estimatedTax}
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography fontSize={15} color="text.secondary">
            Total
          </Typography>
          <Typography fontSize={16} color="var(--blue-color)">
            ${subTotal}
          </Typography>
        </Box>
      </Stack>

      <Divider sx={{ my: 2 }} />

      <Box display="flex" justifyContent="space-between" sx={{ mb: 2 }}>
        <Typography fontSize={15} color="text.secondary">
          Total
        </Typography>
        <Typography fontSize={18} fontWeight="bold" color="var(--blue-color)">
          ${total}
        </Typography>
      </Box>

      <Button
        variant="contained"
        fullWidth
        sx={{
          height: 48,
          bgcolor: "var(--main-color)",
          color: "white",
          textTransform: "none",
          fontSize: 16,
          fontWeight: "bold",
          borderRadius: 2,
          "&:hover": { bgcolor: "var(--blue-color)" },
        }}
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </Button>
    </Paper>
  );
};

export default Order;
