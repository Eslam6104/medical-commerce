import { Box } from "@mui/material";
import { useGetProductsQuery } from "../store/apiSlice";
import RelatedProductsSwiper from "./RelatedProductsSwiper";
const RelatedProductsSection = ({ type, currentId }) => {
  const { data } = useGetProductsQuery();
  const related = (data || [])
    .filter(
      (product) => product.product_type === type && product.id !== currentId
    )
    .slice(0, 10);
  if (!related.length) return null;
  return (
    <Box sx={{ mt: 6 }}>
      <RelatedProductsSwiper products={related} />
    </Box>
  );
};

export default RelatedProductsSection;
