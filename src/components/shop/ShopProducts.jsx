import React from "react";
import { Grid } from "@mui/material";
import CardProduct from "../HomePage/CardProduct";

const ShopProducts = ({ products, selectedListView }) => {
  const getGridSize = () => {
    switch (selectedListView) {
      case "fourItem":
        return 3;
      case "threeItem":
        return 4;
      case "twoItem":
        return 6;
      case "oneItem":
        return 12;
      default:
        return 3;
    }
  };
  return (
    <Grid
      container
      spacing={0}
      sx={{
        border: "1px solid #dbdbdbff",
        marginBottom: 6,
      }}
    >
      {products.map((product, index) => (
        <Grid
          item
          size={{ xs: 12, md: getGridSize() }}
          key={index}
          sx={{ borderBottom: "1px solid #dbdbdbff" }}
        >
          <CardProduct product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ShopProducts;
