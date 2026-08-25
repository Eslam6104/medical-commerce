import { Paper, Stack, Typography, Box } from "@mui/material";

const ServiceCard = ({ icon: Icon, title, description }) => (
  <Paper
    elevation={1}
    sx={{
      p: 3,
      textAlign: "center",
      borderRadius: 3,
      height: "100%",
      boxShadow: 3,
      width: "100%",
      transition: "transform 0.2s, boxShadow 0.2s",
      "&:hover": { transform: "translateY(-4px)", boxShadow: 4 },
    }}
  >
    <Stack spacing={2} alignItems="center">
      <Box>
        <Icon sx={{ fontSize: 60, color: "var(--main-color)" }} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Stack>
  </Paper>
);

export default ServiceCard;
