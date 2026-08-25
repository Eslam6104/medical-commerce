import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Stack,
  Paper,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const ShoppingCart = ({
  cartFirebase,
  handleRemoveFromCart,
  handleAddToCart,
}) => {
  return (
    <Box>
      <Stack spacing={2}>
        {!cartFirebase || !cartFirebase.length ? (
          <Box
            sx={{
              height: "40vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography align="center" variant="h6" fontWeight="medium" pb={20}>
              Your cart is empty
            </Typography>
          </Box>
        ) : (
          <Box>
            {cartFirebase.map((item, idx) => (
              <Paper
                key={idx}
                elevation={1}
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid var(--gray-100)",
                }}
              >
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar
                    variant="rounded"
                    src={item.image}
                    alt="image"
                    sx={{ width: 56, height: 56 }}
                  />

                  <Box>
                    <Typography variant="body1" fontWeight="medium">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {item.price * item.quantity}
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center">
                  <IconButton
                    size="small"
                    sx={{ width: 28, height: 28, bgcolor: "#F2F2F2" }}
                    onClick={() => handleAddToCart(item)}
                  >
                    <Add fontSize="small" />
                  </IconButton>

                  <Typography>{item.quantity}</Typography>

                  <IconButton
                    size="small"
                    sx={{ width: 28, height: 28, bgcolor: "#F2F2F2" }}
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    <Remove fontSize="small" />
                  </IconButton>
                </Stack>
              </Paper>
            ))}
          </Box>
        )}
      </Stack>
    </Box>
  );
};

export default ShoppingCart;
