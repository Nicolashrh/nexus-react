import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Categorias from "./pages/Categorias.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Contacto from "./pages/Contacto.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("nexus_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("nexus_cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(
      `¡"${product.name}" añadido al carrito! Total en carrito: ${cart.length + 1}`,
    );
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      {/* Barra de navegación superior */}
      <NavBar
        cartCount={cart.length}
        onOpenCart={() =>
          alert(`Tienes ${cart.length} juego(s) en tu carrito de compras.`)
        }
      />

      {/* Contenedor principal con todas las rutas */}
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetail onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/categorias"
            element={<Categorias onAddToCart={handleAddToCart} />}
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-dark text-white text-center mt-auto border-top border-secondary">
        <p className="mb-0 text-secondary">
          © 2026 Nexus Store - Proyecto React (DSY1104)
        </p>
      </footer>
    </div>
  );
}

export default App;
