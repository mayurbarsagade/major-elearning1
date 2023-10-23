import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box bgcolor={"#fccf"}>
      <Header />

      <Outlet />

      <Footer />
    </Box>
  );
};

export default Layout;
