let { LeyesPureza } = require('../models')

module.exports = {
    getAllLeyes: (req, res) => {
        LeyesPureza.find()
            .then((response) => { res.status(200).json({ message: 'Leyes loaded!', data: response }) })
            .catch(() => { res.status(400).json({ message: 'I Am Error / getAllLeyes failed' }) })
    },

    insertLey: async (req, res) => {
        try {
            let newLeyesPureza = new LeyesPureza(req.body)
            let response = await newLeyesPureza.save()
            res.status(200).json({ message: 'Ley created!', data: response })
        } catch (error) {
            res.status(400).json({ message: 'I Am Error / insertLey failed' })
        }
    },

    updateLey: (req, res) => {
        LeyesPureza.findByIdAndUpdate(req.query.id, req.body)
            .then((response) => { res.status(200).json({ message: 'Ley updated!', data: response }) })
            .catch(() => { res.status(400).json({ message: 'I Am Error / updateLey failed' }) })
    },

    deleteLeyById: (req, res) => {
        LeyesPureza.findByIdAndDelete(req.query.id)
            .then(() => { res.status(200).json({ message: 'Ley deleted!' }) })
            .catch(() => { res.status(400).json({ message: 'I Am Error / deleteLeyById failed' }) })
    }
}