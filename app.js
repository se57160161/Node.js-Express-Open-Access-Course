const express = require('express');
//const chalk = require('chalk')('app');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000;

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "/public/")))

app.get("/", (req, res) =>{
    res.send("Hello World 123");
})

app.listen(port, ()=>{
    debug("Listening on port: " + port);
})