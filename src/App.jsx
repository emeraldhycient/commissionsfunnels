import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/merchants/dashboard";
import DispatchersZone from "./pages/merchants/dispatchersZone";
import Marketplace from "./pages/merchants/marketplace";
import Sales from "./pages/merchants/sales";
import Transactions from "./pages/merchants/transactions";
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
        <Route path="/merchant/sales" element={<Sales />} />
        <Route path="/merchant/transactions" element={<Transactions />} />
        <Route path="/merchant/dispatcherszone" element={<DispatchersZone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
