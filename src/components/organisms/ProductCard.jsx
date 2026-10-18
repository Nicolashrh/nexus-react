import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  // Si no llega un producto válido, no renderiza nada y evita que la app colapse
  if (!product) return null;

  return (
    <Card
      style={{ width: "18rem" }}
      className="m-2 shadow-sm border-0 h-100 bg-dark text-white"
    >
      <Card.Img
        variant="top"
        src={
          product.image ||
          "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600"
        }
        alt={product.name || "Juego"}
        style={{ height: "180px", objectFit: "cover" }}
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600";
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="fw-bold">
            {product.name || "Sin título"}
          </Card.Title>
          <Card.Text className="text-secondary small">
            {product.description || ""}
          </Card.Text>
          <h5 className="fw-bold text-success">
            ${Number(product.price || 0).toLocaleString("es-CL")} CLP
          </h5>
        </div>
        <Button
          variant="primary"
          className="mt-3 w-100"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          Ver detalles
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
