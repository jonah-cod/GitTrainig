"use strict";
const express = require ('express');
require('dotenv').config();
const router = require('./route/userRoute')

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res)=>res.send('Welcome home, great things happen here!'))

app.use('/users', router)

const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>console.log(`server running on ${PORT}`))