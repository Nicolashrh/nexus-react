import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PagoError() {
  const navigate = useNavigate();

  return (
    <Container
      className="my-5 text-center text-white"
      style={{ maxWidth: "600px" }}
    >
      <Card className="p-4 bg-dark text-white border-danger shadow">
        <h2 className="text-danger fw-bold mb-3">
          ❌ No se pudo realizar el pago
        </h2>
        <p className="text-secondary mb-4">
          Hubo un problema al procesar la transacción o la entidad bancaria
          rechazó el cargo.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <Button
            variant="success"
            size="lg"
            onClick={() => navigate("/checkout")}
          >
            Volver a realizar el pago
          </Button>
          <Button
            variant="outline-light"
            size="lg"
            onClick={() => navigate("/products")}
          >
            Volver al catálogo
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default PagoError;
