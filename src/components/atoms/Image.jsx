function Image({ src, alt, className, style, onError }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={onError}
    />
  );
}

export default Image;
