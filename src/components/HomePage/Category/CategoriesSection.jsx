import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import CategoryCard from "./CategoriesCard";
import { CATEGORIES } from "./categoriesData";

export default function CategoriesSection() {
  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 800, mb: { xs: 3, md: 5 } }}
        >
          Popular Categories
        </Typography>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 2, spaceBetween: 10 },
            480: { slidesPerView: 3, spaceBetween: 12 },
            900: { slidesPerView: 6, spaceBetween: 16 },
            1200: { slidesPerView: 8, spaceBetween: 18 },
          }}
          style={{ paddingBottom: 20 }}
          className="custom-swiper"
        >
          {CATEGORIES.map((cat) => (
            <SwiperSlide
              key={cat.id}
              style={{ width: 180, display: "flex", justifyContent: "center" }}
            >
              <CategoryCard category={cat} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
