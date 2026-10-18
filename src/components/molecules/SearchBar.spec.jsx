import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../../../components/molecules/SearchBar.jsx";

describe("SearchBar Molecule", () => {
  it("1. Renderiza el input y botón de búsqueda", () => {
    render(<SearchBar onSearch={() => {}} placeholder="Buscar juego..." />);
    expect(screen.getByPlaceholderText("Buscar juego...")).toBeTruthy();
    expect(screen.getByText("Buscar")).toBeTruthy();
  });

  it("2. Modifica el texto ingresado en el input", () => {
    render(<SearchBar onSearch={() => {}} />);
    const input = screen.getByPlaceholderText("Buscar juego...");
    fireEvent.change(input, { target: { value: "Doom" } });
    expect(input.value).toBe("Doom");
  });

  it("3. Llama a onSearch al presionar el botón de búsqueda", () => {
    const handleSearch = jasmine.createSpy("onSearch");
    render(<SearchBar onSearch={handleSearch} />);
    const input = screen.getByPlaceholderText("Buscar juego...");
    fireEvent.change(input, { target: { value: "Doom" } });
    fireEvent.click(screen.getByText("Buscar"));
    expect(handleSearch).toHaveBeenCalledWith("Doom");
  });
});
