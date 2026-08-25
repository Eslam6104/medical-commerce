import { Box } from "@mui/material";

export default function StoreButtons() {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
          loading="lazy"
          style={{ height: 35, marginTop: 8 }}
        />
      </a>

      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          alt="Get it on Google Play"
          loading="lazy"
          style={{ height: 50 }}
        />
      </a>
    </Box>
  );
}
