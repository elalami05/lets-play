const express = require('express');
const User=require('../models/user')

exports.GetAllusers=(req,res)=>{
    const users = User.findExceptAdmin();
    res.status(200).send(users);
    

    
}

exports.updateSingleUser = (req, res) => {
    const { id } = req.params;
    const { username, email } = req.body;

    if (username === undefined || email === undefined) {
        return res.send('404 Not Found');
    }
    
    User.updateById(id, { 'username': username, 'email': email });
    res.send(`Update a single user with id : ${id}`);
}



exports.deleteSingleUser = (req, res) => {
    const { id } = req.params;
    User.deleteById(id);
    res.send(`Delete a single user with id : ${id}`);
}