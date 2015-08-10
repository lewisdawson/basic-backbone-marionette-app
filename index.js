/**
 * The Node.js Express server configuration and entry point.
 */
'use strict';

var express = require('express'),
    path = require('path'),
    app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Configure the location where express looks for static resources (the current directory)
app.use(express.static(path.join(__dirname)));
app.listen(3000);