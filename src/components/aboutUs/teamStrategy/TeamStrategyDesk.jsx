import React from "react";
import {
  Container,
  Tabs,
  Tab,
  Paper,
  Box,
  Typography,
  Alert,
} from "@mui/material";

const TeamStrategyDesk = ({
  sections,
  error,
  emptyContent,
  index,
  setIndex,
}) => {
  if (error) {
    return (
      <Container maxWidth="lg">
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  const active = sections[index];

  return (
    <Container maxWidth="lg">
      <Tabs
        value={index}
        onChange={(_, value) => setIndex(value)}
        centered
        textColor="inherit"
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: 600,
            minHeight: 0,
            py: 1.5,
            px: 4,
            border: "1px solid transparent",
            borderBottom: "none",
            color: "text.primary",
          },
          "& .MuiTab-root.Mui-selected": {
            borderColor: "divider",
            borderBottomColor: "#ffffff",
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            backgroundColor: "#ffffff",
            color: "text.primary",
            position: "relative",
            zIndex: 2,
          },
        }}
      >
        {sections.map((section, i) => (
          <Tab
            key={section.id}
            label={section.label}
            sx={{
              fontWeight: 600,
              fontSize: 16,
              color: "black",
              px: 3,
              border: "1px solid #e0e0e0",
              borderBottom: i === section.id ? "none" : "1px solid #e0e0e0",
              background: i === section.id ? "#fff" : "inherit",
              minHeight: 0,
              zIndex: 2,
              "&.Mui-selected": {
                color: "var(--main-color)",
              },
            }}
            disableRipple
          />
        ))}
      </Tabs>

      <Paper elevation={0}>
        <Box
          sx={{
            border: 1,
            borderColor: "divider",
            borderTop: "1px solid",
            borderTopColor: "divider",
            mt: -1,
            p: 3,
            position: "relative",
            zIndex: 1,
          }}
        >
          {emptyContent ? (
            <Alert severity="warning">
              Section content is missing or empty.
            </Alert>
          ) : (
            active.body.map((text, idx) => (
              <Typography key={idx} sx={{ mb: 1.5, lineHeight: 1.6 }}>
                {text}
              </Typography>
            ))
          )}
        </Box>
      </Paper>
    </Container>
  );
};
export default TeamStrategyDesk;
