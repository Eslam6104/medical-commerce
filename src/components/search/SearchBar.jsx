import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = styled("form")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const SearchBar = () => {
   const [searchQuery, setSearchQuery] = useState("");
   const navigate = useNavigate();
   const handleSearch = (e) => {
     e.preventDefault();
     const trimmedQuery = searchQuery.trim();
     if (!trimmedQuery) return;
     navigate(`/Search/${encodeURIComponent(trimmedQuery)}`);
     setSearchQuery("");
   };
  return (
    <Search onSubmit={handleSearch}>
      <SearchIconWrapper sx={{ backgroundColor: "var(--main-color)" }}>
        <SearchIcon sx={{ color: "white" }} />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search product here…"
        inputProps={{ "aria-label": "search" }}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
          border: 1,
          borderColor: "var(--main-color)",
          borderRadius: 2,
          height: 40,
          paddingLeft: 4,
          color: "black",
          width: {
            xs: "100%",
            sm: "200px",
            lg: "500px",
          },
        }}
      />
    </Search>
  );
};

export default SearchBar;
