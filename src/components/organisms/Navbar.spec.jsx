import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "../../../components/organisms/Navbar.jsx";

describe("NavBar Organism", () => {
  it("1. Muestra la marca Nexus en la barra", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(screen.getByText("Nexus")).toBeTruthy();
  });

  it("2. Contiene el link a Productos con href correcto", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(screen.getByText("Catálogo").getAttribute("href")).toBe("/products");
  });

  it("3. Contiene el link al Administrador", () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    expect(screen.getByText("Administrador").getAttribute("href")).toBe(
      "/admin",
    );
  });
});
