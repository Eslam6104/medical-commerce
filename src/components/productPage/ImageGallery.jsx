import { Box } from "@mui/material";
import ProductShare from "./ProductShare";

const ImageGallery = ({ product }) => (
  <Box sx={{ width: "100%" }}>
    <Box
      sx={{
        width: "100%",
        maxWidth: 520,
        height: 360,
        mx: "auto",
        border: "1px solid rgba(0,0,0,0.15)",
        borderRadius: 2,
        boxShadow: 1,
        bgcolor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={product.image}
        alt={product.name}
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          display: "block",
        }}
      />
    </Box>
    <ProductShare />
  </Box>
);

export default ImageGallery;
