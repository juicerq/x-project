import express from 'express'

const app = express()

app.listen(
  {
    port: 3333,
  },
  () => {
    console.log('Running...')
  },
)
