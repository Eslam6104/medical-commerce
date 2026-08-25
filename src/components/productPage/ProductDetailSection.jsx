import React from "react";
import { Box } from "@mui/material";
import ProductDetail from "./ProductDetail";

const ProductDetailSection = ({ product }) => {
  const fixedImage =
    "https://res.cloudinary.com/dah254u09/image/upload/v1763817156/Gemini_Generated_Image_5gj22o5gj22o5gj2_gen1km.png";

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: { xs: "wrap", md: "nowrap" },
        gap: { xs: 1, md: 1 },
        mt: 4,
        alignItems: "flex-start",
        justifyContent: "center",
        px: { xs: 1, md: 2 },
      }}
    >
      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 55%" },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: 750,
            pt: "75%",
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 1,
          }}
        >
          <Box
            component="img"
            src={fixedImage}
            alt="Product Illustration"
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 45%" },
          minWidth: 0,
        }}
      >
        <ProductDetail product={product} />
      </Box>
    </Box>
  );
};

export default ProductDetailSection;
