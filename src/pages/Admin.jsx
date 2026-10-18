import React, { useState, useEffect } from "react";
import { Container, Form, Table, Button, Card } from "react-bootstrap";
import initialProducts from "../data/Products.jsx";
import Text from "../components/atoms/Text.jsx";

function Admin() {
  const [games, setGames] = useState(() => {
    try {
      const saved = localStorage.getItem("nexus_games");
      const parsed = saved ? JSON.parse(saved) : [];
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
      return Array.isArray(initialProducts) ? initialProducts : [];
    } catch {
      return Array.isArray(initialProducts) ? initialProducts : [];
    }
  });

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    localStorage.setItem("nexus_games", JSON.stringify(games));
  }, [games]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddGame = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.price) return;

    const newGame = {
      id: Date.now(),
      name: formData.name.trim(),
      description: formData.description.trim() || "Sin descripción",
      price: parseInt(formData.price, 10) || 0,
      image:
        formData.image.trim() ||
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600",
    };

    setGames([newGame, ...games]);
    setFormData({ name: "", description: "", price: "", image: "" });
  };

  const handleDelete = (id) => {
    setGames(games.filter((game) => game.id !== id));
  };

  const handleResetCatalog = () => {
    const defaultList = Array.isArray(initialProducts) ? initialProducts : [];
    setGames(defaultList);
    localStorage.setItem("nexus_games", JSON.stringify(defaultList));
  };

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
        <Text variant="h2" className="fw-bold text-primary m-0">
          Panel de Administración - Nexus
        </Text>
        <Button
          variant="outline-warning"
          size="sm"
          onClick={handleResetCatalog}
        >
          Restablecer Catálogo Base
        </Button>
      </div>

      <Card className="p-4 mb-5 shadow-sm border-0 bg-dark text-white">
        <h4 className="mb-3">Registrar Nuevo Videojuego</h4>
        <Form onSubmit={handleAddGame}>
          <Form.Group className="mb-3">
            <Form.Label>Título del Videojuego</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Ej: Bloodborne 2"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="description"
              placeholder="Descripción del juego..."
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Precio (CLP)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              placeholder="Ej: 29990"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>URL de Imagen de Portada</Form.Label>
            <Form.Control
              type="text"
              name="image"
              placeholder="https://..."
              value={formData.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Guardar Videojuego
          </Button>
        </Form>
      </Card>

      <h4 className="mb-3 text-light">
        Inventario Registrado ({games.length})
      </h4>
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
            <th style={{ width: "15%" }}>ID</th>
            <th style={{ width: "45%" }}>Título</th>
            <th style={{ width: "25%" }}>Precio</th>
            <th style={{ width: "15%" }} className="text-center">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {games.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center text-muted py-4">
                No hay juegos en la base de datos.
              </td>
            </tr>
          ) : (
            games.map((game) => (
              <tr key={game.id}>
                <td className="text-muted small">{game.id}</td>
                <td className="fw-semibold">{game.name}</td>
                <td className="text-success">
                  ${Number(game.price || 0).toLocaleString("es-CL")}
                </td>
                <td className="text-center">
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(game.id)}
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
}

export default Admin;
