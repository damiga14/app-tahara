let mongoose = require('mongoose')


let InfoTebilotSchema = mongoose.Schema(
    {
        zona: {
            required: true,
            type: String
        },
        tebilot: {
            required: true,
            type: []
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

let InfoTebilot = mongoose.model('infoTebilot', InfoTebilotSchema, 'infoTebilot')

module.exports = InfoTebilot