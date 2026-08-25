import { Box } from "@mui/material";
import AboutContactSection from "./aboutContactSection/AboutContactSection";
import ImageSection from "./imagesSection/ImagesSection";
import ServiceSection from "./services/ServiceSection";
import OpportunitiesSection from "./opportunities/OpportunitiesSection";
import TeamStrategy from "./teamStrategy/TeamStrategy";
import HeaderOfSection from "../customHook/HeaderOfSection";
function AboutUs() {
  return (
    <Box component="main" sx={{ bgcolor: "#fff" }}>
      <HeaderOfSection
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Element", href: "/" },
          { label: "About Us" },
        ]}
      />
      <TeamStrategy />
      <ImageSection />
      <OpportunitiesSection />
      <ServiceSection />
      <AboutContactSection />
    </Box>
  );
}
export default AboutUs;
