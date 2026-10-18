import { Badge } from "react-bootstrap";
import Text from "../atoms/Text.jsx";

function PriceBadge({ price, isOffer }) {
  return (
    <div className="d-flex align-items-center gap-2">
      <Text variant="span" className="fw-bold text-success">
        ${Number(price || 0).toLocaleString("es-CL")}
      </Text>
      {isOffer && <Badge bg="danger">OFERTA</Badge>}
    </div>
  );
}

export default PriceBadge;
