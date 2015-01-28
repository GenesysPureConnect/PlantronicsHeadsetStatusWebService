/*
* Copyright (c) 2015 Interactive Intelligence
*
* This Source Code Form is subject to the terms of the Mozilla Public
* License, v. 2.0. If a copy of the MPL was not distributed with this
* file, You can obtain one at http://mozilla.org/MPL/2.0/.
*/

var express = require('express')
var app = express();
var fs = require('fs');
var cors = require('cors');
var path = require('path');
//var email = require('emailjs');
var request = require('request');
var util = require('util');
var os = require('os');
var http = require('http');
var bodyParser = require('body-parser');


app.use(express.static('public'));
app.use(cors())
app.set('port', (process.env.PORT || 8080))
app.use(bodyParser.json());

var statusInfo = {};

console.log("app starting")


app.listen(app.get('port'), function() {
    console.log("App is running at localhost:" + app.get('port'))

})


app.get('/status', function(request, response){
    response.send(statusInfo);
})

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname,"index.html"));
})

app.post('/statuschange', function(req, res){
    console.log('webhook received: ' + JSON.stringify(req.body));

    if(req.body.userId){
        statusInfo[req.body.userId] = req.body;
    }

    res.send();

})
