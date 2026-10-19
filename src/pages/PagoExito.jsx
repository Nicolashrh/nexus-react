import React from "react";
import { Container, Card, Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PagoExito() {
  const navigate = useNavigate();
  const rawOrder = localStorage.getItem("nexus_last_order");
  const order = rawOrder ? JSON.parse(rawOrder) : null;

  if (!order) {
    return (
      <Container className="my-5 text-center text-white">
        <h2>No hay órdenes registradas.</h2>
        <Button variant="primary" onClick={() => navigate("/products")}>
          Ir al Catálogo
        </Button>
      </Container>
    );
  }

  return (
    <Container className="my-5 text-white" style={{ maxWidth: "850px" }}>
      <Card className="p-4 bg-dark text-white border-success mb-4 shadow">
        <div className="alert alert-success d-flex justify-content-between align-items-center">
          <div>
            <h4 className="alert-heading fw-bold m-0">
              ✔ Se ha realizado la compra con éxito!
            </h4>
            <p className="m-0 small">
              Código de seguimiento: <strong>{order.orderId}</strong>
            </p>
          </div>
          <span className="badge bg-success fs-6">{order.fecha}</span>
        </div>

        <h5 className="text-info mt-3">Detalle del cliente y entrega</h5>
        <p className="text-secondary mb-1">
          <strong>Cliente:</strong> {order.cliente.nombre}{" "}
          {order.cliente.apellidos} ({order.cliente.correo})
        </p>
        <p className="text-secondary mb-1">
          <strong>Dirección:</strong> {order.cliente.calle}{" "}
          {order.cliente.depto && `- ${order.cliente.depto}`},{" "}
          {order.cliente.comuna}, {order.cliente.region}
        </p>
        {order.cliente.indicaciones && (
          <p className="text-secondary small">
            <strong>Indicaciones:</strong> {order.cliente.indicaciones}
          </p>
        )}

        <h5 className="text-info mt-4">Videojuegos adquiridos</h5>
        <Table
          striped
          bordered
          hover
          responsive
          variant="dark"
          className="align-middle mt-2"
        >
          <thead>
            <tr>
              <th>Juego</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name}</td>
                <td>${Number(item.price).toLocaleString("es-CL")}</td>
                <td>1</td>
                <td>${Number(item.price).toLocaleString("es-CL")}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className="text-end mt-3 border-top border-secondary pt-3">
          <h4 className="fw-bold text-success">
            Total pagado: ${Number(order.total).toLocaleString("es-CL")} CLP
          </h4>
        </div>

        <Button
          variant="primary"
          className="mt-4 w-100"
          onClick={() => navigate("/products")}
        >
          Seguir Comprando
        </Button>
      </Card>
    </Container>
  );
}

export default PagoExito;
