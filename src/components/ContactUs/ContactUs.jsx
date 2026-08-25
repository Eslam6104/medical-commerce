import React from "react";
import { Box, Grid } from "@mui/material";
import LeafletMap from "./LeafletMap";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import HeaderOfSection from "../customHook/HeaderOfSection";

const ContactUs = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <HeaderOfSection
        title=" Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Element", href: "/" },
          { label: "Shop" },
        ]}
      />
      <Grid container spacing={2} sx={{ px: 3 }}>
        <Grid item size={{ xs: 12, md: 6 }}>
          <LeafletMap />
        </Grid>
        <Grid item size={{ xs: 12, md: 6 }}>
          <ContactForm />
        </Grid>
      </Grid>
      <ContactInfo />
    </Box>
  );
};

export default ContactUs;
