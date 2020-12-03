const express = require('express')
const router = express.Router()



router.use(require('./SheelatJajamRoutes'))
router.use(require('./InfoTebilotRoutes'))
router.use(require('./RevisionBedikotHRoutes'))
router.use(require('./RevisionBedikotMRoutes'))
router.use(require('./LeyesPurezaRoutes'))
router.use(require('./UserEmailRoutes'))


module.exports = router

