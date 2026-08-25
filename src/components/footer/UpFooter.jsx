import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import FooterColumns from "./FooterColumns";
import Logo from "../header/Logo";
import StoreButtons from "./StoreButtons";
const UpFooter = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "transparent",
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: "left",
    color: (theme.vars ?? theme).palette.text.primary,
    boxShadow: "none",
  }));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: 4,
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          color="primary.main"
          sx={{ mb: 2 }}
        >
          <Logo />
        </Typography>
        <Typography variant="body2" sx={{ color: "#666", mb: 2 }}>
          Welcome to our store, where we pride ourselves on providing
          exceptional products and unparalleled customer service, style, and
          innovation.
        </Typography>
        <StoreButtons />
      </Box>
      <Grid container spacing={{ xs: 3, sm: 5, md: 10 }} sx={{ flex: 2 }}>
        {FooterColumns.map((col, index) => (
          <Grid item size={{ xs: 6, sm: 3 }} key={index}>
            <Item>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                  fontSize: "1rem",
                  color: "#333",
                }}
              >
                {col.title}
              </Typography>
              {col.links && (
                <List sx={{ p: 0 }}>
                  {col.links.map((link, i) => (
                    <ListItem key={i} sx={{ p: 0, mb: 0.5 }}>
                      <Link to={link.path} style={{ textDecoration: "none" }}>
                        <Typography
                          sx={{
                            fontSize: "0.9rem",
                            color: "#666",
                            cursor: "pointer",
                            "&:hover": { color: "var(--main-color)" },
                          }}
                        >
                          {link.label}
                        </Typography>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              )}

              {col.info && (
                <Box>
                  {col.info.map((line, i) => (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{ color: "#666", mb: 0.5 }}
                    >
                      {line}
                    </Typography>
                  ))}
                </Box>
              )}
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default UpFooter;
