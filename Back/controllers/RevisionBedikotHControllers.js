let { RevisionBedikotH } = require('../models')


module.exports = {
    getAllBodkim: (req, res) => {
        RevisionBedikotH.find()
            .then((response) => {
                res.status(200).json({ message: 'Bodkim loaded', data: response })
            })
            .catch(() => {
                res.status(400).json({ message: 'I Am Error / getAllBodkim failed' })
            })
    },

    insertBodek: async (req, res) => {
        try {
            let newRevisionBedikot = new RevisionBedikotH(req.body)

            let response = await newRevisionBedikot.save()

            res.status(200).json({ message: 'Bodek created!', data: response })

        } catch (err) {
            res.status(400).json({ message: 'I Am Error / insertBodek failed', error: err })
        }
    },

    updateBodek: (req, res) => {
        RevisionBedikotH.findByIdAndUpdate(req.query.id, req.body)
            .then((response) => {
                res.status(200).json({ message: 'Bodek updated!', data: response })
            })
            .catch(() => {
                res.status(400).json({ message: 'I Am Error / updateBodek failed' })
            })
    },

    deleteBodekById: (req, res) => {
        RevisionBedikotH.findByIdAndDelete(req.query.id)
            .then(() => {
                res.status(200).json({ message: 'Bodek deleted!', id: req.query.id })
            })
            .catch(() => {
                res.status(400).json({ message: 'I Am Error / deleteBodekById failed' })
            })
    },
}