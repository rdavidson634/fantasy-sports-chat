const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    author: String,
    channel_id: String,
    content: String,
    }, {
        timestamps: true
    });

module.exports = mongoose.model('Message', messageSchema);