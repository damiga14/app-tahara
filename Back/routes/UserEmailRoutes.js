let express = require('express')
let router = express()

let { UserEmailControllers } = require('../controllers')

router.get('/getAllEmails', UserEmailControllers.getAllEmails)
router.post('/insertEmail', UserEmailControllers.insertEmail)
router.delete('/deleteEmailById', UserEmailControllers.deleteEmailById)


module.exports = router