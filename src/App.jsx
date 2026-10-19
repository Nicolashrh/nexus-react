import { Routes, Route, useNavigate } from "react-router-dom";
import NavBar from "./components/organisms/Navbar.jsx";
import CartModal from "./components/organisms/CartModal.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Categorias from "./pages/Categorias.jsx";
import Nosotros from "./pages/Nosotros.jsx";
import Contacto from "./pages/Contacto.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Checkout from "./pages/Checkout.jsx";
import PagoExito from "./pages/PagoExito.jsx";
import PagoError from "./pages/PagoError.jsx";
import Admin from "./pages/Admin.jsx";

function App() {
  const navigate = useNavigate();

  // Estado del carrito sincronizado con localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem("nexus_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("nexus_cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setShowCart(true); // Despliega el modal automáticamente al agregar
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleGoToCheckout = () => {
    setShowCart(false);
    navigate("/checkout");
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-dark text-light">
      {/* Barra de navegación superior */}
      <NavBar cartCount={cart.length} onOpenCart={() => setShowCart(true)} />

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
          <Route
            path="/categorias"
            element={<Categorias onAddToCart={handleAddToCart} />}
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/checkout"
            element={
              <Checkout cartItems={cart} onClearCart={handleClearCart} />
            }
          />
          <Route path="/pago-exito" element={<PagoExito />} />
          <Route path="/pago-error" element={<PagoError />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      {/* Modal interactivo de carrito */}
      <CartModal
        show={showCart}
        handleClose={() => setShowCart(false)}
        cartItems={cart}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
        onCheckout={handleGoToCheckout}
      />

      {/* Pie de página */}
      <footer className="py-4 bg-dark text-white text-center mt-auto border-top border-secondary">
        <p className="mb-0 text-secondary">
          © 2026 Nexus Store - Proyecto React (DSY1104)
        </p>
      </footer>
    </div>
  );
}

export default App;
