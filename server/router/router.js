const express = require('express')
const {postRegister, userLogin, userLogout} = require('../controller/register.js')

const router = express.Router()

router.post('/user',postRegister)
router.post('/user/login', userLogin)
router.get('/user/logout', userLogout)


module.exports = router