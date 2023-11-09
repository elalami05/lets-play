const express =require('express');
const app = express();
const port=5000 ;
app.use(express.json());

const routeUser=require('./routes/user')
const routeGame=require('./routes/game')
const routeMe=require('./routes/me')
const routeAuth = require('./routes/auth')

app.use('/user',routeUser);
app.use('/game',routeGame);
app.use('/me',routeMe);
app.use('/auth', routeAuth);




app.listen(port,()=>{
    console.log('server listen on port :'+port);
});