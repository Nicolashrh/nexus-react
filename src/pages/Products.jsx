import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import initialProducts from "../data/Products.jsx";

function Products() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const getBaseList = () => {
    if (Array.isArray(initialProducts)) return initialProducts;
    if (initialProducts && Array.isArray(initialProducts.default))
      return initialProducts.default;
    return [];
  };

  const [games, setGames] = useState(() => {
    try {
      const saved = localStorage.getItem("nexus_games");
      const parsed = saved ? JSON.parse(saved) : [];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
      return getBaseList();
    } catch {
      return getBaseList();
    }
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nexus_games");
      const parsed = saved ? JSON.parse(saved) : [];
      if (!Array.isArray(parsed) || parsed.length === 0) {
        const base = getBaseList();
        if (base.length > 0) {
          localStorage.setItem("nexus_games", JSON.stringify(base));
          setGames(base);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const safeGames = Array.isArray(games) ? games : [];
  const filteredGames = safeGames.filter((game) =>
    game && game.name
      ? game.name.toLowerCase().includes(searchTerm.toLowerCase())
      : false,
  );

  return (
    <Container className="my-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 gap-3 border-bottom pb-3">
        <h1 className="fw-bold m-0 text-dark">Catalogo completo disponible</h1>
        <input
          type="text"
          className="form-control"
          style={{ maxWidth: "300px" }}
          placeholder="Buscar videojuego..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

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
              style={{ width: "22rem", borderColor: "#444" }}
              className="shadow-sm border rounded-0 h-100 bg-white text-dark"
            >
              <Card.Img
                variant="top"
                src={game.localImage || game.image}
                alt={game.name}
                style={{ height: "320px", objectFit: "cover" }}
                onError={(e) => {
                  e.target.src = game.image;
                }}
              />
              <Card.Body className="p-4 d-flex flex-column justify-content-between">
                <div>
                  <h4
                    className="fw-bold text-uppercase mb-3"
                    style={{ fontSize: "1.25rem", letterSpacing: "0.5px" }}
                  >
                    {game.name}
                  </h4>
                  <p
                    className="text-muted mb-4"
                    style={{ minHeight: "48px", fontSize: "0.95rem" }}
                  >
                    {game.description}
                  </p>
                  <h5 className="fw-bold mb-3" style={{ fontSize: "1.2rem" }}>
                    ${Number(game.price || 0).toLocaleString("es-CL")}
                  </h5>
                </div>
                <Button
                  variant="dark"
                  className="w-100 rounded-0 py-2"
                  onClick={() => navigate(`/products/${game.id}`)}
                >
                  Ver Detalles
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
