import React from "react";
import { Modal, Button, Table } from "react-bootstrap";

function CartModal({
  show,
  handleClose,
  cartItems,
  onRemoveItem,
  onClearCart,
  onCheckout,
}) {
  const total = cartItems.reduce(
    (acc, item) => acc + (Number(item.price) || 0),
    0,
  );

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      contentClassName="bg-dark text-white border-secondary"
    >
      <Modal.Header closeButton closeVariant="white">
        <Modal.Title className="fw-bold">🛒 Tu Carrito de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p className="text-center text-secondary my-4">
            El carrito de compras está actualmente vacío.
          </p>
        ) : (
          <>
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
                  <th>Juego</th>
                  <th>Precio</th>
                  <th className="text-center">Quitar</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <tr key={`${item.id}-${index}`}>
                    <td className="fw-semibold">{item.name}</td>
                    <td className="text-success">
                      ${Number(item.price).toLocaleString("es-CL")}
                    </td>
                    <td className="text-center">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => onRemoveItem(index)}
                      >
                        ✕
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className="d-flex justify-content-between align-items-center mt-3 pt-2 border-top border-secondary">
              <span className="fs-5 fw-bold">Total a pagar:</span>
              <span className="fs-4 fw-bold text-success">
                ${total.toLocaleString("es-CL")} CLP
              </span>
            </div>
          </>
        )}
      </Modal.Body>
      <Modal.Footer className="border-secondary">
        {cartItems.length > 0 && (
          <Button variant="outline-danger" onClick={onClearCart}>
            Vaciar Carrito
          </Button>
        )}
        <Button variant="secondary" onClick={handleClose}>
          Seguir viendo
        </Button>
        {cartItems.length > 0 && (
          <Button variant="success" onClick={onCheckout}>
            Ir a Pagar
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
