// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Service from "./pages/Service";
import Header from "./components/common/Header";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6C5CE7",
    },
    background: {
      default: "#f9f9f9",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Service />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;