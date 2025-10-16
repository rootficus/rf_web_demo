import { Route, Routes } from "react-router-dom";
import "./style/App.scss";
import Home from "./pages";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;