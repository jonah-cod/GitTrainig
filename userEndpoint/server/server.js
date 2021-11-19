
const express = require('express');
const router = require('./routes/routes.js');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', router)





const PORT = process.env.PORT
app.listen(PORT, ()=>console.log(`Server serving at port: ${PORT}`))