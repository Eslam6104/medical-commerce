import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CardProduct from "./CardProduct";
import DealCard from "./DealCard";

const SwiperContainer = ({
  headerOfSection,
  products,
  xsBreakPoint,
  smBreakPoint,
  mdBreakPoint,
  lgBreakPoint,
}) => {
  return (
    <Box
      sx={{
        p: 5,
        borderRadius: 3,
        position: "relative",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2, textAlign: "center" }}
        fontWeight="bold"
      >
        {headerOfSection}
      </Typography>

      <IconButton
        className="swiper-button-prev"
        sx={{
          position: "absolute",
          top: "50%",
          left: 8,
          transform: "translateY(-50%)",
          bgcolor: "transparent",
          boxShadow: 2,
          "&:hover": { bgcolor: "grey.100" },
        }}
      >
        <FaChevronLeft />
      </IconButton>

      <IconButton
        className="swiper-button-next"
        sx={{
          position: "absolute",
          top: "50%",
          right: 8,
          transform: "translateY(-50%)",
          bgcolor: "transparent",
          boxShadow: 2,
          "&:hover": { bgcolor: "grey.100" },
        }}
      >
        <FaChevronRight />
      </IconButton>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={15}
        breakpoints={{
          320: { slidesPerView: xsBreakPoint },
          640: { slidesPerView: smBreakPoint },
          768: { slidesPerView: mdBreakPoint },
          900: { slidesPerView: lgBreakPoint },
        }}
        style={{
          border:
            headerOfSection === "Deal Of The Week"
              ? "none"
              : "1px solid #dbdbdbff",
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            {headerOfSection === "Deal Of The Week" ? (
              <DealCard product={product} />
            ) : (
              <CardProduct product={product} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
export default SwiperContainer;
