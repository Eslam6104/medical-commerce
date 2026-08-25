import { Typography, Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const Ratingfilter = ({ selectedRating, setSelectedRating }) => {
  const handleRatingChange = (event, newValue) => {
    if (newValue === null || newValue === 0) {
      setSelectedRating(0);
      return;
    }
    const ratingValue = newValue === selectedRating ? 0 : newValue;
    setSelectedRating(ratingValue);
  };

  return (
    <Box sx={{ width: { md: 150, lg: 200, sm: 300 } }}>
      <Typography sx={{ mb: 1, fontWeight: "bold" }}>Rating</Typography>

      <Box sx={{ my: 2, display: "flex", gap: 2 }}>
        <Rating
          value={selectedRating}
          max={5}
          onChange={handleRatingChange}
          icon={<StarIcon sx={{ fontSize: 30 }} />}
          emptyIcon={<StarIcon sx={{ fontSize: 30, opacity: 0.55 }} />}
        />
      </Box>
    </Box>
  );
};

export default Ratingfilter;
