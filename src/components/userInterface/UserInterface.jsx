import React from "react";
import Header from "../header/Header";
import Nav from "../header/Nav";
import NavBar from "../header/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";

const UserInterface = () => {
  return (
    <>
      <Nav />
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default UserInterface;
