/**
 * The main entry point where the application (app) is created, initialized, and started.
 */
'use strict';

// Load jQuery first since everything else depends on it
var jquery = require('@shim/jquery'),
    Backbone = require('@shim/backbone'),
    App = require('./app'),
    app;

// Load the client-side (Bower) libraries
require('@dist/bower-lib');

app = new App({});
// Once the app's start event has been fired, invoke the Backbone history
app.on('start', function() {
    Backbone.history.start();
});

app.start();