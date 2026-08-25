import toast from "react-hot-toast";
import { useCallback, useState, useEffect } from "react";
import { Box, Grid, Typography, Pagination } from "@mui/material";
import HeaderOfSection from "../customHook/HeaderOfSection";
import Loading from "../customHook/Loading";
import { auth, db } from "../firebase/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import WishlistCard from "./WishlistCard";

const Wishlist = () => {
  const [user, setUser] = useState(null);
  const [wishlistFirebase, setWishlistFirebase] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const fetchWishlistFromFirebase = useCallback(async () => {
    try {
      if (!user) {
        setWishlistFirebase([]);
        setLoading(false);
        return;
      }

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setWishlistFirebase(userSnap.data().wishlist || []);
      } else {
        setWishlistFirebase([]);
      }
    } catch {
      console.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      fetchWishlistFromFirebase();
    } else {
      setWishlistFirebase([]);
    }
  }, [user, fetchWishlistFromFirebase]);

  const updateWishlistInFirebase = useCallback(
    async (updatedWishlist) => {
      if (!user) return;
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, { wishlist: updatedWishlist });
      setWishlistFirebase(updatedWishlist);
    },
    [user]
  );

  const handleRemoveFromWishlist = useCallback(
    async (id) => {
      if (!user) {
        toast.error("Please login first!");
        return;
      }

      const updatedWishlist = wishlistFirebase.filter(
        (wishlistItem) => wishlistItem.id !== id
      );

      await updateWishlistInFirebase(updatedWishlist);
      toast.error("Product removed from wishlist!");
    },
    [wishlistFirebase, updateWishlistInFirebase, user]
  );

  if (loading) return <Loading />;

  if (!user)
    return (
      <>
        <HeaderOfSection
          title="My Wishlist"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
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
            Please login to add items to your wishlist!
          </Typography>
        </Box>
      </>
    );

  if (user && wishlistFirebase.length === 0)
    return (
      <Box sx={{ textAlign: "center" }}>
        <HeaderOfSection
          title="My Wishlist"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
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
            Your wishList is empty
          </Typography>
        </Box>
      </Box>
    );
  return (
    <Box>
      <Box sx={{ textAlign: "center" }}>
        <HeaderOfSection
          title="My Wishlist"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
        />
      </Box>

      <Grid container spacing={2} minHeight="30vh" px={3}>
        {wishlistFirebase.length === 0 ? (
          <Grid item xs={12}>
            <Typography color="text.secondary" textAlign="center" fontSize={16}>
              No products in your wishlist.
            </Typography>
          </Grid>
        ) : (
          wishlistFirebase.map((product) => (
            <Grid item size={{ xs: 12, sm: 6, lg: 3 }} key={product.id}>
              <WishlistCard
                product={product}
                handleDelete={handleRemoveFromWishlist}
              />
            </Grid>
          ))
        )}
      </Grid>
      <Pagination
        count={Math.ceil(wishlistFirebase.length / 12)}
        page={page}
        onChange={(e, value) => setPage(value)}
        sx={{
          "& .MuiPaginationItem-root": {
            color: "gray",
            borderColor: "var(--gray-100)",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "var(--main-color)",
            color: "#fff",
            borderColor: "var(--main-color)",
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          },
        }}
        variant="outlined"
        shape="rounded"
      />
    </Box>
  );
};
export default Wishlist;
