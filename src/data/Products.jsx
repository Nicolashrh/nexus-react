import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import initialProducts from "../data/Products.jsx";

function Products() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nexus_games");
      if (saved) {
        setGames(JSON.parse(saved));
      } else {
        const defaultList = Array.isArray(initialProducts)
          ? initialProducts
          : [];
        setGames(defaultList);
        localStorage.setItem("nexus_games", JSON.stringify(defaultList));
      }
    } catch {
      setGames(Array.isArray(initialProducts) ? initialProducts : []);
    }
  }, []);

  const filteredGames = games.filter((game) =>
    game.name?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Container className="my-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
        <h1 className="fw-bold m-0 text-primary">Catálogo de Juegos</h1>
        <input
          type="text"
          className="form-control"
          style={{ maxWidth: "300px" }}
          placeholder="Buscar videojuego..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredGames.length === 0 ? (
        <div className="alert alert-warning text-center">
          No hay videojuegos disponibles en el catálogo.
        </div>
      ) : (
        <Row className="g-4">
          {filteredGames.map((game) => (
            <Col
              key={game.id}
              xs={12}
              sm={6}
              md={4}
              className="d-flex justify-content-center"
            >
              <Card
                style={{ width: "18rem" }}
                className="shadow-sm border-0 h-100 bg-dark text-white"
              >
                <Card.Img
                  variant="top"
                  src={game.image}
                  alt={game.name}
                  style={{ height: "180px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600";
                  }}
                />
                <Card.Body className="d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="fw-bold">{game.name}</Card.Title>
                    <Card.Text className="text-secondary small">
                      {game.description}
                    </Card.Text>
                    <h5 className="fw-bold text-success">
                      ${Number(game.price || 0).toLocaleString("es-CL")} CLP
                    </h5>
                  </div>
                  <Button
                    variant="primary"
                    className="mt-3 w-100"
                    onClick={() => navigate(`/products/${game.id}`)}
                  >
                    Ver detalles
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default Products;
