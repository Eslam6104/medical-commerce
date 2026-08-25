import React from "react";
import { useParams } from "react-router-dom";
import { Pagination, Typography, Box } from "@mui/material";
import HeaderOfSection from "../customHook/HeaderOfSection";
import { useGetProductsQuery } from "../store/apiSlice";
import Loading from "../customHook/Loading";
import Error from "../customHook/Error";
import ShopProducts from "../shop/ShopProducts";
import { useState } from "react";
import ShopListView from "../shop/ShopListView";

const SearchResult = () => {
  const [selectedListView, setSlectedListView] = useState("fourItem");
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [page, setPage] = useState(1);
  const { query } = useParams();
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }
  if (!query) {
    return (
      <p className="text-center text-gray-500 text-lg mt-8">
        Please enter a search term.
      </p>
    );
  }
  const normalizedQuery = query.toLowerCase();
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(normalizedQuery) ||
      p.category.toLowerCase().includes(normalizedQuery) ||
      p.product_type.toLowerCase().includes(normalizedQuery)
  );
  const paginated = filteredProducts.slice(
    (page - 1) * 12,
    (page - 1) * 12 + 12
  );

  return (
    <Box>
      <HeaderOfSection
        title="Search"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: " Search results" },
        ]}
      />
      <Box sx={{ padding: 8, paddingTop: 0 }}>
        <Typography sx={{ fontSize: "20px", padding: 2 }}>
          Search results for:
          <span style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
            {query}
          </span>
        </Typography>
        {filteredProducts.length > 0 ? (
          <>
            <ShopListView
              products={filteredProducts}
              selectedListView={selectedListView}
              setSlectedListView={setSlectedListView}
            />
            <ShopProducts
              products={paginated}
              selectedListView={selectedListView}
            />
          </>
        ) : (
          <Typography sx={{ fontSize: "30px", textAlign: "center" }}>
            No matching results found.
          </Typography>
        )}
        <Pagination
          count={Math.ceil(filteredProducts.length / 12)}
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
      </Box>
    </Box>
  );
};
export default SearchResult;
