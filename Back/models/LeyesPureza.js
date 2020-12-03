let mongoose = require('mongoose')

let LeyesPurezaSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        mp3URL: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

let LeyesPureza = mongoose.model('leyesPureza', LeyesPurezaSchema, 'leyesPureza')

module.exports = LeyesPureza
