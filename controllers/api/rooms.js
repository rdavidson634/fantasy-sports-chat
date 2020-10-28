const Room = require('../../models/room')

module.exports = {
    index,
}

async function index(req, res) {
    const rooms = await Room.find({user: req.user._id});
    res.status(200).json(rooms)
}