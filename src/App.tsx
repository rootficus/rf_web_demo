import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Layout from "./layout/Layout";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import Hire from "./pages/Hire";
import NotFound from "./pages/NotFound";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#6C5CE7" },
    background: { default: "#f9f9f9" },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h3: { fontWeight: 700 },
    h5: { fontWeight: 600 },
    body1: { lineHeight: 1.6 },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Service /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
          <Route path="/hire" element={<Layout><Hire /></Layout>} />
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;




































