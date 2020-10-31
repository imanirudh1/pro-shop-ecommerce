import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import Products from '../component/Products'
import Message from '../component/Message'
import Loader from '../component/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../action/productAction'
const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector((state) => state.productList)
  const { loading, error, products } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} lg={4} xl={3}>
              <Products product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
