import { Grid, Paper, Alert } from "@mui/material";
import useOpportunitiesData from "./useOpportunitiesData";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";

const OpportunitiesSection = () => {
  const { data, error } = useOpportunitiesData();
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!data) return <div>Loading...</div>;
  return (
    <Paper
      elevation={0}
      sx={{ background: "#f7f7f7", p: { xs: 1, md: 4 }, borderRadius: 0 }}
    >
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            minWidth: 350,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <TextBlock
            heading={data.heading}
            subheading={data.subheading}
            accordionItems={data.accordion}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            minWidth: 350,
            maxWidth: 600,
            mx: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageBlock imageUrl={data.imageUrl} />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default OpportunitiesSection;
