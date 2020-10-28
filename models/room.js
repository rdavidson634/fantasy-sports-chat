const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    owner: String,
    members: [],
    title: {type: String, required: true},
    type: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    }, {
        timestamps: true
    });

module.exports = mongoose.model('Room', roomSchema);