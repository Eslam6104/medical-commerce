import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MobileMenu from "./MobileMenu";
import SearchBar from "../search/SearchBar";
import Logo from "./Logo";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/loggedReducer";
import { persistor } from "../store/store";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.logged.user);
  const isLogged = useSelector((state) => state.logged.logged);
  const icons = [
    { icon: FavoriteBorderIcon, path: "/favorites" },
    { icon: ShoppingBagOutlinedIcon, path: "/cart" },
  ];

  const handleLogout = () => {
    Swal.fire({
      title: "You are about to log out",
      text: "Are you sure you want to proceed?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#000",
      cancelButtonColor: "#c1c1c1ff",
      confirmButtonText: "Log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        persistor.purge();
        signOut(auth);
        navigate("/");
        toast.success("Logged out successfully!");
      }
    });
  };

  return (
    <AppBar
      sx={{
        position: { xs: "sticky", md: "static" },
        backgroundColor: "white",
        height: 80,
        justifyContent: "center",
        zIndex: 1000,
        px: 2,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          maxWidth: "100vw",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MobileMenu />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexGrow: 1,
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Logo />

            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
              }}
            >
              <SearchBar />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: { xs: "none", lg: "flex" },
            flexDirection: "column",
            alignItems: "flex-start",
            minWidth: 180,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 500, color: "black" }}
          >
            Need Help?
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "bold",
              color: "var(--main-color)",
            }}
          >
            Call Us: +123 456 7890
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              flexDirection: "row",
              alignItems: "flex-start",
              mr: 2,
              gap: { xs: 1, md: 1.5 },
            }}
          >
            {icons.map((icon, i) => (
              <IconButton
                key={i}
                component={Link}
                to={icon.path}
                sx={{
                  p: 0,
                  "&:hover": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <icon.icon
                  sx={{
                    fontSize: 28,
                    color: "black",
                    transition: "0.2s",
                    "&:hover": {
                      color: "var(--main-color)",
                    },
                  }}
                />
              </IconButton>
            ))}

            {isLogged ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Avatar
                  src={user.profilePic}
                  alt={user.username}
                  sx={{ width: 35, height: 35, cursor: "pointer" }}
                  onClick={() => navigate("/")}
                />

                <IconButton
                  onClick={handleLogout}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    border: "1px solid ",
                    borderRadius: 1,
                    paddingX: 1,
                    paddingY: 0.5,
                    color: "black",
                    transition: "0.2s",
                    "&:hover": {
                      color: "var(--main-color)",
                      backgroundColor: "rgba(0,0,0,0.05)",
                    },
                  }}
                >
                  <LogoutIcon fontSize="small" />
                  <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                    Logout
                  </Typography>
                </IconButton>
              </Box>
            ) : (
              <IconButton
                component={Link}
                to="/auth"
                sx={{ p: 0, "&:hover": { backgroundColor: "transparent" } }}
              >
                <AccountCircleOutlinedIcon
                  sx={{
                    fontSize: 28,
                    color: "black",
                    "&:hover": { color: "var(--main-color)" },
                  }}
                />
              </IconButton>
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
