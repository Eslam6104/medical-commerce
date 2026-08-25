// src/components/store/apiSlice.jsx
import { createApi } from "@reduxjs/toolkit/query/react";
import data from "../../../data.json"; // <-- adjust path if you moved the file

export const apiSlice = createApi({
  reducerPath: "productApi",

  // We don't call a real server; we just return data from data.json
  baseQuery: async () => ({ data: null }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      // RTK Query custom resolver
      queryFn: async () => {
        try {
          const products = data.product || [];
          return { data: products }; // ALWAYS an array
        } catch (error) {
          console.error("Failed to load products from data.json", error);
          return {
            error: {
              status: "CUSTOM_ERROR",
              error: "Failed to load products",
            },
          };
        }
      },
    }),
    // Fake order endpoint so checkout doesn’t break
    addOrder: builder.mutation({
      queryFn: async (orderData) => {
        console.log("Mock order submitted:", orderData);
        return { data: { ok: true } };
      },
    }),
  }),
});

export const { useGetProductsQuery, useAddOrderMutation } = apiSlice;
