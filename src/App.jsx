import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/merchants/dashboard";
import Marketplace from "./pages/merchants/marketplace";
import Vendor from "./pages/merchants/vendor";
import Signup from "./pages/signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/merchant/dashboard" element={<Dashboard />} />
        <Route path="/merchant/marketplace" element={<Marketplace />} />
        <Route path="/merchant/vendor" element={<Vendor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
