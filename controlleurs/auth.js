
const jwt=require('jsonwebtoken');
const User = require('../models/user');
const { use } = require('../routes/auth');

exports.login =(req,res) =>{
    const{password,email}=req.body;
    if (password === undefined || email === undefined) {
        return res.status(400).send(' 4 401 Unauthorized');
    }
    const user = User.findByEmail(email);
    if(user===null){
        return res.status(401).send('404 Not Found')
    }
    if(user.password!==password){
        return res.send('409 Conflict');
    }
    const token = jwt.sign({ 'id': user.id }, 'Selma');
    res.status(200).send(token);
} 







exports.register = (req,res) => {
const { username, password, email, isAdmin }=req.body;
if (password === undefined || email === undefined || username === undefined || isAdmin===undefined){
    return res.send('400 Bad Request');
}
const user=User.findByEmail(email);
if(user!==null){
    return res.send('409 Conflict')
}
   User.createe(req.body);
    const token = jwt.sign({ 'id': user.id }, 'Alami');
    res.status(200).send(token);
}