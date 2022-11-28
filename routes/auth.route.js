const { Router } = require('express')
const router = Router()

router.post('/registration', (req, res) => {
  try {
    const { email, password } = req.body
    // 38:36
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
