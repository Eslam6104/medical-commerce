import React from "react";
import faqData from "./faqData";
import { Box, Grid, Typography } from "@mui/material";

const FAQSection = () => {
  return (
    <Box px={{ xs: 2, md: 6 }} py={6}>
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="flex-start"
      >
        <Grid item size={{ xs: 12, md: 6 }}>
          <Typography variant="body2" fontWeight={400} mb={2} color="gray">
            FAQ
          </Typography>
          <Typography variant="h4" fontWeight={700} mb={4}>
            Frequently Asked Question
          </Typography>

          <Typography variant="body1" color="text.secondary" mb={4}>
            Easily browse questions with our interactive FAQ accordions. Click
            to expand and view detailed answers instantly. Clean design, smooth
            transitions, and mobile-friendly layout.
          </Typography>
          <Box
            component="img"
            src="https://prestashop.codezeel.com/PRS22/PRS220545/default/img/cms/faq-page-img.jpg"
            alt="FAQ"
            loading="lazy"
            sx={{
              width: "100%",
              borderRadius: 2,
            }}
          />
        </Grid>

        <Grid item size={{ xs: 12, md: 6 }}>
          <Box>
            {faqData.map((item, index) => (
              <Box key={index} mb={3}>
                <Typography
                  variant="h6"
                  fontWeight={700}
                  mb={0.5}
                  sx={{ lineHeight: 1.3 }}
                >
                  {item.question}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {item.answer}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FAQSection;
