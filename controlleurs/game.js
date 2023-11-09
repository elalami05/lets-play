
const Game = require('../models/user');


exports.win=(req,res) => {
    const{id}=req.params;
    Game.incrementScoreById(id);
    res.send('you win');
}
exports.lost = (req, res) => {
    const { id } = req.params;
    Game.decrementScoreById(id);
    res.send('you lost');
}

