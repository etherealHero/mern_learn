const chalk = require('chalk')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = require('./routes/auth.route.js')
const cors = require('cors')

app.use(
  cors({
    origin: '*',
    credentials: true,
  })
)

app.use(express.json())
app.use('/api/auth', router)

app.get('/', (req, res) => {
  res.json({ message: 'lol' })
})

async function start() {
  try {
    await mongoose.connect(
      'mongodb+srv://admin:admin@cluster0.909wfe1.mongodb.net/mern?retryWrites=true&w=majority'
    )
    app.listen(4000, () =>
      console.log(
        chalk.bgRed(
          'Server started on port 4000'
        )
      )
    )
  } catch (error) {
    console.error(error)
  }
}

start()
