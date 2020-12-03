let express = require('express')
let router = express.Router()

let { RevisionBedikotHControllers } = require('../controllers')


router.get('/getAllBodkim', RevisionBedikotHControllers.getAllBodkim)
router.post('/insertBodek', RevisionBedikotHControllers.insertBodek)
router.delete('/deleteBodekById', RevisionBedikotHControllers.deleteBodekById)
router.patch('/updateBodek', RevisionBedikotHControllers.updateBodek)

module.exports = router