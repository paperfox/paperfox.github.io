import React from "react";
import { Outlet } from "react-router-dom";
import PageNav from "./Navbar";

const Layout = () => {
  return (
    <>
      <PageNav />
      <Outlet />
    </>
  );
};

export default Layout;