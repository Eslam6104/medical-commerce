import { Box } from "@mui/material";

const ImageBlock = ({ imageUrl }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <img
        src={imageUrl}
        alt="About section"
        style={{ maxWidth: "100%", borderRadius: 16 }}
      />
    </Box>
  );
};
export default ImageBlock;
