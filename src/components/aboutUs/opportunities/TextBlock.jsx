import { Box, Typography } from "@mui/material";
import AccordionBlock from "./AccordionBlock";

const TextBlock = ({ heading, subheading, accordionItems }) => {
  return (
    <Box
      sx={{
        background: "#f7f7f7",
        borderRadius: "12px",
        px: { xs: 3, md: 6 },
        py: { xs: 2, md: 4 },
        minHeight: "100%",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        {heading}
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "grey.800" }}>
        {subheading}
      </Typography>
      <AccordionBlock accordionItems={accordionItems} />
    </Box>
  );
};
export default TextBlock;
