import { useCallback, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc, updateDoc, onSnapshot } from "firebase/firestore";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useCartAndWishlist = () => {
  const [cartCount, setCartCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const selector = useSelector((state) => state.logged);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      if (!currentUser) {
        setCartCount(0);
        return;
      }

      const userRef = doc(db, "users", currentUser.uid);
      const unsubscribe = onSnapshot(userRef, (snapshot) => {
        const data = snapshot.data();
        const cart = data?.cart || [];
        setCartCount(
          cart.reduce((total, item) => total + (item.quantity || 1), 0)
        );
      });

      return () => unsubscribe();
    });

    return () => unsubscribeAuth();
  }, []);

  const requireLogin = useCallback(
    (callback) => {
      if (!selector.logged) {
        toast.error("Please sign in to continue.");
        navigate("/auth");
        return;
      }
      if (callback) callback();
    },
    [selector, navigate]
  );

  const addProductToCart = useCallback(async (product) => {
    try {
      setLoading(true);
      const user = auth.currentUser;
      if (!user) {
        toast.error("Please sign in first!");
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userData = await getDoc(userRef);
      const cartFirebase = userData.data()?.cart || [];

      const existingIndex = cartFirebase.findIndex(
        (item) => item.id === product.id
      );

      let updatedCart;
      if (existingIndex !== -1) {
        updatedCart = cartFirebase.map((item, i) =>
          i === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedCart = [
          ...cartFirebase,
          { ...product, inCard: true, quantity: 1 },
        ];
      }

      await updateDoc(userRef, { cart: updatedCart });
      toast.success("Added to cart successfully!");
      setLoading(false);
    } catch {
      toast.error("Failed to add to cart!");
    } finally {
      setLoading(false);
    }
  }, []);

  const addProductToWishlist = useCallback(async (product) => {
    try {
      setLoading(true);
      const user = auth.currentUser;
      if (!user) {
        toast.error("Please sign in first!");
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userData = await getDoc(userRef);
      const wishlistFirebase = userData.data()?.wishlist || [];

      const existingIndex = wishlistFirebase.findIndex(
        (item) => item.id === product.id
      );

      let updatedWishlist;
      if (existingIndex !== -1) {
        updatedWishlist = wishlistFirebase.map((item, i) =>
          i === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        updatedWishlist = [
          ...wishlistFirebase,
          { ...product, inCard: true, quantity: 1 },
        ];
      }

      await updateDoc(userRef, { wishlist: updatedWishlist });
      toast.success("Added to wishlist successfully!");
      setLoading(false);
    } catch {
      toast.error("Failed to add to wishlist!");
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    requireLogin,
    addProductToCart,
    addProductToWishlist,
    loading,
    cartCount,
  };
};
