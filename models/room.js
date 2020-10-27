const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    owners: [],
    members: [],
    title: {type: String, required: true},
    type: String
    }, {
        timestamps: true
    });

module.exports = mongoose.model('Room', roomSchema);