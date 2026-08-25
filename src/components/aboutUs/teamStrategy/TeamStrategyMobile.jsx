import React from "react";
import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const TeamStrategyMobile = ({ index, onChange, data }) => {
  return (
    <Container maxWidth="sm" sx={{ my: { xs: 2, md: 4 } }}>
      <Box sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}>
        {data.map((s, i) => (
          <Accordion
            key={s.id}
            elevation={0}
            disableGutters
            square
            expanded={index === i}
            onChange={() => onChange(i)}
            sx={{
              "&::before": { display: "none" },
              "&:not(:last-of-type)": {
                borderBottom: "1px solid",
                borderColor: "divider",
              },
            }}
          >
            <AccordionSummary
              expandIcon={null}
              sx={{
                "& .MuiAccordionSummary-content": { m: 0 },
                "& .MuiAccordionSummary-expandIconWrapper": { display: "none" },
                px: 2,
                py: 1.25,
                fontWeight: 700,
                fontSize: 18,
                color: "black",
                cursor: "pointer",
              }}
            >
              {s.label}
            </AccordionSummary>

            <AccordionDetails
              sx={{
                pt: 0,
                px: 2,
                pb: 2,
                borderTop: "1px solid",
                borderColor: "divider",
              }}
            >
              {Array.isArray(s.body) ? (
                s.body.map((p, k) => (
                  <Typography
                    key={k}
                    sx={{ lineHeight: 1.9, mb: k < s.body.length - 1 ? 2 : 0 }}
                  >
                    {p}
                  </Typography>
                ))
              ) : (
                <Typography sx={{ lineHeight: 1.9 }}>{s.body}</Typography>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};
export default TeamStrategyMobile;
