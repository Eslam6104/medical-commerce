import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import UpFooter from "./UpFooter";
import DownFooter from "./DownFooter";
import SubscriptionSection from "./subscription/SubscriptionSection";

const Footer = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        py: 4,
        px: { xs: 2, sm: 4, md: 8 },
      }}
    >
      <SubscriptionSection />
      <Divider sx={{ my: 4 }} />

      <UpFooter />
      <Divider sx={{ my: 4 }} />

      <DownFooter />
    </Box>
  );
};

export default Footer;
