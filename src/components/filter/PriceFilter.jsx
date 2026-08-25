import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const PriceFilter = ({ priceSelected, setPriceSelected }) => {
  const filterPrice = (_event, newValue) => {
    setPriceSelected(newValue);
  };

  return (
    <>
      <Box sx={{ width: { md: 150, lg: 200, sm: 300 } }}>
        <Typography sx={{ mb: 1, fontWeight: "bold" }}>Price</Typography>
        <Typography sx={{ mb: 1 }}>
          ${priceSelected[0]} - ${priceSelected[1]}
        </Typography>

        <Slider
          value={priceSelected}
          size="small"
          onChange={filterPrice}
          valueLabelDisplay="auto"
          min={5}
          max={7500}
          sx={{
            color: "var(--main-color)",
          }}
        />
      </Box>
    </>
  );
};
export default PriceFilter;
