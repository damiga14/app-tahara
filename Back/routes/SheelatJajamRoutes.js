let express = require('express')
let router = express.Router()

let { SheelatJajamControllers } = require('../controllers')


router.get('/getAllJajamim', SheelatJajamControllers.getAllJajamim)
router.post('/insertJajam', SheelatJajamControllers.insertJajam)
router.delete('/deleteJajamById', SheelatJajamControllers.deleteJajamById)
router.patch('/updateJajamById', SheelatJajamControllers.updateJajam)

module.exports = router