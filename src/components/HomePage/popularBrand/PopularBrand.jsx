import React, { useMemo, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import brands from "./brand"; 

const toTwoRowColumns = (list) => {
  const cols = [];
  for (let i = 0; i < list.length; i += 2) cols.push(list.slice(i, i + 2));
  return cols;
};

export default function PopularBrands() {
  useEffect(() => {
    brands.forEach((b) => {
      const i = new Image();
      i.src = b.src;
    });
  }, []);
  const columns = useMemo(() => toTwoRowColumns(brands), []);

  return (
    <Box sx={{ py: { xs: 5, md: 7 } }}>
      <Box sx={{ maxWidth: 1600, mx: "auto", px: { xs: 3, sm: 4, md: 6 } }}>
        <Typography
          variant="h3"
          fontWeight={900}
          align="center"
          sx={{ mb: { xs: 3.5, md: 5 } }}
        >
          Popular Brands
        </Typography>

        <Box
          sx={{
            border: 1,
            borderColor: "divider",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 2 },
              600: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
            allowTouchMove
            grabCursor
            observer
            observeParents
            resizeObserver
            spaceBetween={0}
            style={{ cursor: "grab" }}
          >
            {columns.map((col, i) => (
              <SwiperSlide key={i}>
                <Box
                  sx={{
                    height: { xs: 320, sm: 300, md: 240, lg: 260 },
                    display: "grid",
                    gridTemplateRows: "1fr 1fr",
                    borderLeft: 1,
                    borderColor: "divider",
                  }}
                >
                  {col.map((b, r) => (
                    <Box
                      key={r}
                      component="a"
                      href={b.href}
                      sx={{
                        display: "grid",
                        placeItems: "center",
                        p: { xs: 1.5, sm: 2, md: 3 },
                        borderTop: r ? 1 : 0,
                        borderColor: "divider",
                        textDecoration: "none",
                      }}
                    >
                      <Box
                        component="img"
                        src={b.src}
                        alt={b.name}
                        loading="lazy"
                        sx={{
                          maxHeight: { xs: 110, sm: 100, md: 78 },
                          maxWidth: { xs: "92%", md: "80%" },
                          objectFit: "contain",
                        }}
                      />
                    </Box>
                  ))}
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
}
