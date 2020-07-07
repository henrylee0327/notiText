const express = require("express");
const db = require('./lib/db');
const app = express();
const port = 5000;


// Middleware
app.use(express.static('../frontend/build'));
app.use(express.urlencoded({extended: true}));

// The homepage
app.get('/', (req, res) => {
    res.render('index.html')
});

app.post('/promise/:uuid', (req, res) => {

})

const startExpressApp = () => {
    app.listen(port, () => {
    console.log("server is listening at port " + port)
    });
}

const bootupSequenceFailed = (err) => {
    console.error('Unable to connect to the database:', err)
    process.exit(1)
}

// global kickoff point
db.connect()
    .then(startExpressApp)
    .catch(bootupSequenceFailed)
