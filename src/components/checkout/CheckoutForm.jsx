import React, { useState, useCallback } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  Grid,
  Autocomplete,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  Paper,
} from "@mui/material";
import { useAddOrderMutation } from "../store/apiSlice";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Country, State, City } from "country-state-city";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
import toast from "react-hot-toast";

const checkoutSchema = z.object({
  fname: z.string().min(1, "First name is required"),
  lname: z.string().min(1, "Last name is required"),
  email: z.email("Invalid email"),
  phone: z.string().min(10, "Phone is required"),
  country: z.object({ value: z.string(), label: z.string() }).nullable(),
  state: z.object({ value: z.string(), label: z.string() }).nullable(),
  city: z.object({ value: z.string(), label: z.string() }).nullable(),
  shoppingMethod: z.enum(["pickup", "express"]),
});

const CheckoutForm = ({ total, user, setCartFirebase, setShippingMethod }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [addOrder] = useAddOrderMutation();

  const navigate = useNavigate();

  const countries = Country.getAllCountries();
  const states = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value)
    : [];
  const cities = selectedState
    ? City.getCitiesOfState(selectedCountry.value, selectedState.value)
    : [];

  const countriesOptions = countries.map((c) => ({
    value: c.isoCode,
    label: c.name,
  }));

  const statesOptions = states.map((s) => ({
    value: s.isoCode,
    label: s.name,
  }));

  const citiesOptions = cities.map((c) => ({
    value: c.name,
    label: c.name,
  }));

  const updateCartInFirebase = useCallback(async () => {
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { cart: [] });
      toast.success("Cart cleared!");
      setCartFirebase([]);
    } catch (e) {
      console.error(e);
    }
  }, [setCartFirebase, user]);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    mode: "onBlur",
    defaultValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      country: null,
      state: null,
      city: null,
      shoppingMethod: "pickup",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);

    let finalTotal = total;
    if (data.shoppingMethod === "express") finalTotal += 10;

    const newOrder = {
      id: Date.now().toString(),
      firstName: data.fname,
      lastName: data.lname,
      email: data.email,
      phone: data.phone,
      country: data.country?.label || "",
      state: data.state?.label || "",
      city: data.city?.label || "",
      shoppingMethod: data.shoppingMethod,
      total: finalTotal,
      status: "Processing",
      createdAt: new Date().toISOString(),
    };

    await updateCartInFirebase();
    await addOrder(newOrder);
    console.log(newOrder);
    setLoading(false);
    navigate(-1);
  };

  return (
    <Paper elevation={3} sx={{ p: 4, width: "100%", borderRadius: 3 }}>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
        Shipping Address
      </Typography>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item size={{ xs: 12, md: 6 }}>
            <TextField
              label="First Name"
              fullWidth
              {...register("fname")}
              error={!!errors.fname}
              helperText={errors.fname?.message}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <TextField
              label="Last Name"
              fullWidth
              {...register("lname")}
              error={!!errors.lname}
              helperText={errors.lname?.message}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <TextField
              label="Email"
              fullWidth
              type="email"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 6 }}>
            <TextField
              label="Phone Number"
              fullWidth
              {...register("phone")}
              placeholder="e.g., 0551234567"
              inputProps={{ pattern: "[0-9]{9,}" }}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 4 }}>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={countriesOptions}
                  getOptionLabel={(o) => o.label}
                  value={field.value}
                  onChange={(_, value) => {
                    field.onChange(value);
                    setSelectedCountry(value);
                    setSelectedState(null);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Country"
                      error={!!errors.country}
                      helperText={errors.country?.message}
                    />
                  )}
                />
              )}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 4 }}>
            <Controller
              name="state"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={statesOptions}
                  getOptionLabel={(o) => o.label}
                  value={field.value}
                  onChange={(_, value) => {
                    field.onChange(value);
                    setSelectedState(value);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="State"
                      error={!!errors.state}
                      helperText={errors.state?.message}
                    />
                  )}
                />
              )}
            />
          </Grid>

          <Grid item size={{ xs: 12, md: 4 }}>
            <Controller
              name="city"
              control={control}
              render={({ field }) => (
                <Autocomplete
                  options={citiesOptions}
                  getOptionLabel={(o) => o.label}
                  value={field.value}
                  onChange={(_, value) => field.onChange(value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="City"
                      error={!!errors.city}
                      helperText={errors.city?.message}
                    />
                  )}
                />
              )}
            />
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <FormLabel>Shipping Method</FormLabel>
            <Controller
              name="shoppingMethod"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  {...field}
                  onChange={(e) => {
                    field.onChange(e.target.value);
                    setShippingMethod(e.target.value);
                  }}
                >
                  <Grid
                    container
                    spacing={3}
                    sx={{
                      mt: 2,
                    }}
                  >
                    <Grid
                      item
                      size={{ xs: 6 }}
                      sx={{
                        border:
                          field.value === "pickup"
                            ? "2px solid var(--main-color)"
                            : "2px solid var(--third-color)",
                        borderRadius: 2,
                        p: 2,
                        bgcolor:
                          field.value === "pickup"
                            ? "var(--third-color)"
                            : "var(--third-color)",
                        transition: "0.3s",
                      }}
                    >
                      <FormControlLabel
                        value="pickup"
                        control={
                          <Radio
                            sx={{
                              color: "var(--main-color)",
                              "&.Mui-checked": {
                                color: "var(--main-color)",
                              },
                            }}
                          />
                        }
                        label="International Shipping"
                      />
                    </Grid>
                    <Grid
                      item
                      size={{ xs: 6 }}
                      sx={{
                        border:
                          field.value === "express"
                            ? "2px solid var(--main-color)"
                            : "2px solid var(--third-color)",
                        borderRadius: 2,
                        p: 2,
                        bgcolor:
                          field.value === "express"
                            ? "var(--third-color)"
                            : "var(--third-color)",
                        transition: "0.3s",
                      }}
                    >
                      <FormControlLabel
                        value="express"
                        control={
                          <Radio
                            sx={{
                              color: "var(--main-color)",
                              "&.Mui-checked": {
                                color: "var(--main-color)",
                              },
                            }}
                          />
                        }
                        label="Express Shipping (+$10)"
                      />
                    </Grid>
                  </Grid>
                </RadioGroup>
              )}
            />
            {errors.shoppingMethod && (
              <Typography color="error" fontSize={12}>
                {errors.shoppingMethod.message}
              </Typography>
            )}
          </Grid>

          <Grid item size={{ xs: 12 }}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={loading}
              sx={{
                py: 1.4,
                fontSize: 18,
                fontWeight: "bold",
                textTransform: "none",
                backgroundColor: "var(--main-color)",
                "&:hover": { backgroundColor: "var(--blue-color)" },
              }}
            >
              {loading ? "Processing..." : "Pay Now"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default CheckoutForm;
