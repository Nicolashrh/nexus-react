import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Button from "../components/atoms/Button.jsx";

function Home() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <Container className="py-4 text-center">
      <Row className="justify-content-center mb-5">
        <Col md={8}>
          <h1 className="display-4 fw-bold mb-3 text-primary">NEXUS STORE</h1>
          <p className="lead text-secondary mb-4">
            Catálogo de videojuegos de última generación migrado a React con
            arquitectura Atomic Design.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => navigate("/products")}
            >
              Ver Catálogo
            </Button>
            <Button
              variant="outline-light"
              size="lg"
              onClick={() => navigate("/admin")}
            >
              Panel Admin
            </Button>
          </div>
        </Col>
      </Row>

      <div className="p-4 rounded border border-secondary bg-dark text-white d-inline-block shadow-sm">
        <h4>Contador de Estado React</h4>
        <p className="text-secondary small">
          Demostración de interactividad con Hooks
        </p>
        <Button variant="info" onClick={() => setCount((prev) => prev + 1)}>
          Count is {count}
        </Button>
      </div>
    </Container>
  );
}

export default Home;
