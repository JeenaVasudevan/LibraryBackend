const express = require('express')
const { getAllPerson, getPersonById, addPerson, updatePerson, deletePerson } = require('../controllers/personControllers')
const router = express.Router()

router.get('/',getAllPerson)
router.get('/:personId',getPersonById)
router.post('/',addPerson)
router.patch('/:personId',updatePerson)
router.delete('/:personId',deletePerson)
module.exports =router   