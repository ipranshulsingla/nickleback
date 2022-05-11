import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";

export default function AppLayout({ children }) {
  return (
    <div>
      <Header />
      <SideBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
