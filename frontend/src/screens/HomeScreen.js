import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from '../component/Products'
import products from '../products'
const HomeScreen = () => {
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
            {
                products.map(product => (
                    <Col key={product._id} sm={12} lg={4} xl={3} >
                        <Products product={product} />
                        
                    </Col>
                    ))
                }
                </Row>
        </>
    )
}

export default HomeScreen
