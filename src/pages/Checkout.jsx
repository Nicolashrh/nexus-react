import React, { useState } from "react";
import {
  Container,
  Card,
  Form,
  Button,
  Table,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Checkout({ cartItems = [], onClearCart }) {
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (acc, item) => acc + (Number(item.price) || 0),
    0,
  );

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    calle: "",
    depto: "",
    region: "Región Metropolitana de Santiago",
    comuna: "Cerrillos",
    indicaciones: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePay = (e) => {
    e.preventDefault();
    if (!formData.nombre || !formData.correo || !formData.calle) {
      alert("Por favor completa los campos requeridos");
      return;
    }

    const orderData = {
      orderId: "ORDER" + Math.floor(100000 + Math.random() * 900000),
      cliente: formData,
      items: cartItems,
      total: total,
      fecha: new Date().toLocaleDateString("es-CL"),
    };

    localStorage.setItem("nexus_last_order", JSON.stringify(orderData));

    // Simulación: si el nombre es "error", envía a fallo; si no, éxito
    if (formData.nombre.toLowerCase().includes("error")) {
      navigate("/pago-error");
    } else {
      onClearCart();
      navigate("/pago-exito");
    }
  };

  if (cartItems.length === 0) {
    return (
      <Container className="my-5 text-center text-white">
        <h2>No tienes productos en el carrito para pagar.</h2>
        <Button
          variant="primary"
          className="mt-3"
          onClick={() => navigate("/products")}
        >
          Ir al Catálogo
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5 text-white" style={{ maxWidth: "850px" }}>
      <Card className="p-4 bg-dark text-white border-secondary mb-4 shadow">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="fw-bold m-0">Carrito de compra</h3>
          <span className="badge bg-primary fs-5">
            Total a pagar: ${total.toLocaleString("es-CL")}
          </span>
        </div>
        <p className="text-secondary small">
          Completa la siguiente información para procesar tu orden
        </p>

        <Table
          striped
          bordered
          hover
          responsive
          variant="dark"
          className="align-middle"
        >
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>${Number(item.price).toLocaleString("es-CL")}</td>
                <td>1</td>
                <td>${Number(item.price).toLocaleString("es-CL")}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>

      <Card className="p-4 bg-dark text-white border-secondary shadow">
        <Form onSubmit={handlePay}>
          <h4 className="mb-3 text-info">Información del cliente</h4>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Nombre *</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={6}>
              <Form.Label>Apellidos</Form.Label>
              <Form.Control
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
              />
            </Col>
          </Row>
          <Form.Group className="mb-4">
            <Form.Label>Correo *</Form.Label>
            <Form.Control
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <h4 className="mb-3 text-info">
            Dirección de entrega de los productos
          </h4>
          <Row className="mb-3">
            <Col md={8}>
              <Form.Label>Calle *</Form.Label>
              <Form.Control
                type="text"
                name="calle"
                value={formData.calle}
                onChange={handleChange}
                required
              />
            </Col>
            <Col md={4}>
              <Form.Label>Departamento (opcional)</Form.Label>
              <Form.Control
                type="text"
                name="depto"
                value={formData.depto}
                onChange={handleChange}
                placeholder="Depto 603"
              />
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Label>Región</Form.Label>
              <Form.Select
                name="region"
                value={formData.region}
                onChange={handleChange}
              >
                <option>Región Metropolitana de Santiago</option>
                <option>Región de Valparaíso</option>
                <option>Región del Biobío</option>
              </Form.Select>
            </Col>
            <Col md={6}>
              <Form.Label>Comuna</Form.Label>
              <Form.Select
                name="comuna"
                value={formData.comuna}
                onChange={handleChange}
              >
                <option>Cerrillos</option>
                <option>Santiago Centro</option>
                <option>Lo Espejo</option>
                <option>Providencia</option>
                <option>Maipú</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Group className="mb-4">
            <Form.Label>Indicaciones para la entrega (opcional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="indicaciones"
              value={formData.indicaciones}
              onChange={handleChange}
              placeholder="Ej: Dejar en conserjería"
            />
          </Form.Group>

          <Button
            variant="success"
            size="lg"
            type="submit"
            className="w-100 py-3 fw-bold"
          >
            Pagar ahora ${total.toLocaleString("es-CL")}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Checkout;
