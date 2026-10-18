import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../../components/atoms/Button.jsx";

describe("Button Atom", () => {
  it("1. Renderiza el botón con el texto correspondiente", () => {
    render(<Button>Comprar</Button>);
    expect(screen.getByText("Comprar")).toBeTruthy();
  });

  it("2. Aplica las clases de Bootstrap según variante", () => {
    render(<Button variant="danger">Eliminar</Button>);
    expect(screen.getByText("Eliminar")).toHaveClass("btn-danger");
  });

  it("3. Ejecuta el callback onClick al hacer clic", () => {
    const handleClick = jasmine.createSpy("onClick");
    render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalled();
  });
});
