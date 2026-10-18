import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/templates/MainLayout.jsx";
import NavBar from "./components/organisms/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  return (
    <MainLayout
      header={<NavBar />}
      content={
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      }
      footer={
        <p className="mb-0 text-secondary">
          © 2026 Nexus Store - Proyecto React
        </p>
      }
    />
  );
}

export default App;
