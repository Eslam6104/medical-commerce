import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase/firebase";
import uploadImageToCloudinary from "../cloudinary/uploadImageToCloudinary";
import toast from "react-hot-toast";
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";

const Signup = ({ setTab }) => {
  const [loading, setLoading] = useState(false);

  const signupSchema = z
    .object({
      username: z.string().min(3, "Username must contain 3 letters at least"),
      email: z.email(),
      password: z.string().min(8, "Password must contain 8 letters at least"),
      confPassword: z.string().min(8),
      image: z
        .any()
        .refine((file) => file?.length > 0, {
          message: "Profile picture is required",
        })
        .refine(
          (file) =>
            file &&
            ["image/jpeg", "image/png", "image/webp"].includes(file[0]?.type),
          { message: "Only JPEG, PNG, or WEBP images are allowed" }
        ),
    })
    .refine((data) => data.password === data.confPassword, {
      message: "Passwords do not match",
      path: ["confPassword"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema), mode: "onBlur" });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const file = data.image[0];
      const imageUrl = await uploadImageToCloudinary(file);
      7;

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email.trim(),
        data.password
      );

      const user = userCredential.user;

      const userData = {
        uid: user.uid,
        username: data.username,
        email: data.email,
        role: "user",
        profilePic: imageUrl,
        cart: [],
        wishList: [],
        createdAt: new Date(),
      };

      await setDoc(doc(db, "users", user.uid), userData);

      toast.success("Account Created Successfully!");
      setTab("login");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Oops! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        padding: 4,
        width: "100%",
        maxWidth: 600,
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control flex flex-col gap-3"
      >
        <Typography
          variant="h5"
          sx={{
            mb: 2,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Create Your Account
        </Typography>

        <TextField
          label="Username"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Email"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Confirm Password"
          type="password"
          {...register("confPassword")}
          error={!!errors.confPassword}
          helperText={errors.confPassword?.message}
          fullWidth
          sx={{ mb: 2 }}
        />

        <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
          <input
            type="file"
            {...register("image")}
            style={{
              padding: "10px 12px",
              border: "2px solid #E5E8EB",

              fontSize: "14px",
              cursor: "pointer",
              color: "black",
              backgroundColor: "#fff",
              outline: "none",
              transition: "0.2s",
            }}
          />

          {errors.image && (
            <Typography variant="body2" sx={{ color: "red", mt: 1 }}>
              {errors.image.message}
            </Typography>
          )}
        </Box>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          sx={{
            mt: 2,
            paddingY: 1.5,
            backgroundColor: "var(--main-color)",
            "&:hover": { backgroundColor: "var(--blue-color)" },
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 1.5,
          mt: 3,
        }}
      >
        <Typography variant="body2" sx={{ color: "gray" }}>
          Already have an account?
        </Typography>
        <Button
          onClick={() => setTab("login")}
          sx={{
            textTransform: "none",
            padding: 0,
            minWidth: "auto",
          }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Signup;
