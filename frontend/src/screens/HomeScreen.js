import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from '../component/Products'
import products from '../products'
const HomeScreen = () => {
    return (
        <>
            <Row>
            {
                products.map(product => (
                    <Col sm={12} lg={4} xl={3} >
                        <Products product={product} />
                        
                    </Col>
                    ))
                }
                </Row>
        </>
    )
}

export default HomeScreen
