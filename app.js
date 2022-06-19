#!/usr/bin/env node
const http = require('http');
const express = require('express');
const app = express();

app.set('views', __dirname + '\\views');
app.set('view engine', 'ejs');

// for parsing application/json
app.use(express.json()); 

// for parsing application/xwww-
app.use(express.urlencoded({ extended: true })); 
//form-urlencoded

// for parsing multipart/form-data
app.use(express.static('public'));

app.get('/', async (request,response) => {
    response.render('index');
});

const server = http.createServer(app);


server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});