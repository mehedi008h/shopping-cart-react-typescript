import products from "../data/products.json";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const Store = () => {
    return (
        <Container className="mt-3 mb-3">
            <Row md={3} xs={1} lg={4} className="g-3">
                {products.map((product) => (
                    <Col key={product.id}>
                        <ProductCard {...product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Store;
<h1>Store</h1>;
