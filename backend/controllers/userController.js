import User from '../model/userModel.js'
import asyncHandeler from 'express-async-handler'

//@desc Auth user and get a token
//@route POST /api/users/login
//@access Public
const authUser = asyncHandeler(async (req, res) => {
  const { email, password } = req.body

  res.send({
    email,
    password,
  })
})

export { authUser }
