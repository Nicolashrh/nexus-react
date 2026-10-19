import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import initialProducts from "../data/Products.jsx";

function Categorias({ onAddToCart }) {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const categories = [
    "Todas",
    "Soulslike",
    "Acción",
    "Survival Horror",
    "Aventura",
    "Mundo Abierto",
  ];

  const filtered =
    selectedCategory === "Todas"
      ? initialProducts
      : initialProducts.filter((p) =>
          p.category?.toLowerCase().includes(selectedCategory.toLowerCase()),
        );

  return (
    <Container className="my-5 text-white">
      <h1 className="fw-bold text-primary mb-4">Categorías de Videojuegos</h1>

      {/* Botones de filtro de categorías */}
      <div className="d-flex flex-wrap gap-2 mb-5">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? "primary" : "outline-light"}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <Row className="g-4">
        {filtered.map((game) => (
          <Col
            key={game.id}
            xs={12}
            sm={6}
            md={4}
            className="d-flex justify-content-center"
          >
            <Card
              style={{ width: "22rem" }}
              className="shadow-sm border rounded-0 h-100 bg-white text-dark"
            >
              <Card.Img
                variant="top"
                src={game.localImage || game.image}
                alt={game.name}
                style={{ height: "300px", objectFit: "cover" }}
                onError={(e) => {
                  e.target.src =
                    "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600";
                }}
              />
              <Card.Body className="p-4 d-flex flex-column justify-content-between">
                <div>
                  <Badge bg="info" className="mb-2 text-dark">
                    {game.category || "General"}
                  </Badge>
                  <h4 className="fw-bold text-uppercase">{game.name}</h4>
                  <p className="text-muted small">{game.description}</p>
                  <h5 className="fw-bold">
                    ${Number(game.price).toLocaleString("es-CL")}
                  </h5>
                </div>
                <div className="d-flex gap-2 mt-3">
                  <Button
                    variant="outline-dark"
                    className="w-50 rounded-0"
                    onClick={() => navigate(`/products/${game.id}`)}
                  >
                    Detalles
                  </Button>
                  <Button
                    variant="dark"
                    className="w-50 rounded-0"
                    onClick={() => onAddToCart && onAddToCart(game)}
                  >
                    + Carrito
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Categorias;
