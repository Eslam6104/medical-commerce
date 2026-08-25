import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Box, Grid, CircularProgress } from "@mui/material";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import CheckoutForm from "./CheckoutForm";
import CheckoutCart from "./CheckoutCart";
import HeaderOfSection from "../customHook/HeaderOfSection";

const CheckoutPage = () => {
  const [user, setUser] = useState(null);
  const [cartFirebase, setCartFirebase] = useState([]);
  const [loading, setLoading] = useState(true);
  const [shippingMethod, setShippingMethod] = useState("pickup");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  const fetchCartFromFirebase = useCallback(async () => {
    if (!user) return;
    setLoading(true);

    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setCartFirebase(userSnap.data()?.cart || []);
      } else {
        setCartFirebase([]);
      }
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    } finally {
      setLoading(false);
    }
  }, [user]);

  const total = useMemo(() => {
    const subTotal = cartFirebase.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const tax = subTotal > 0 ? 7 : 0;
    const shippingCost = shippingMethod === "express" ? 10 : 0;

    return subTotal + tax + shippingCost;
  }, [cartFirebase, shippingMethod]);

  if (!user && loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box>
      <HeaderOfSection
        title="Checkout"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Checkout" }]}
      />
      <Box sx={{ p: 3 }}>
        <Grid container spacing={4}>
          <Grid item size={{ xs: 12, md: 8 }}>
            <CheckoutForm
              total={total}
              user={user}
              cartFirebase={cartFirebase}
              setCartFirebase={setCartFirebase}
              shippingMethod={shippingMethod}
              setShippingMethod={setShippingMethod}
            />
          </Grid>

          <Grid item size={{ xs: 0, md: 4 }}>
            <CheckoutCart
              loading={loading}
              cartFirebase={cartFirebase}
              total={total}
              fetchCartFromFirebase={fetchCartFromFirebase}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CheckoutPage;
