import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard.jsx";

function ProductList({ products = [] }) {
  if (products.length === 0) {
    return (
      <div className="alert alert-warning text-center w-100 my-4">
        No se encontraron videojuegos en el catálogo.
      </div>
    );
  }

  return (
    <Row className="g-4">
      {products.map((product) => (
        <Col
          key={product.id}
          xs={12}
          sm={6}
          md={4}
          className="d-flex justify-content-center"
        >
          <ProductCard product={product} />
        </Col>
      ))}
    </Row>
  );
}

export default ProductList;
