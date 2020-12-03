let { InfoTebilot } = require('../models')


module.exports = {
    getAllTebilot: (req, res) => {
        InfoTebilot.find()
            .then((response) => {
                res.status(200).json({ message: 'Tebilot loaded', data: response })
            })
            .catch(() => {
                res.status(400).json({ message: 'I Am Error / getAllTebilot failed' })
            })
    },

    insertTebila: async (req, res) => {
        try {
            let newTebila = new InfoTebilot(req.body)

            let response = await newTebila.save()

            res.status(200).json({ message: 'Tebila Created!', data: response })

        } catch (err) {
            res.status(400).json({ message: 'I am Error / insertTebila failed', error: err })
        }
    },

    updateTebila: (req, res) => {
        InfoTebilot.findByIdAndUpdate(req.query.id, req.body)
            .then(() => {
                res.status(200).json({ message: 'Tebila Updated!' })
            })
            .catch((err) => {
                res.status(400).json({ message: 'I am Error / updateTebila failed', error: err })
            })
    },

    deleteTebilaById: (req, res) => {
        InfoTebilot.findByIdAndDelete(req.query.id)
            .then(() => {
                res.status(200).json({ message: 'Tebila Deleted!', id: req.query.id })
            })
            .catch((err) => {
                res.status(400).json({ message: 'I am Error / deleteTebilaById failed', error: err })
            })
    }
}