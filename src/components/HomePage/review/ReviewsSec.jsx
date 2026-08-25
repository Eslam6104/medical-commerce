import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { reviews } from "./reviews";

export default function ReviewsSec() {
  return (
    <Box sx={{ backgroundColor: "#f2f8f7", py: 5, px: { xs: 2, md: 6 } }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              mb: { xs: 2, md: 0 },
            }}
          >
            Our Clients
            <br />
            Testimonial
          </Typography>
        </Grid>

        <Grid item size={{ xs: 12, md: 9 }}>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={30}
            breakpoints={{
              0: { slidesPerView: 1 },
              675: { slidesPerView: 2 },
            }}
            style={{ paddingBottom: "50px" }}
            className="custom-swiper"
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 3,
                    boxShadow: "0px 2px 8px rgba(0,0,0,0.08)",
                    borderRadius: 3,
                    backgroundColor: "white",
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        fontStyle: "italic",
                      }}
                    >
                      “{review.text}”
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {review.desc}
                    </Typography>
                  </CardContent>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      mt: 2,
                    }}
                  >
                    <Avatar
                      src={review.img}
                      alt={review.name}
                      sx={{ width: 50, height: 50 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 600, color: "#000" }}
                      >
                        {review.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {review.title}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  );
}
