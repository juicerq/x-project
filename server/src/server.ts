import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import postRoutes from './routes/post'
import userRoutes from './routes/user'

const app = express()
const port = 3333

// Middleware
app.use(
  cors({
    origin: '*',
  }),
)
app.use(express.json())

// Authentication middleware if needed
// app.use((req, res, next) => {
//   // Your authentication logic here
//   // Verify JWT tokens or implement your own authentication method
//   next()
// })

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/x', {
  serverSelectionTimeoutMS: 5000,
})

app.use('/post', postRoutes)
app.use('/user', userRoutes)

// Start the server
app.listen(port, () => {
  console.log(`✔ Running on localhost:${port}`)
})
