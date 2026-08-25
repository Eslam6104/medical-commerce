import React from "react";
import { Box, Typography, Button } from "@mui/material";

const AdvCard = ({ adv }) => {
  return (
    <Box sx={{ mb: 4, width: { xs: "100%", md: "50%" } }}>
      <Box
        sx={{
          backgroundImage: `url(${adv.imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 3,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          p: { xs: 2, sm: 3, md: 5 },
          flexDirection: { xs: "column", sm: "row" },
          textAlign: "right",
        }}
      >
        <Box sx={{ width: "55%" }}></Box>
        <Box sx={{ flex: 1, textAlign: "left" }}>
          <Typography
            variant="subtitle2"
            sx={{ color: "text.secondary", fontWeight: 500 }}
          >
            {adv.subTitle}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              mt: 1,
              mb: 3,
              color: "#1b1b1b",
              fontSize: "20px",
            }}
          >
            {adv.title.slice(0, adv.title.indexOf(" <br>"))}
            <br />
            {adv.title.slice(adv.title.indexOf(" <br>") + 6)}
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--main-color)",
              color: "#fff",
              px: 3,
              py: 1,
              borderRadius: "8px",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { backgroundColor: "#00796b" },
            }}
          >
            SHOP NOW
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AdvCard;
