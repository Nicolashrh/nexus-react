import { Container, Row, Col } from "react-bootstrap";

function StoreLayout({ title, filterSlot, productSlot }) {
  return (
    <Container className="my-4">
      <h1 className="mb-4">{title}</h1>
      <Row>
        <Col md={3} as="aside" aria-label="Filtros">
          {filterSlot}
        </Col>
        <Col md={9} as="section" aria-label="Productos">
          {productSlot}
        </Col>
      </Row>
    </Container>
  );
}

export default StoreLayout;
