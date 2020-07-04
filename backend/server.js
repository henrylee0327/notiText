const express = require("express");
const db = require('./lib/db');

const app = express();
const port = 5000;

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile('index.html')
});


app.listen(port, () => {
    console.log("server is listening at port " + port)
});