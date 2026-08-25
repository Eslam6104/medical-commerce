import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/aboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/HomePage/Home";
import Shop from "./components/shop/Shop";
import UserInterface from "./components/userInterface/UserInterface";
import ShopInterface from "./components/shop/ShopInterface";
import ProductPage from "./components/productPage/ProductPage";
import FAQ from "./components/faq/FAQ";
import { Toaster } from "react-hot-toast";
import SignPage from "./components/registerPages/SignPage";
import CartPage from "./components/cart/CartPage";
import Wishlist from "./components/wishList/Wishlist";
import SearchResult from "./components/search/SearchResult";
import CheckoutPage from "./components/checkout/CheckoutPage";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route element={<UserInterface />}>
          <Route index path="/" element={<Home />} />
          <Route path="/auth" element={<SignPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<Wishlist />} />
          <Route path="Search/:query" element={<SearchResult />} />
          <Route element={<ShopInterface />} path="/shop">
            <Route index path=":pageTitle" element={<Shop />} />
          </Route>
          <Route path="/product/:id/:slug" element={<ProductPage />} />
          <Route path="/elements">
            <Route path="fAQ" element={<FAQ />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<ContactUs />} />
          </Route>
          <Route element={<ShopInterface />} path="/categories">
            <Route index path=":pageTitle" element={<Shop />} />
          </Route>
          <Route element={<CheckoutPage />} path="/checkout" />
        </Route>

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
};

export default App;
