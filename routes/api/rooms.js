const express = require('express');
const router = express.Router();
const roomsCtrl = require('../../controllers/api/rooms')

/*-- Protected Routes --*/
router.get('/', roomsCtrl.index)
router.post('/', checkAuth, roomsCtrl.create);



/*--  Helper Functions --*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
  }
  
  module.exports = router;