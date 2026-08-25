import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import FourLine from "./svg/FourLine";
import ThreeVerLine from "./svg/ThreeVerLine";
import TwoVerLine from "./svg/TwoVerLine";
import ThreeHorLine from "./svg/ThreeHorLine";

const ShopListView = ({ selectedListView, setSlectedListView , products}) => {
  const handleClick = (item) => {
    setSlectedListView(item);
  };

  const viewOptions = [
    { id: "fourItem", icon: <FourLine /> },
    { id: "threeItem", icon: <ThreeVerLine /> },
    { id: "twoItem", icon: <TwoVerLine /> },
    { id: "oneItem", icon: <ThreeHorLine /> },
  ];

  return (
    <Grid container spacing={1} mb={3} alignItems="center">
      {viewOptions.map((item) => (
        <Grid item key={item.id}>
          <Box
            onClick={() => handleClick(item.id)}
            sx={{
              cursor: "pointer",
              px: 0.5,
              py: 0.1,
              borderRadius: "4px",
              border: "1px solid",
              borderColor:
                selectedListView === item.id
                  ? "var(--main-color)"
                  : "var(--gray-100)",
              backgroundColor:
                selectedListView === item.id
                  ? "var(--main-color)"
                  : "transparent",
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor:
                  selectedListView === item.id
                    ? "var(--blue-color)"
                    : "action.hover",
              },
            }}
          >
            {React.cloneElement(item.icon, {
              color: selectedListView === item.id ? "#fff" : "#555",
            })}
          </Box>
        </Grid>
      ))}
      <Grid item>
        <Typography variant="body2">
          There are {products.length} products.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ShopListView;
