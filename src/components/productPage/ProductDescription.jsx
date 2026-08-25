import { Box, Typography } from "@mui/material";

const ProductDescription = ({ product }) => {
  const ingredients = Array.isArray(product.ingredients_list)
    ? product.ingredients_list
    : product.ingredient_list
    ? product.ingredient_list.split(",").map((i) => i.trim())
    : [];

  const skinTypes = Array.isArray(product.skin_type)
    ? product.skin_type
    : typeof product.skin_type === "string"
    ? product.skin_type.split(",").map((i) => i.trim())
    : [];

  const manufacturer = product.manufacturer_name || product.manufacturer || "";

  return (
    <Box sx={{ my: 2 }}>
      {product.description && (
        <>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, color: "var(--main-color)", mb: 0.5 }}
          >
            Description
          </Typography>

          <Typography sx={{ mb: 1, px: 1 }}>
            {product.description}
          </Typography>
        </>
      )}

      {skinTypes.length > 0 && (
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, color: "gray" }}
          >
            Skin Type
          </Typography>

          <Typography variant="body2" sx={{ p: 1 }}>
            {skinTypes.join(", ")}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ProductDescription;
