import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "var(--main-color)",
        height: 50,
        justifyContent: "center",
      }}
    >
      <Toolbar
        sx={{
          minHeight: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 16px",
        }}
      >
        <Typography sx={{ textAlign: "center", fontSize: 14, fontWeight: 500 }}>
          Get Upto 25% Cashback On First Order: GET25OFF -{" "}
          <Link
            to="#"
            style={{
              color: "white",
              textDecoration: "underline",
              fontWeight: 600,
            }}
          >
            SHOP NOW
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Nav;
