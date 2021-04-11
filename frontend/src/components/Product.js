import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  // Using destructuring to access props.product
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/products/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>

      <Card.Body>
        <a href={`/products/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          {product.rating} from {product.numReviews} reviews
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;