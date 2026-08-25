import { Container, Grid, Alert, Box } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { useServices } from "./useServices";

const ServiceSection = () => {
  const { services, error } = useServices();

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 8, px: 5 }}>
      <Box display="flex" justifyContent="space-between" width="100%">
        <Grid container spacing={4} justifyContent="space-around">
          {services.map(({ id, icon, title, description }) => (
            <Grid
              item
              key={id}
              size={{
                xs: 12,
                sm: 4,
              }}
              display="flex"
              justifyContent="center"
            >
              <ServiceCard
                icon={icon}
                title={title}
                description={description}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceSection;
