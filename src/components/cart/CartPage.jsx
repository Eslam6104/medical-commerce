import React, { useEffect, useState, useMemo, useCallback } from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import toast from "react-hot-toast";
import { auth, db } from "../firebase/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import Loading from "../customHook/Loading";
import HeaderOfSection from "../customHook/HeaderOfSection";
import ShoppingCart from "./ShoppingCart";
import Order from "./Order";

const CartPage = () => {
  const [user, setUser] = useState(null);
  const [cartFirebase, setCartFirebase] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const fetchCartFromFirebase = useCallback(async () => {
    try {
      if (!user) {
        setCartFirebase([]);
        setLoading(false);
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setCartFirebase(userSnap.data().cart || []);
      } else {
        setCartFirebase([]);
      }
    } catch {
      console.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchCartFromFirebase();
    } else {
      setCartFirebase([]);
    }
  }, [user, fetchCartFromFirebase]);

  const updateCartInFirebase = useCallback(
    async (updatedCart) => {
      if (!user) return;
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { cart: updatedCart });
      setCartFirebase(updatedCart);
    },
    [user]
  );

  const handleAddToCart = useCallback(
    async (item) => {
      if (!user) {
        toast.error("Please login to add items to your cart!");
        return;
      }

      const existingIndex = cartFirebase.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      let updatedCart;
      if (existingIndex !== -1) {
        updatedCart = cartFirebase.map((cartItem, index) =>
          index === existingIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        updatedCart = [
          ...cartFirebase,
          {
            ...item,
            inCard: true,
            quantity: 1,
          },
        ];
      }

      await updateCartInFirebase(updatedCart);
      toast.success("Added to cart successfully!");
    },
    [cartFirebase, updateCartInFirebase, user]
  );

  const handleRemoveFromCart = useCallback(
    async (item) => {
      if (!user) {
        toast.error("Please login first!");
        return;
      }

      const existingIndex = cartFirebase.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingIndex === -1) return;

      const existingItem = cartFirebase[existingIndex];
      let updatedCart;

      if (existingItem.quantity > 1) {
        updatedCart = cartFirebase.map((cartItem, index) =>
          index === existingIndex
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
      } else {
        updatedCart = cartFirebase.filter(
          (cartItem) => !(cartItem.id === item.id)
        );
      }

      await updateCartInFirebase(updatedCart);
      toast.error("Product removed from cart!");
    },
    [cartFirebase, updateCartInFirebase, user]
  );

  const { subTotal, estimatedTax, total, itemCount } = useMemo(() => {
    const sub = (cartFirebase || []).reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const tax = sub > 0 ? 7 : 0;
    const tot = sub + tax;
    const itemsNum = (cartFirebase || []).reduce(
      (total, item) => total + item.quantity,
      0
    );
    return {
      subTotal: sub,
      estimatedTax: tax,
      total: tot,
      itemCount: itemsNum,
    };
  }, [cartFirebase]);

  if (loading) return <Loading />;

  if (!user)
    return (
      <>
        <HeaderOfSection
          title="My Cart"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        />
        <Box
          sx={{
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">
            Please login to add items to your cart!
          </Typography>
        </Box>
      </>
    );

  if (user && cartFirebase.length === 0)
    return (
      <Box sx={{ textAlign: "center" }}>
        <HeaderOfSection
          title="My Cart"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        />
        <Box
          sx={{
            height: "40vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h2" fontSize={20} fontWeight={600} color="gray">
            Your cart is empty
          </Typography>
        </Box>
      </Box>
    );
  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <HeaderOfSection
          title="My Cart"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Cart" }]}
        />
      </Box>
      <Grid container px={3} spacing={2}>
        <Grid item size={{ xs: 12, md: 8 }}>
          <ShoppingCart
            cartFirebase={cartFirebase}
            handleAddToCart={handleAddToCart}
            handleRemoveFromCart={handleRemoveFromCart}
          />
        </Grid>
        <Grid item size={{ xs: 12, md: 4 }}>
          <Order
            cartFirebase={cartFirebase}
            total={total}
            subTotal={subTotal}
            estimatedTax={estimatedTax}
            itemCount={itemCount}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartPage;
