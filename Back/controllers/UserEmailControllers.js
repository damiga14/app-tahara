let { UserEmail } = require('../models')


module.exports = {
    getAllEmails: (req, res) => {
        UserEmail.find()
            .then((response) => { res.status(200).json({ message: 'Emails loaded!', data: response }) })
            .catch(() => { res.status(400).json({ message: 'I Am Error / getAllEmails failed' }) })
    },

    insertEmail: async (req, res) => {
        try {
            let newUserEmail = new UserEmail(req.body)
            let response = await newUserEmail.save()
            res.status(200).json({ message: 'Email inserted!', data: response })
        } catch (error) {
            res.status(400).json({ message: 'I Am Error / insertEmail failed' })
        }
    },

    deleteEmailById: (req, res) => {
        UserEmail.findByIdAndDelete(req.query.id)
            .then(() => { res.status(200).json({ message: 'Email deleted!' }) })
            .catch(() => { res.status(400).json({ message: 'I Am Error / deleteEmailById failed' }) })
    }
}