const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userroute = require('./routes/route_user')

//Db connection
mongoose.connect('mongodb://localhost/RestApiDb', 
        {useNewUrlParser:true},
        ()=>console.log('Connected to DB.')
);

//Request Body Parse
app.use(express.json())

//MiddleWare
app.use('/api/users',userroute)


app.listen('8080')