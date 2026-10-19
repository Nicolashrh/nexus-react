import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/atoms/Button.jsx";
import SearchBar from "../components/molecules/SearchBar.jsx";
import ProductList from "../components/organisms/ProductList.jsx";

describe("Evaluación 2 - Rúbrica de Pruebas Unitarias Jasmine", () => {
  // 1. Pruebas de Renderizado correcto (Pág. 11 de la rúbrica)
  it("1. Renderizado correcto: renderiza todos los elementos del conjunto de datos", () => {
    const fakeGames = [
      {
        id: 1,
        name: "Elden Ring",
        description: "RPG",
        price: 25000,
        image: "x.jpg",
      },
      {
        id: 2,
        name: "Bloodborne",
        description: "Action",
        price: 25000,
        image: "y.jpg",
      },
    ];
    render(<ProductList products={fakeGames} />);
    expect(screen.getByText("Elden Ring")).toBeTruthy();
    expect(screen.getByText("Bloodborne")).toBeTruthy();
  });

  // 2. Renderizado condicional (Pág. 11 de la rúbrica)
  it("2. Renderizado condicional: muestra mensaje de advertencia solo si la lista está vacía", () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText(/no se encontraron videojuegos/i)).toBeTruthy();
  });

  // 3. Pruebas de propiedades (props) (Pág. 11 de la rúbrica)
  it("3. Props: el botón recibe la etiqueta de texto y la función de evento onClick", () => {
    const handleClick = jasmine.createSpy("onClick");
    render(<Button onClick={handleClick}>Comprar Juego</Button>);
    const btn = screen.getByText("Comprar Juego");
    expect(btn).toBeTruthy();
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });

  // 4. Pruebas de Estado (state) y Eventos (Pág. 11 de la rúbrica)
  it("4. State y Eventos: el estado del formulario cambia al escribir y dispara la búsqueda al hacer clic", () => {
    const handleSearch = jasmine.createSpy("onSearch");
    render(<SearchBar onSearch={handleSearch} placeholder="Buscar..." />);
    const input = screen.getByPlaceholderText("Buscar...");

    // Simula cambio de estado
    fireEvent.change(input, { target: { value: "Zelda" } });
    expect(input.value).toBe("Zelda");

    // Simula evento de clic
    fireEvent.click(screen.getByText("Buscar"));
    expect(handleSearch).toHaveBeenCalledWith("Zelda");
  });
});
