import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Image from "../atoms/Image.jsx";
import Button from "../atoms/Button.jsx";
import CardBody from "../molecules/CardBody.jsx";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <Card
      style={{ width: "18rem" }}
      className="m-2 shadow-sm border-0 h-100 bg-dark text-white"
    >
      <Image
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
        onError={(e) => {
          e.target.src =
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600";
        }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <CardBody
            title={product.name}
            description={product.description}
            price={product.price}
          />
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
