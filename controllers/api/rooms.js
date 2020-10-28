const Room = require('../../models/room')

module.exports = {
    index,
    create,
}

async function index(req, res) {
    const rooms = await Room.find({user: req.user._id});
    res.status(200).json(rooms)
}

async function create(req, res) {
    const room = await Room.create(req.body);
    res.status(201).json(room)
}