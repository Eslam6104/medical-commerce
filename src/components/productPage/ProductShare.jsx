import { Box } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import ShareIcon from "@mui/icons-material/Share";

const links = [
  "https://www.facebook.com",
  "https://www.instagram.com",
  "https://www.whatsapp.com",
  "https://www.twitter.com",
  "https://www.pinterest.com",
  "https://www.linkedin.com/shareArticle?mini=true",
];

const icons = [
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
  TwitterIcon,
  PinterestIcon,
  ShareIcon,
];

const ProductShare = () => (
  <Box sx={{ mt: 3, display: "flex", justifyContent: "center", gap: 2 }}>
    {icons.map((Icon, i) => (
      <a
        key={i}
        href={links[i]}
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Icon sx={{ fontSize: 32, cursor: "pointer", color: "#777" }} />
      </a>
    ))}
  </Box>
);

export default ProductShare;
