import React from "react";
import {
  Container,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Alert,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TeamStrategyDesk from "./TeamStrategyDesk";
import useTeamStrategy from "./useTeamStrategy";

const TeamStrategy = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const { sections, error, emptyContent, index, setIndex } = useTeamStrategy();

  if (isDesktop) {
    return (
      <TeamStrategyDesk
        sections={sections}
        error={error}
        emptyContent={emptyContent}
        index={index}
        setIndex={setIndex}
      />
    );
  }

  if (error) {
    return (
      <Container maxWidth="sm">
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ border: 1, borderColor: "divider", borderRadius: 1 }}>
        {sections.map((section, idx) => (
          <Accordion
            key={section.id}
            expanded={index === i}
            onChange={() => setIndex(i)}
            disableGutters
          >
            <AccordionSummary>
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                {section.label}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {index === i && emptyContent ? (
                <Alert severity="warning">
                  Section content is missing or empty.
                </Alert>
              ) : (
                section.body.map((text, j) => (
                  <Typography key={j} sx={{ mb: 1.5, lineHeight: 1.6 }}>
                    {text}
                  </Typography>
                ))
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};
export default TeamStrategy;
