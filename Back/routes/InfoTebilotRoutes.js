let express = require('express')
let router = express.Router()

let { InfoTebilotControllers } = require('../controllers')


router.get('/getAllTebilot', InfoTebilotControllers.getAllTebilot)
router.post('/insertTebila', InfoTebilotControllers.insertTebila)
router.delete('/deleteTebilaById', InfoTebilotControllers.deleteTebilaById)
router.patch('/updateTebilaById', InfoTebilotControllers.updateTebila)

module.exports = router