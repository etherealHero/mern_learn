const chalk = require('chalk')
const express = require('express')
const mongoose = require('mongoose')
const app = express()

async function start() {
  try {
    app.get('/', (req, res) => {
      res.send('<h1>hello world!</h1>')
    })

    await mongoose.connect(
      'mongodb+srv://admin:admin@cluster0.909wfe1.mongodb.net/?retryWrites=true&w=majority'
    )
    app.listen(4000, () =>
      console.log(chalk.bgRed('Server started on port 4000'))
    )
  } catch (error) {
    console.error(error)
  }
}

start()
