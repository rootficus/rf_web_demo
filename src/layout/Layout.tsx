import React from "react";
import { Box } from "@mui/material";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main" sx={{ pt: "120px" }}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;