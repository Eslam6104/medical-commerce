import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AccordionBlock from "../aboutUs/opportunities/AccordionBlock";
import accordionData from "./accordionData";

const AccordionSection = () => {
  return (
    <Grid
      container
      sx={{ p: 4 }}
      spacing={3}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item size={{ xs: 12 }}>
        <Typography variant="body1" color="gray" textAlign="center">
          Pich one of 3 FAQ styles
        </Typography>
      </Grid>
      <Grid item size={{ xs: 12 }}>
        <Typography variant="h4" fontWeight="700" textAlign="center">
          Display FAQ accordions
        </Typography>
      </Grid>
      <Grid
        item
        size={{ xs: 10 }}
        mx={2}
        sx={{ border: "1px solid var(--gray-100)", borderRadius: "12px" }}
      >
        <AccordionBlock accordionItems={accordionData} />
      </Grid>
    </Grid>
  );
};

export default AccordionSection;
