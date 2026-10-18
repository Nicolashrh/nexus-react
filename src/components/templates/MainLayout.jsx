import { Container } from "react-bootstrap";

function MainLayout({ header, content, footer }) {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header role="banner">{header}</header>
      <Container as="main" className="my-5 flex-grow-1">
        {content}
      </Container>
      <footer
        role="contentinfo"
        className="py-4 bg-dark text-white text-center mt-auto border-top border-secondary"
      >
        {footer}
      </footer>
    </div>
  );
}

export default MainLayout;
