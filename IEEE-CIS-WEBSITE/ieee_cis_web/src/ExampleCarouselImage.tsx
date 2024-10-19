interface Props {
  imagePath: string;
  text: string;
}
function ExampleCarouselImage({ imagePath, text }: Props) {
  return (
    <img
      src={imagePath}
      alt={text}
      style={{
        width: "100%",
        height: "400px",
        objectFit: "cover",
      }}
    />
  );
}

export default ExampleCarouselImage;
