import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Logo = ({ onClick }) => {
  return (
    <Box
      component={Link}
      to="/"
      sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
      onClick={onClick}
      minWidth={200}
    >
      <img
        src="/logoo.png"
        alt="Logo"
        loading="lazy"
        style={{ maxHeight: 60, padding: "10px" }}
      />
      <Typography
        variant="h6"
        sx={{
          color: "var(--main-color)",
          fontWeight: "bold",
          fontSize: { xs: 16, md: 22 },
        }}
      >
        Medical Care
      </Typography>
    </Box>
  );
};
export default Logo;
