import Product from '../model/productModel.js'
import asyncHandeler from 'express-async-handler'

//@desc Fetch all Products
//@route GET /api/products
//@access Public
const getProducts = asyncHandeler(async (req, res) => {
  const products = await Product.find({})
  res.json(products)
})

//@desc Fetch single Products
//@route GET /api/products/:id
//@access Public

const getProductById = asyncHandeler(async (req, res) => {
  const product = await Product.findById(req.params.id)

  if (product) {
    res.json(product)
  } else {
    res.status(404)
    throw new Error('Product Not Found')
  }
})

export { getProductById, getProducts }
