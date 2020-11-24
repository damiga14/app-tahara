let mongoose = require('mongoose')


let SheelatJajamSchema = mongoose.Schema(
    {
        name: {
            required: true,
            type: String
        },
        cel: {
            required: true,
            type: Number
        },
        img: {
            required: false,
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)


let SheelatJajam = mongoose.model('sheelatJajam', SheelatJajamSchema, 'sheelatJajam')

module.exports = SheelatJajam