import { render, screen, fireEvent } from '@testing-library/react';
import Admin from '../../pages/Admin.jsx';

describe('Admin Page', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('1. Renderiza el título del panel de administración', () => {
    render(<Admin />);
    expect(screen.getByText(/panel de administración/i)).toBeTruthy();
  });

  it('2. Renderiza los campos del formulario', () => {
    render(<Admin />);
    expect(screen.getByPlaceholderText(/ej: bloodborne/i)).toBeTruthy();
    expect(screen.getByPlaceholderText(/ej: 29990/i)).toBeTruthy();
  });

  it('3. Agrega un nuevo juego a la tabla tras enviar el formulario', () => {
    render(<Admin />);
    const titleInput = screen.getByPlaceholderText(/ej: bloodborne/i);
    const priceInput = screen.getByPlaceholderText(/ej: 29990/i);
    const submitBtn = screen.getByText('Guardar Videojuego');

    fireEvent.change(titleInput, { target: { value: 'Silent Hill 3' } });
    fireEvent.change(priceInput, { target: { value: '35000' } });
    fireEvent.click(submitBtn);

    expect(screen.getByText('Silent Hill 3')).toBeTruthy();
  });
});
