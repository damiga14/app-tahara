let { RevisionBedikotM } = require('../models')

module.exports = {
    getAllBodkot: (req, res) => {
        RevisionBedikotM.find()
            .then((response) => {
                res.status(200).json({ message: 'Bodkot loaded', data: response })
            })
            .catch(() => {
                res.status(400).json({ message: 'I Am Error / getAllBodkot failed' })
            })
    },

    insertBodkot: async (req, res) => {
        try {
            let newRevisionBedikot = new RevisionBedikotM(req.body)

            let response = await newRevisionBedikot.save()

            res.status(200).json({ message: 'Bodkot created!', data: response })

        } catch (err) {
            res.status(400).json({ message: 'I Am Error / insertBodkot failed', error: err })
        }
    },

    updateBodkot: (req, res) => {
        RevisionBedikotM.findByIdAndUpdate(req.query.id, req.body)
            .then((response) => {
                res.status(200).json({ message: 'Bodkot updated!', data: response })
            })
            .catch(() => {
                res.status(400).json({ message: 'I Am Error / updateBodkot failed' })
            })
    },

    deleteBodkotById: (req, res) => {
        RevisionBedikotM.findByIdAndDelete(req.query.id)
            .then(() => {
                res.status(200).json({ message: 'Bodkot deleted!', id: req.query.id })
            })
            .catch(() => {
                res.status(400).json({ message: 'I Am Error / deleteBodkotById failed' })
            })
    },
}