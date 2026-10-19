import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.email || !formData.mensaje) return;
    setEnviado(true);
    setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
  };

  return (
    <Container className="my-5 text-white" style={{ maxWidth: "800px" }}>
      <h1 className="fw-bold text-primary mb-3 text-center">Contáctanos</h1>
      <p className="text-secondary text-center mb-4">
        ¿Tienes dudas sobre algún juego, un pedido o disponibilidad de consolas?
        Envíanos un mensaje.
      </p>

      {enviado && (
        <Alert variant="success" onClose={() => setEnviado(false)} dismissible>
          ¡Gracias por contactarnos! Tu mensaje fue enviado con éxito. Te
          responderemos a la brevedad.
        </Alert>
      )}

      <Card className="p-4 bg-dark text-white border-secondary shadow">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Nombre Completo *</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <Form.Label>Correo Electrónico *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Asunto</Form.Label>
            <Form.Control
              type="text"
              name="asunto"
              placeholder="Consulta sobre compra, stock, etc."
              value={formData.asunto}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Mensaje *</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="mensaje"
              placeholder="Escribe tu mensaje aquí..."
              value={formData.mensaje}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            size="lg"
            className="w-100 fw-bold"
          >
            Enviar Mensaje
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Contacto;
