let mongoose = require('mongoose')

let userEmailSchema = mongoose.Schema(
    {
        email: {
            required: true,
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

let UserEmail = mongoose.model('userEmail', userEmailSchema, 'userEmails')

module.exports = UserEmail