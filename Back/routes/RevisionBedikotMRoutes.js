let express = require('express')
let router = express.Router()

let { RevisionBedikotMControllers } = require('../controllers')


router.get('/getAllBodkot', RevisionBedikotMControllers.getAllBodkot)
router.post('/insertBodeket', RevisionBedikotMControllers.insertBodkot)
router.delete('/deleteBodkotById', RevisionBedikotMControllers.deleteBodkotById)
router.patch('/updateBodkot', RevisionBedikotMControllers.updateBodkot)

module.exports = router