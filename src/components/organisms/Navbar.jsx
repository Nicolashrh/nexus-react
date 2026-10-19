import React from "react";
import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar({ cartCount = 0, onOpenCart }) {
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
          <Nav className="me-auto d-flex gap-3 align-items-center mt-3 mt-lg-0">
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <Nav.Link as={Link} to="/products">
              Catálogo
            </Nav.Link>
            <Nav.Link as={Link} to="/nosotros">
              Nosotros
            </Nav.Link>
          </Nav>
          <Nav className="d-flex gap-2 align-items-center mt-3 mt-lg-0">
            {/* Botón interactivo de Carrito */}
            <Button
              variant="outline-info"
              size="sm"
              onClick={onOpenCart}
              className="position-relative me-2"
            >
              🛒 Carrito
              {cartCount > 0 && (
                <Badge bg="danger" pill className="ms-2">
                  {cartCount}
                </Badge>
              )}
            </Button>
            <Nav.Link
              as={Link}
              to="/login"
              className="btn btn-outline-light btn-sm text-light px-3"
            >
              Iniciar Sesión
            </Nav.Link>import React from "react";
            import { Navbar, Nav, Container, Badge, Button } from "react-bootstrap";
            import { Link } from "react-router-dom";

            function NavBar({ cartCount = 0, onOpenCart }) {
              return (
                <Navbar
                  bg="dark"
                  variant="dark"
                  expand="lg"
                  className="border-bottom border-secondary py-3 sticky-top shadow-sm"
                >
                  <Container>
                    {/* Brand / Logo */}
                    <Navbar.Brand
                      as={Link}
                      to="/"
                      className="fw-bold text-uppercase fs-4 text-primary d-flex align-items-center gap-2"
                    >
                      <span>🎮</span> NEXUS
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="nexus-nav" />

                    <Navbar.Collapse id="nexus-nav">
                      {/* Enlaces principales según la pauta DSY1104 */}
                      <Nav className="me-auto d-flex gap-2 gap-lg-3 align-items-lg-center mt-3 mt-lg-0">
                        <Nav.Link as={Link} to="/">
                          Inicio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/products">
                          Catálogo
                        </Nav.Link>
                        <Nav.Link as={Link} to="/categorias">
                          Categorías
                        </Nav.Link>
                        <Nav.Link as={Link} to="/nosotros">
                          Nosotros
                        </Nav.Link>
                      </Nav>

                      {/* Acciones de usuario y Carrito de compras */}
                      <Nav className="d-flex flex-row flex-wrap gap-2 align-items-center mt-3 mt-lg-0">
                        {/* Botón interactivo de Carrito */}
                        <Button
                          variant="outline-info"
                          size="sm"
                          onClick={onOpenCart}
                          className="position-relative d-flex align-items-center"
                        >
                          🛒 Carrito
                          {cartCount > 0 && (
                            <Badge bg="danger" pill className="ms-2">
                              {cartCount}
                            </Badge>
                          )}
                        </Button>

                        <Nav.Link
                          as={Link}
                          to="/login"
                          className="btn btn-outline-light btn-sm text-light px-3"
                        >
                          Iniciar Sesión
                        </Nav.Link>

                        <Nav.Link
                          as={Link}
                          to="/register"
                          className="btn btn-primary btn-sm text-light px-3"
                        >
                          Registrarse
                        </Nav.Link>

                        <Nav.Link
                          as={Link}
                          to="/admin"
                          className="btn btn-outline-warning btn-sm text-warning px-3 ms-lg-2"
                        >
                          Admin
                        </Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              );
            }

            export default NavBar;
            <Nav.Link
              as={Link}
              to="/register"
              className="btn btn-primary btn-sm text-light px-3"
            >
              Registrarse
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/admin"
              className="btn btn-outline-warning btn-sm text-warning px-3 ms-lg-2"
            >
              Admin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
