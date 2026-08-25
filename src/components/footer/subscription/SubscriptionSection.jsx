import { Box, Typography } from "@mui/material";
import SubscriptionForm from "./SubscriptionForm";

const SubscriptionSection = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        width: { xs: "100%", md: "50%" },
        textAlign: "center",
        p: 4,
      }}
    >
      <Typography variant="h5" mb={1}>
        Join our newsletter and get
      </Typography>
      <Typography variant="h5" mb={3}>
        $20 discount for your first order
      </Typography>
      <SubscriptionForm />
    </Box>
  );
};
export default SubscriptionSection;
