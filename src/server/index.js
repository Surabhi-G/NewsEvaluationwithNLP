const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser= require('body-parser');
const cors = require('cors');
const app = express()
var aylien = require("aylien_textapi"); 
var TextAPI = new aylien({
    application_id: process.env.APP_ID,
    application_key: process.env.APP_KEY
});

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors());
console.log(__dirname)
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
app.post('/NewsURL', (req, res) => {    
    const { text } = req.body;    
    TextAPI.sentiment({ 'url': req.body.text,    
    mode: 'Document'}, 
    function(error, response) {  
    console.log(response)  
    res.send(response)    }    
    );
});

module.exports = app;