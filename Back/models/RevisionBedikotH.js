let mongoose = require('mongoose')


let RevisionBedikotHSchema = mongoose.Schema(
    {
        zona: {
            required: true,
            type: String
        },

        people: {
            type: [],
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

let RevisionBedikotH = mongoose.model('revisionBedikotH', RevisionBedikotHSchema, 'revisionBedikotH')

module.exports = RevisionBedikotH
