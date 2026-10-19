import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) return;
    alert(
      `¡Registro exitoso! Bienvenido a la comunidad Nexus, ${formData.name}.`,
    );
    navigate("/login");
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card
        style={{ maxWidth: "440px", width: "100%" }}
        className="p-4 bg-dark text-white border-secondary shadow"
      >
        <h2 className="text-center fw-bold text-primary mb-4">
          Registro de Usuario
        </h2>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="correo@ejemplo.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Crea una contraseña segura"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
            />
          </Form.Group>
          <Button
            variant="success"
            type="submit"
            className="w-100 py-2 fw-semibold"
          >
            Crear Cuenta
          </Button>
        </Form>
        <div className="text-center mt-3 border-top border-secondary pt-3">
          <small className="text-secondary">
            ¿Ya tienes cuenta?{" "}
            <Link to="/login" className="text-info text-decoration-none">
              Inicia sesión
            </Link>
          </small>
        </div>
      </Card>
    </Container>
  );
}

export default Register;
