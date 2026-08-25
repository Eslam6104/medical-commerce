import React, { useState } from "react";
import { Card, CardContent, Tab, Tabs, Box } from "@mui/material";
import Signup from "./Signup";
import Login from "./Login";
import HeaderOfSection from "../customHook/HeaderOfSection";

const SignPage = () => {
  const [tab, setTab] = useState("login");

  return (
    <Box>
      <HeaderOfSection
        title={
          tab === "login" ? "Log in to your account" : "Create your account"
        }
        breadcrumbs={[
          { label: "Home", href: "/" },
          tab === "login" ? { label: "Login" } : { label: "Sign Up" },
        ]}
      />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
        paddingY="20px"
      >
        <Card
          sx={{
            width: 400,
            boxShadow: 3,
          }}
        >
          <Tabs
            value={tab}
            onChange={(e, newTab) => setTab(newTab)}
            textColor="var(--main-color)"
            indicatorColor="primary"
            variant="fullWidth"
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "var(--main-color)",
                height: 3,
                borderRadius: 2,
              },
              "& .MuiTab-root": {
                fontWeight: 600,
                color: "gray",
              },
              "& .Mui-selected": {
                color: "var(--main-color)",
              },
            }}
          >
            <Tab label="Login" value="login" />
            <Tab label="Sign Up" value="signup" />
          </Tabs>

          <CardContent>
            {tab === "login" ? (
              <Login setTab={setTab} />
            ) : (
              <Signup setTab={setTab} />
            )}
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default SignPage;
