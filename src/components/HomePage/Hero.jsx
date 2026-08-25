import React from "react";
import { motion } from "framer-motion";
import { Box, Container, Typography, Stack } from "@mui/material";
import { CiFaceSmile } from "react-icons/ci";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          "url('https://wdtelethemes.wpengine.com/oldhaven-elementor/wp-content/uploads/sites/3/2023/11/slider1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: { xs: "80vh", sm: "90vh", md: "100vh" },
        display: "flex",
        alignItems: "center",
        color: "var(--main-color)",
        textAlign: { xs: "center", md: "left" },
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, sm: 3 },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          spacing={{ xs: 2, md: 3 }}
          sx={{ maxWidth: { xs: "100%", md: 600 } }}
        >
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="span"
              fontWeight="normal"
              sx={{
                fontSize: { xs: "30px", sm: "34px", md: "37px" },
              }}
            >
              Make Someone
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{
                fontSize: { xs: "70px", sm: "114px" },
                background:
                  "linear-gradient(to bottom, var(--second-color), var(--main-color))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              HAPPY
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
              gap: "15px",
            }}
          >
            <Typography
              variant="span"
              fontWeight="normal"
              sx={{
                fontSize: { xs: "30px", sm: "34px", md: "37px" },
              }}
            >
              With
            </Typography>
            <Typography
              variant="span"
              fontWeight="normal"
              sx={{
                fontSize: "37px",
              }}
            >
              <CiFaceSmile />
            </Typography>
          </motion.div>

          <motion.img
            src="./bg.png"
            alt="bg"
            initial={{ opacity: 0, x: -100, y: -40 }}
            animate={{ opacity: 1, x: -40, y: -90 }}
            transition={{
              delay: 1.5,
              duration: 0.6,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
