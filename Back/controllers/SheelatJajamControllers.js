let { SheelatJajam } = require('../models')


module.exports = {
    getAllJajamim: (req, res) => {
        SheelatJajam.find()
            .then((response) => {
                res.status(200).json({ message: 'Jajamim loaded', data: response })
            })
            .catch(() => {
                res.status(400).json({ message: 'I am Error / getAllJajamim failed' })
            })
    },

    insertJajam: async (req, res) => {
        try {
            let newJajam = new SheelatJajam(req.body)

            let response = await newJajam.save()

            res.status(200).json({ message: 'Jajam Created!', data: response })

        } catch (err) {
            res.status(400).json({ message: 'I am Error / insertJajam failed', error: err })
        }
    },

    updateJajam: (req, res) => {
        SheelatJajam.findByIdAndUpdate(req.query.id, req.body)
            .then(() => {
                res.status(200).json({ message: 'Jajam Updated!' })
            })
            .catch((err) => {
                res.status(400).json({ message: 'I am Error / updateJajam failed', error: err })
            })
    },

    deleteJajamById: (req, res) => {
        SheelatJajam.findByIdAndDelete(req.query.id)
            .then(() => {
                res.status(200).json({ message: 'Jajam Deleted!', id: req.query.id })
            })
            .catch((err) => {
                res.status(400).json({ message: 'I am Error / deleteJajam failed', error: err })
            })
    }
}