let express = require('express')
let router = express.Router()

let { LeyesPurezaControllers } = require('../controllers')

router.get('/getAllLeyes', LeyesPurezaControllers.getAllLeyes)
router.post('/insertLey', LeyesPurezaControllers.insertLey)
router.patch('/updateLey', LeyesPurezaControllers.updateLey)
router.delete('/deleteLeyById', LeyesPurezaControllers.deleteLeyById)


module.exports = router