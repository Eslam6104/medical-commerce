import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useGetProductsQuery } from "../store/apiSlice";
import ImageGallery from "./ImageGallery";
import ProductInfo from "./ProductInfo";
import RelatedProductsSection from "../relatedProducts/RelatedProductsSection";
import HeaderOfSection from "../customHook/HeaderOfSection";
import ProductDetailSection from "./ProductDetailSection";
import Loading from "../customHook/Loading";
import Error from "../customHook/Error";

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductsQuery();

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  // data should already be an array because of apiSlice,
  // but this makes it extra safe:
  const products = Array.isArray(data) ? data : data?.product || [];

  let product = null;
  try {
    product = products.find((p) => String(p.id) === String(id));
  } catch (e) {
    console.error("Error while finding product", e);
  }

  if (!product) {
    return (
      <>
        <HeaderOfSection
          title="Product not found"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "shop", href: "/shop/new" },
          ]}
        />
        <Box sx={{ m: 4 }}>
          <Typography>Product not found.</Typography>
        </Box>
      </>
    );
  }

  return (
    <>
      <HeaderOfSection
        title={product.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "shop", href: "/shop/new" },
          { label: product.name },
        ]}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
          px: 2,
          py: 4,
        }}
      >
        <Box sx={{ flex: "1 1 300px", maxWidth: 520 }}>
          <ImageGallery product={product} />
        </Box>

        <Box sx={{ flex: "1 1 300px", maxWidth: 500 }}>
          <ProductInfo product={product} />
        </Box>
      </Box>

      <Box sx={{ px: 2, pb: 4 }}>
        <ProductDetailSection product={product} />
      </Box>

      <Box sx={{ px: 2, pb: 4 }}>
        <RelatedProductsSection
          type={product.product_type}
          currentId={product.id}
        />
      </Box>
    </>
  );
};

export default ProductPage;
