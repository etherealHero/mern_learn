const { Router } = require('express')
const {
  check,
  validationResult,
} = require('express-validator')
const router = Router()
const User = require('../models/User.js')

router.post(
  '/registration',
  [
    check(
      'email',
      'Неправильный email'
    ).isEmail(),
    check(
      'password',
      'Некорректный пароль'
    ).isLength({ min: 3 }),
  ],
  async (req, res) => {
    try {
      const err = validationResult(req)
      if (!err.isEmpty()) {
        return res.status(400).json({
          errors: err.array(),
          message:
            'Некорректные данные при регистрации',
        })
      }

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
      res.status(500).json({
        message: 'Некорректные данные',
      })
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
