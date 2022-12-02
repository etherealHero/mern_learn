const { Router } = require('express')
const router = Router()
const User = require('../models/User.js')

router.post(
  '/registration',
  async (req, res) => {
    try {
      const { email, password } = req.body

      const isUsed = await User.find({
        email,
      })

      if (isUsed.length) {
        return res.status(300).json({
          message: 'Email уже занят',
        })
      }

      const user = new User({
        email,
        password,
      })
      await user.save()

      res.status(201).json({
        message: 'Пользователь создан',
      })
    } catch (error) {
      console.log(error)
    }
  }
)

router.get('/lol', (req, res) => {
  try {
    console.log('knock me')
    res.status(202).json({ message: 'lol' })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
