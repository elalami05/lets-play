
const Me = require('../models/user');

exports.GetME = (req, res) => {
    const { id } = req;
    const me = Me.findById(id)
    res.send(me);
}

exports.RestMe = (req, res) => {
    res.send('fuck ')
}

exports.UpdateMe = (req, res) => {
    const { id } = req;
    const { username, email } = req.body;

    if (username === undefined || email === undefined) {
        return res.send('Empty informations');
    }

    Me.updateById(id, { 'username': username, 'email': email });
    res.send(`Update a single user with id : ${id}`);
}



exports.deleteMe = (req, res) => {
    const { id } = req;
    Me.deleteById(id);
    res.send(`Delete me `);
}



// exports.rest = (req, res) => {
//     const express=require('express');
// const router=express.Router();
// const {win,lost}=require('../controlleurs/game');

// router.route('/win')
//     .put(win)
// router.route('/lost')
//     .put(lost)
// }


