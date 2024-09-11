const express = require('express')
const { getAllUser, getUserById, addUser, updateUser, deleteUser } = require('../controllers/userControllers')

const router = express.Router()

router.get('/',getAllUser)
router.get('/:personId',getUserById)
router.post('/',addUser)
router.patch('/:personId',updateUser)
router.delete('/:personId',deleteUser)
module.exports =router   