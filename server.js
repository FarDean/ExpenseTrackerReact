const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const app = express();
const tranRouter = require('./routes/transactions')
dotenv.config({path: './config/config.env'})
const PORT = process.env.PORT || 5000;

app.use('/api/v1/transactions',tranRouter)

app.listen(PORT,()=>console.log('server connected ...'))