import { Container, Row, Col, Card } from "react-bootstrap";

function DetailLayout({ imageSlot, infoSlot, backButtonSlot }) {
  return (
    <Container className="my-5">
      <div className="mb-3">{backButtonSlot}</div>
      <Card className="p-4 shadow-sm border-0 bg-dark text-white">
        <Row className="align-items-center">
          <Col md={6} className="d-flex justify-content-center mb-4 mb-md-0">
            {imageSlot}
          </Col>
          <Col md={6}>{infoSlot}</Col>
        </Row>
      </Card>
    </Container>
  );
}

export default DetailLayout;
