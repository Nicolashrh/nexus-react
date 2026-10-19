import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Admin from "./pages/Admin.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Contacto from "./pages/Contacto.jsx";

function App() {
  // Estado del carrito sincronizado con localStorage
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
          alert(`Tienes ${cart.length} productos en tu carrito.`)
        }
      />

      {/* Contenido principal enrutado */}
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
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {/* Pie de página */}
      <footer className="py-4 bg-dark text-white text-center mt-auto border-top border-secondary">
        <p className="mb-0 text-secondary">
          © 2026 Nexus Store - Proyecto React
        </p>
      </footer>
    </div>
  );
}

export default App;
