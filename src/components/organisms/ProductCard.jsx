import { Card } from "react-bootstrap";
import Image from "../atoms/Image";
import Button from "../atoms/Button";
import CardBody from "../molecules/CardBody";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }} className="m-2 shadow-sm border-0 h-100">
      <Image
        src={product.image}
        alt={product.name}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
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
