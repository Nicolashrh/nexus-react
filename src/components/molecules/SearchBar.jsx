import { Form } from "react-bootstrap";
import Button from "../atoms/Button.jsx";

function SearchBar({ onSearch, placeholder = "Buscar juego..." }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };

  return (
    <Form onSubmit={handleSubmit} className="d-flex gap-2">
      <Form.Control
        type="text"
        placeholder={placeholder}
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <Button type="submit" variant="primary">
        Buscar
      </Button>
    </Form>
  );
}

export default SearchBar;
