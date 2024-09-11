const express = require('express')
const { login, verifyLogin } = require('../controllers/authControllers')
const { secure } = require('../controllers/middlewares/secure')
const router = express.Router()

router.get('/verify',secure,verifyLogin)
router.post('/login',login)


module.exports =router