const express = require("express")
const router = express.Router()
const { Users, addUser } = require('../Controller/userController')
router.get('/add-user', addUser);


module.exports = router