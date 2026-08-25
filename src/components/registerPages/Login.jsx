import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { login } from "../reducers/loggedReducer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  TextField,
  Button,
  CircularProgress,
  Box,
  Typography,
} from "@mui/material";

const Login = ({ setTab }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginSchema = z.object({
    email: z.email(),
    password: z.string().min(8, "Password must contain 8 letters at least"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema), mode: "onBlur" });

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const userCredential = await signInWithEmailAndPassword(
        auth,
        data.email.trim(),
        data.password
      );

      const user = userCredential.user;
      const snap = await getDoc(doc(db, "users", user.uid));
      const userDocSnap = snap.data();

      if (!snap.exists()) {
        toast.error("User document not found!");
        setLoading(false);
        return;
      }

      dispatch(
        login({
          uid: user.uid,
          email: user.email,
          username: userDocSnap.username,
          profilePic: userDocSnap.profilePic,
          role: userDocSnap.role || "user",
          cart: userDocSnap.cart || [],
          wishList: userDocSnap.wishList || [],
        })
      );

      toast.success("Login Successfully!");
      navigate(userDocSnap.role === "admin" ? "/admin/dashboard" : "/");
    } catch (error) {
      console.log(error.code, error.message);
      toast.error("Invalid email or password!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        padding: 4,

        width: "100%",
        maxWidth: 400,
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-control flex flex-col gap-3"
      >
        <Typography
          variant="h5"
          sx={{ mb: 2, fontWeight: "bold", textAlign: "center" }}
        >
          Login to Your Account
        </Typography>

        <TextField
          label="Email"
          type="email"
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

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={loading}
          sx={{
            mt: 1,
            paddingY: 1.5,
            backgroundColor: "var(--main-color)",
            "&:hover": { backgroundColor: "var(--blue-color)" },
          }}
        >
          {loading ? (
            <CircularProgress size={24} sx={{ color: "white" }} />
          ) : (
            "Login"
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
          Not registered yet?
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            padding: 0,
            minWidth: "auto",
          }}
          onClick={() => setTab("signup")}
        >
          Create an account
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
