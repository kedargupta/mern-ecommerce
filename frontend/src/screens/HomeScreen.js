import products from '../products'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
    return (
        <>
            <Row>
                { products.map((product, idx) => (
                        <Col key={idx}  sm={12} md={6} lg={3}>
                            <Product product={product} />
                        </Col>
                    )) }
            </Row>

        </>
    )
}

export default HomeScreen
