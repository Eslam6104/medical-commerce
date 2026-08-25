import React from "react";
import {
  Box,
  Typography,
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  TextField,
  Stack,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      sx={{
        minHeight: "400px",
        borderRadius: 2,
        backgroundColor: "var(--third-color)",
        p: 3,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Get In Touch With Us
      </Typography>
      <Typography variant="body2" color="gray">
        If you wish to directly reach us, Please fill out the form below .
      </Typography>
      <Box
        component="form"
        sx={{
          width: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <FormControl fullWidth>
          <InputLabel
            sx={{
              color: "gray",
              "&.Mui-focused": {
                color: "var(--main-color)",
              },
            }}
          >
            Subject
          </InputLabel>
          <Select
            label="Subject"
            sx={{
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                border: "2px solid var(--main-color)",
              },
            }}
          >
            <MenuItem value="customer-service">Customer service</MenuItem>
            <MenuItem value="technical-support">Technical support</MenuItem>
            <MenuItem value="feedback">Feedback</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          type="email"
          label="Email address"
          placeholder="your@email.com"
          required
          sx={{
            "& .MuiInputLabel-root": {
              color: "gray",
              transition: "0.3s ease",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "var(--main-color)",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0,0,0,0.23)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--main-color)",
                borderWidth: "2px",
              },
            },
          }}
        />

        <TextField
          fullWidth
          label="Message"
          multiline
          rows={5}
          placeholder="How can we help?"
          sx={{
            "& .MuiInputLabel-root": {
              color: "gray",
              transition: "0.3s ease",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "var(--main-color)",
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "rgba(0,0,0,0.23)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "var(--main-color)",
                borderWidth: "2px",
              },
            },
          }}
        />

        <FormControlLabel
          control={
            <Checkbox
              sx={{
                "&.Mui-checked": {
                  color: "var(--main-color)",
                },
              }}
            />
          }
          label={
            <Typography variant="body2">
              I agree to the terms and conditions and the privacy policy
            </Typography>
          }
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            bgcolor: "var(--main-color)",
            color: "white",
            fontWeight: "bold",
            borderRadius: 2,
            textTransform: "uppercase",
            "&:hover": {
              bgcolor: "var(--blue-color)",
            },
          }}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
