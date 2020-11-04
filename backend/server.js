import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import {errorHandeler,notFound} from './middleware/errorMiddleware.js'
import colors from 'colors'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()
const app = express()

app.use(express.json())


app.get('/', (req, res) => {
  res.send('API is running..')
})


app.use('/api/products',productRoutes)
app.use('/api/users',userRoutes)


app.use(notFound)

app.use(errorHandeler)



const PORT = process.env.PORT || 5000

app.listen(
  5000,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)
)
