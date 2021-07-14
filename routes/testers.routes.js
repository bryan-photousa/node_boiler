const router = require('express').Router()
const testersController = require('../controllers/testers.controller')

module.exports = router

// api routes ===========================================================
router.get('/', testersController.readAll)