import { Box } from "@mui/material";
import PriceFilter from "../filter/PriceFilter";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Ratingfilter from "../filter/RatingFilter";
import TypeFilter from "../filter/TypeFilter";

const ShopFilter = ({
  pageTitle,
  priceSelected,
  setPriceSelected,
  setSelectedRating,
  selectedRating,
  type,
  setType,
}) => {
  return (
    <Box
      sx={{
        border: 0.5,
        borderColor: "#e0e0e0",
        borderStyle: "solid",
        borderRadius: 1,
        p: 1,
        paddingBottom: 5,
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
        Filter by
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
            md: "column",
            lg: "column",
          },
          gap: 3,
        }}
      >
        <PriceFilter
          priceSelected={priceSelected}
          setPriceSelected={setPriceSelected}
        />
        <Ratingfilter
          selectedRating={selectedRating}
          setSelectedRating={setSelectedRating}
        />

        {pageTitle !== "cosmetics" &&
          pageTitle !== "devices" &&
          pageTitle !== "medicines" && (
            <TypeFilter type={type} setType={setType} />
          )}
      </Box>
    </Box>
  );
};

export default ShopFilter;
