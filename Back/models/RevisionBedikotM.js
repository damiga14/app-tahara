let mongoose = require('mongoose')


let RevisionBedikotMSchema = mongoose.Schema(
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

let RevisionBedikotM = mongoose.model('revisionBedikotM', RevisionBedikotMSchema, 'revisionBedikotM')

module.exports = RevisionBedikotM
