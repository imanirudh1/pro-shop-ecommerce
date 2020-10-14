import express from 'express'
import Product from '../model/productModel.js'
import asyncHandeler from 'express-async-handler'

const router = express.Router()
//@desc Fetch all Products
//@route GET /api/products
//@access Public

router.get(
  '/',
  asyncHandeler(async (req, res) => {
    const products = await Product.find({})
    res.json(products)
  })
)

//@desc Fetch single Products
//@route GET /api/products/:id
//@access Public

router.get(
  '/:id',
  asyncHandeler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
      res.json(product)
    } else {
      res.status(404).json({
        message: 'Product not found',
      })
    }
  })
)

export default router
