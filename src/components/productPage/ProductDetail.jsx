import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DescriptionIcon from "@mui/icons-material/Description";
import ScienceIcon from "@mui/icons-material/Science";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const ProductDetail = ({ product }) => {
  const [expanded, setExpanded] = useState("ingredients");

  const ingredients = Array.isArray(product?.ingredients_list)
    ? product.ingredients_list
    : product?.ingredient_list
    ? String(product.ingredient_list)
        .split(",")
        .map((i) => i.trim())
        .filter(Boolean)
    : [];

  const manufacturer =
    product?.manufacturer_name || product?.manufacturer || "";

  const hasDescription = !!product?.description;
  const hasCare = !!product?.careInstructions;

  const handleChange = (panel) => (_event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ mt: 4, px: { xs: 1, md: 0 } }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
        Product Details
      </Typography>

      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          border: "1px solid",
          borderColor: "divider",
          p: { xs: 1, md: 1 },
        }}
      >
        <Accordion
          expanded={expanded === "description"}
          onChange={handleChange("description")}
          disableGutters
          elevation={0}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="var(--main-color)" />}
            sx={{
              backgroundColor:
                expanded === "description" ? "#f5f5f5" : "inherit",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <DescriptionIcon sx={{ mr: 2, color: "var(--main-color)" }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Description & Use
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {hasDescription ? (
              <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                {product.description ||
                  "Used to prevent blood clots in patients who have had a recent heart attack or stroke, or who have peripheral arterial disease."}
              </Typography>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Detailed description is not available.
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "ingredients"}
          onChange={handleChange("ingredients")}
          disableGutters
          elevation={0}
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="var(--main-color)" />}
            sx={{
              backgroundColor:
                expanded === "ingredients" ? "#f5f5f5" : "inherit",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <ScienceIcon sx={{ mr: 2, color: "var(--main-color)" }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Ingredients
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Ingredients List
            </Typography>

            {ingredients.length ? (
              <List dense>
                {ingredients.map((item, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemIcon sx={{ minWidth: 25 }}>
                      <Box
                        sx={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          backgroundColor: "text.secondary",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="body2">{item}</Typography>}
                    />
                  </ListItem>
                ))}
              </List>
            ) : (
              <Typography variant="body2" color="text.secondary">
                Ingredients information is not available.
              </Typography>
            )}

            {manufacturer && (
              <Typography variant="body2" sx={{ mt: 1.5 }}>
                <strong>Manufactured by:</strong> {manufacturer}
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "care"}
          onChange={handleChange("care")}
          disableGutters
          elevation={0}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="var(--main-color)" />}
            sx={{
              backgroundColor: expanded === "care" ? "#f5f5f5" : "inherit",
              "&:hover": { backgroundColor: "#f0f0f0" },
            }}
          >
            <HealthAndSafetyIcon sx={{ mr: 2, color: "var(--main-color)" }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Care Instructions
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Consultation and Usage
            </Typography>

            {hasCare ? (
              <Typography variant="body2" sx={{ whiteSpace: "pre-line" }}>
                {product.careInstructions ||
                  "Consult a physician for dosage and use."}
              </Typography>
            ) : (
              <Typography variant="body2" color="text.secondary">
                No specific care instructions provided for this product.
              </Typography>
            )}
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Box>
  );
};

export default ProductDetail;
