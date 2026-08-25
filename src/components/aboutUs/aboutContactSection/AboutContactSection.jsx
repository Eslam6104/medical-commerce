import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { AboutcontactData } from "./AboutContactData";
const data = AboutcontactData();
function AboutContactSection() {
  return (
    <Box sx={{ py: 10 }} component="section">
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="overline" sx={{ letterSpacing: 3 }}>
          {data.eyebrow}
        </Typography>

        <Typography variant="h3" sx={{ mt: 2, mb: 3, fontWeight: 600 }}>
          {data.title}
        </Typography>

        <Typography sx={{ mb: 5, color: "text.secondary", lineHeight: 1.7 }}>
          {data.body}
        </Typography>

        <Button
          variant="contained"
          href={data.buttonHref}
          sx={{
            px: "1.25rem",
            py: "0.75rem",
            bgcolor: "var(--main-color)",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          {data.buttonLabel}
        </Button>
      </Container>
    </Box>
  );
}

export default AboutContactSection;
