const express = require("express");
const db = require('./lib/db');
const app = express();
const cors = require('cors')
const port = 5000;
const twilio = require('twilio')
// const twilio = require('twilio')(
//     process.env.TWILIO_ACCOUNT_SID,
//     process.env.TWILIO_AUTH_TOKEN
//   );
// const path = require('path')
require('dotenv').config()

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors()) 
// app.use(express.static(path.join(__dirname, "frontend/build")))
app.use(express.static('../frontend/build'))

function generateUUID () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

// The homepage
app.get('/', (req, res) => {
    res.status(200).render('index.html')
});

// Your promise list page
app.get('/promises', async (req, res) => {
    // console.log(req.params)
    try {
        const results = await db.getPromise()
        console.log(results)
        res.status(200).json({
            promise: results
        })
    } catch (err) {
        res.status(500)
    }
        
})

// Your promise
app.get('/promises/:uuid', async (req, res) => {
    // console.log(req.params.uuid)
    try {
        const results = await db.getIndividualPromise(req.params.uuid)
        // console.log(results)
    //     res.status(200).json({
    //     promise: results
    // })
    res.redirect(302, `/promises`)
    } catch (err) {
        res.status(500)
    }
})


// Create your promise
app.post('/promises', async (req, res) => {
    // console.log(req.body.content)
    try {
        const theUUID = generateUUID()
        const theContent = req.body.content
        const theTime = req.body.time
        const theDate = req.body.date
        const thePlace = req.body.place
        const thePhoneNumber = req.body.phone_number
        const parsedPhoneNumber = thePhoneNumber.map(number => {
            return number.newNumber
        })
        console.log(parsedPhoneNumber)
        const results = await db.createPromise(theUUID, theContent, theTime, theDate, thePlace, parsedPhoneNumber)
        
        // Twilio API
        var accountSid = process.env.TWILIO_ACCOUNT_SID
        var authToken = process.env.TWILIO_AUTH_TOKEN
        // var notifyServiceSid = process.env.NOTIFY_SERVICE_SID
        var client = new twilio(accountSid, authToken)
        var client = require('twilio')(accountSid, authToken)
        console.log(thePhoneNumber)
        console.log('~~~~~~~~~~')
        client.messages.create({
                body: 'Message: ' + theContent +
                ' Date: ' + theDate 
                + ' Time: ' + theTime
                + ' Place: ' + thePlace,
                to: parsedPhoneNumber, 
                from: '+12015818558'
            }) 
            .then((message) => console.log(message.sid));
        // client.notify.services(notifyServiceSid)
        //     .notifications.create({
        //         toBinding:JSON.stringify({
        //             binding_type: 'sms', address: '+18324918070',
        //             binding_type: 'sms', address: '+18324918070'
        //         }),
        //         body:'test'
        //     })
        //     .then(notification => console.log(notification.sid))
        //     .catch(error => console.log(error))
        res.redirect(302, `/promises`)
        } catch (err) {
        res.status(500).send('Failed')
        }
        })
      

// Update your promise
app.put('/promises/:uuid', async (req, res) => {
    console.log(req.params.uuid)
    try {
        const theUUID = req.params.uuid
        const theContent = req.body.content
        const theTime = req.body.time
        const theDate = req.body.date
        const thePlace = req.body.place
        const thePhoneNumber = req.body.phone_number

        const results = await db.updatePromise(theContent, theTime, theDate, thePlace, thePhoneNumber, theUUID)
        
        // Twilio API
        var accountSid = process.env.TWILIO_ACCOUNT_SID
        var authToken = process.env.TWILIO_AUTH_TOKEN
        var client = new twilio(accountSid, authToken)
                
        client.messages.create({
        body: 'Message: ' + theContent +
        ' Date: ' + theDate 
        + ' Time: ' + theTime
        + ' Place: ' + thePlace,
        to: thePhoneNumber, 
        from: '+12015818558'
        }) 
        .then((message) => console.log(message.sid));
        res.status(200).json({
            promise: results
        })
    } catch (err) {
        res.send('Failed')
    }
})

// Delete your promise
app.delete('/promises/:uuid', async (req, res) => {
    console.log(req.params.uuid)
    try {
        const results = await db.deletePromise(req.params.uuid)
        console.log(results)
        res.status(204).json({
            promise: results
        }) 
    } catch (err) {
        res.status(500)
    }
    })




const startExpressApp = () => {
    app.listen(port, () => {
    console.log("server is listening on port " + port)
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