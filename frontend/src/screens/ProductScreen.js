import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({ match }) => {
  // destructuring props.match

  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={6}>
          <Row>
            <Col>
              <h3 className="text-center">{product.name}</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>

                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

                <ListGroup.Item>
                  Description: {product.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={6}>
              <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Row>
                            <Col xs={4}>Status:</Col>
                            <Col xs={8}>
                           <strong className={(product.countInStock > 0) ? "text-success":"text-danger"}>{(product.countInStock > 0) ? `In Stock (${product.countInStock})`:"Out of Stock"}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className="btn-block" type="button" disabled={product.countInStock === 0}>Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <LinkContainer to="/" className="my-2">
        <Button variant="primary">
          <i className="fas fa-arrow-left"></i> Back
        </Button>
      </LinkContainer>
    </>
  );
};

export default ProductScreen;
