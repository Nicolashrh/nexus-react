import { Container, Card } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import initialProducts from "../data/Products.jsx";
import Image from "../components/atoms/Image.jsx";
import Text from "../components/atoms/Text.jsx";
import Button from "../components/atoms/Button.jsx";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  let products = [];
  try {
    const saved = localStorage.getItem("nexus_games");
    const parsed = saved ? JSON.parse(saved) : [];
    products =
      Array.isArray(parsed) && parsed.length > 0 ? parsed : initialProducts;
  } catch {
    products = initialProducts;
  }

  const product = products.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <Container className="my-5 text-center">
        <Text variant="h2" className="text-danger mb-3">
          Producto no encontrado
        </Text>
        <Button variant="secondary" onClick={() => navigate("/products")}>
          ← Volver al catálogo
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Button
        variant="outline-secondary"
        className="mb-4"
        onClick={() => navigate("/products")}
      >
        ← Volver al catálogo
      </Button>
      <Card className="p-4 shadow-sm border-0 bg-dark text-white">
        <div className="row g-4 align-items-center">
          <div className="col-md-6 text-center">
            <Image
              src={product.image}
              alt={product.name}
              className="img-fluid rounded"
              style={{ maxHeight: "420px", width: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.src =
                  "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600";
              }}
            />
          </div>
          <div className="col-md-6">
            <Text variant="h2" className="fw-bold">
              {product.name}
            </Text>
            <Text variant="p" className="text-secondary fs-5 mt-3">
              {product.description}
            </Text>
            <Text variant="h3" className="text-success fw-bold my-4">
              ${Number(product.price || 0).toLocaleString("es-CL")} CLP
            </Text>
            <Button
              variant="primary"
              size="lg"
              className="w-100"
              onClick={() =>
                alert(`¡Añadiste "${product.name}" al carrito con éxito!`)
              }
            >
              Comprar Ahora
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default ProductDetail;
