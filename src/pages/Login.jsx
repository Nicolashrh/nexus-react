import React, { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) return;
    alert(`¡Bienvenido de vuelta! Sesión iniciada como: ${email}`);
    navigate("/");
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card
        style={{ maxWidth: "420px", width: "100%" }}
        className="p-4 bg-dark text-white border-secondary shadow"
      >
        <h2 className="text-center fw-bold text-primary mb-4">
          Iniciar Sesión
        </h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 py-2 fw-semibold"
          >
            Ingresar
          </Button>
        </Form>
        <div className="text-center mt-3 border-top border-secondary pt-3">
          <small className="text-secondary">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="text-info text-decoration-none">
              Regístrate aquí
            </Link>
          </small>
        </div>
      </Card>
    </Container>
  );
}

export default Login;
