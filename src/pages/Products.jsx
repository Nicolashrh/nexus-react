import { Container } from "react-bootstrap";
import initialProducts from "../data/Products.jsx";
import ProductList from "../components/organisms/ProductList.jsx";
import SearchBar from "../components/molecules/SearchBar.jsx";
import Text from "../components/atoms/Text.jsx";

function Products() {
  const [games, setGames] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("nexus_games");
      const parsed = saved ? JSON.parse(saved) : [];
      if (Array.isArray(parsed) && parsed.length > 0) {
        setGames(parsed);
      } else {
        const defaultList = Array.isArray(initialProducts)
          ? initialProducts
          : [];
        setGames(defaultList);
        localStorage.setItem("nexus_games", JSON.stringify(defaultList));
      }
    } catch {
      setGames(Array.isArray(initialProducts) ? initialProducts : []);
    }
  }, []);

  const filteredGames = games.filter((game) =>
    game.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Container className="my-5">
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
        <Text variant="h1" className="fw-bold m-0 text-primary">
          Catálogo de Juegos
        </Text>
        <div style={{ maxWidth: "350px", width: "100%" }}>
          <SearchBar
            onSearch={(term) => setSearchTerm(term)}
            placeholder="Buscar videojuego..."
          />
        </div>
      </div>

      <ProductList products={filteredGames} />
    </Container>
  );
}

export default Products;
