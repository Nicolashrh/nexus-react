import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Nosotros() {
  return (
    <Container className="my-5 text-white">
      <Row className="justify-content-center text-center mb-5">
        <Col md={8}>
          <h1 className="display-4 fw-bold text-primary mb-3">Sobre Nexus</h1>
          <p className="lead text-secondary">
            Somos la plataforma chilena líder en distribución y catálogo de
            videojuegos para PC, PlayStation, Xbox y Nintendo Switch.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        <Col md={4}>
          <Card className="p-4 bg-dark text-white border-secondary h-100 shadow-sm text-center">
            <h3 className="text-info mb-3">🎮 Pasión Gamer</h3>
            <p className="text-secondary">
              Seleccionamos los mejores títulos de la industria, desde los
              últimos triples A hasta joyas independientes destacadas.
            </p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 bg-dark text-white border-secondary h-100 shadow-sm text-center">
            <h3 className="text-success mb-3">⚡ Entrega Rápida</h3>
            <p className="text-secondary">
              Disponibilidad inmediata y gestión centralizada para que disfrutes
              de tus videojuegos favoritos sin esperas.
            </p>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="p-4 bg-dark text-white border-secondary h-100 shadow-sm text-center">
            <h3 className="text-warning mb-3">🔒 Confianza</h3>
            <p className="text-secondary">
              Atención personalizada y soporte continuo para todos nuestros
              clientes y miembros de la comunidad Nexus.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Nosotros;
