/**
 * The main entry point where the application (app) is created, initialized, and started.
 */
'use strict';

var Backbone = require('@shim/backbone'),
    jquery = require('@shim/jquery'),
    App = require('./app'),
    RootLayoutView = require('@view/rootLayoutView'),
    // Load the client-side (Bower) libraries
    lib = require('@dist/bower-lib'),
    app;

app = new App();
// Once the app's start event has been fired, invoke the Backbone history
app.on('start', function() {
    Backbone.history.start();
});
app.rootView = new RootLayoutView();

app.start();