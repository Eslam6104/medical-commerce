import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMailBulk } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

const contactData = [
  {
    icon: <IoLocationSharp size={30} />,
    text: "50-UTC, Beside Orange Hospital",
  },
  {
    icon: <BsFillTelephoneFill size={30} />,
    text: "+1234567890",
  },
  {
    icon: <FaMailBulk size={30} />,
    text: "info@example.com",
  },
  {
    icon: <FaClock size={30} />,
    text: "Mon-Fri: 9am - 5pm",
  },
];

const ContactInfo = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Grid container>
        {contactData.map((item, index) => (
          <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                p: 2,
                my: { xs: 1, md: 2 },
                borderRadius: 2,
              }}
              bgcolor={index % 2 === 0 ? "var(--gray-100)" : "var(--gray-400)"}
            >
              <Box
                sx={{
                  width: "50px",
                  height: "50px",
                  border: "1px solid var(--main-color)",
                  borderRadius: "50%",
                  color: "var(--main-color)",
                  "&:hover": {
                    borderColor: "black",
                    transition: "0.3s",
                    color: "black",
                  },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.icon}
              </Box>
              <Typography
                variant="body1"
                sx={{
                  ml: 2,
                  color: "gray",
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ContactInfo;
