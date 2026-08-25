import React from "react";
import { Box, Container } from "@mui/material";
import AdvCard from "./AdvCard";

const Adv = ({ advs }) => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        px: { xs: 2, md: 2 },
        backgroundColor: "var(--third-color)",
      }}
    >
      <Container
        maxWidth="xl"
        spacing={1}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 2, md: 4 },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {advs.map((adv, index) => (
          <AdvCard adv={adv} key={index} />
        ))}
      </Container>
    </Box>
  );
};

export default Adv;
