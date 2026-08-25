import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { IconButton } from "@mui/material";

const DownFooter = () => {
  const icons = [
    { icon: FacebookIcon, href: "" },
    { icon: TwitterIcon, href: "" },
    { icon: InstagramIcon, href: "" },
    { icon: YouTubeIcon, href: "" },
    { icon: PinterestIcon, href: "" },
  ];
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      flexDirection={{ xs: "column", sm: "row" }}
      spacing={2}
    >
      <Grid item sx={{ order: { xs: 2, sm: 1 } }}>
        <Box
          sx={{ display: "flex", alignItems: "center", mt: { xs: 2, sm: 0 } }}
        >
          {icons.map((icon, i) => (
            <IconButton
              key={i}
              component="a"
              target="_blank"
              href={icon.href}
              sx={{
                width: 30,
                height: 30,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#e0e0e0",
                mx: 1,
                color: "black",
                cursor: "pointer",
              }}
            >
              <icon.icon
                sx={{
                  fontSize: 16,
                  color: "black",
                  transition: "0.2s",
                  "&:hover": {
                    color: "var(--main-color)",
                  },
                }}
              />
            </IconButton>
          ))}
        </Box>
      </Grid>

      <Grid item sx={{ order: { xs: 1, sm: 2 } }}>
        <Typography variant="body2" sx={{ ml: 3, color: "#666" }}>
          © Medical Care. All Rights Reserved
        </Typography>
      </Grid>
      <Grid item sx={{ order: { xs: 1, sm: 2 } }}>
        <Typography
          sx={{ ml: 3, color: "var(--main-color)", fontWeight: "bold" }}
        >
          Medical Care
        </Typography>
      </Grid>
    </Grid>
  );
};

export default DownFooter;
