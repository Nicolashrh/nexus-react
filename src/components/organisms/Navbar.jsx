import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="border-bottom border-secondary py-3"
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-uppercase fs-4 text-primary"
        >
          Nexus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nexus-nav" />
        <Navbar.Collapse id="nexus-nav">
          <Nav className="ms-auto d-flex flex-row gap-4 align-items-center mt-3 mt-lg-0">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Catálogo
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin"
              className="btn btn-outline-primary btn-sm text-light px-3"
            >
              Administrador
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
