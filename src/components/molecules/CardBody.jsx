import Text from "../atoms/Text.jsx";

function CardBody({ title, description, price }) {
  return (
    <>
      <Text variant="h5" className="fw-bold text-light">
        {title}
      </Text>
      <Text variant="p" className="text-secondary small">
        {description}
      </Text>
      <Text variant="span" className="fw-bold text-success">
        ${Number(price || 0).toLocaleString("es-CL")} CLP
      </Text>
    </>
  );
}

export default CardBody;
