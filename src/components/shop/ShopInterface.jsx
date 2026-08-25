import React, { useState, useEffect } from "react";
import { Grid, Pagination } from "@mui/material";
import HeaderOfSection from "../customHook/HeaderOfSection";
import ShopFilter from "./ShopFilter";
import ShopText from "./ShopText";
import { Outlet, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../store/apiSlice";
import Loading from "../customHook/Loading";
import Error from "../customHook/Error";

const ShopInterface = () => {
  const { pageTitle } = useParams();
  const [page, setPage] = useState(1);
  const [selectedListView, setSlectedListView] = useState("fourItem");
  const [priceSelected, setPriceSelected] = useState([5, 7500]);
  const [selectedRating, setSelectedRating] = useState(0);
  const [type, setType] = useState("All");
  const { data: products, isLoading, error } = useGetProductsQuery();

  const filteredProducts = (products || []).filter((product) => {
    const price = parseFloat(product.price);
    const machingPrice = price >= priceSelected[0] && price <= priceSelected[1];
    const rating = parseFloat(product.customer_reviews.average_rating);
    const machingRating = rating >= selectedRating;
    const matchingType = type === "All" || product.product_type === type;

    return machingPrice && machingRating && matchingType;
  });

  let filteredPageProducts;

  switch (pageTitle) {
    case "new":
      filteredPageProducts = filteredProducts;
      break;

    case "offers":
      filteredPageProducts = filteredProducts.filter(
        (item) => item.discount > 0
      );
      break;

    case "bestsellers":
      filteredPageProducts = filteredProducts.filter(
        (item) => item.customer_reviews.average_rating > 4.5
      );
      break;

    case "cosmetics":
      filteredPageProducts = filteredProducts.filter(
        (item) => item.product_type === "Cosmetics"
      );
      break;

    case "devices":
      filteredPageProducts = filteredProducts.filter(
        (item) => item.product_type === "Devices"
      );
      break;

    case "medicines":
      filteredPageProducts = filteredProducts.filter(
        (item) => item.product_type === "Medicines"
      );
      break;

    default:
      filteredPageProducts = filteredProducts;
  }

  const paginated = filteredPageProducts.slice(
    (page - 1) * 12,
    (page - 1) * 12 + 12
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, pageTitle]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <>
      <HeaderOfSection
        title="Shop"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />
      <Grid
        container
        spacing={2}
        alignItems="flex-start"
        justifyContent="center"
      >
        <Grid item size={{ xs: 12, md: 3 }} px={3} pt={2}>
          <ShopFilter
            pageTitle={pageTitle}
            priceSelected={priceSelected}
            setPriceSelected={setPriceSelected}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            type={type}
            setType={setType}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 9 }} px={3}>
          <ShopText />
          <Outlet
            context={{
              page,
              priceSelected,
              selectedListView,
              setSlectedListView,
              filteredPageProducts,
              paginated,
            }}
          />
          <Pagination
            count={Math.ceil(filteredPageProducts.length / 12)}
            page={page}
            onChange={(e, value) => setPage(value)}
            sx={{
              "& .MuiPaginationItem-root": {
                color: "gray",
                borderColor: "var(--gray-100)",
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "var(--main-color)",
                color: "#fff",
                borderColor: "var(--main-color)",
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
            variant="outlined"
            shape="rounded"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default ShopInterface;
