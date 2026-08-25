import React from "react";
import { useMediaQuery, AppBar, Toolbar, Box } from "@mui/material";
import PercentIcon from "@mui/icons-material/Percent";
import HeaderLinks from "./headerLinks";
import { Link } from "react-router-dom";
import Links from "./Links";

const Header = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  return (
    <>
      <AppBar
        sx={{
          position: { xs: "static", md: "sticky" },
          display: { xs: "none", md: "flex" },
          backgroundColor: "white",
          color: "black",
          zIndex: 1000,
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box></Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {HeaderLinks.map((item) => (
              <Links key={item.name} item={item} isMobile={isMobile} />
            ))}
          </Box>
          <Box
            component={Link}
            to="/deals"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              fontWeight: "bold",
              color: "var(--main-color)",
              padding: "0 10px",
              textDecoration: "none",
            }}
          >
            <PercentIcon />
            <span>Best Deals</span>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
