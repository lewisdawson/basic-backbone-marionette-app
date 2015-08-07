'use strict';

var Backbone = require('@shim/backbone'),
    $ = require('@shim/jquery'),
    App = require('./app'),
    RootLayoutView = require('@view/rootLayoutView'),
    app;

Backbone.$ = $;

app = new App();
// Once the app's start event has been fired, invoke the Backbone history
app.on('start', function() {
    Backbone.history.start();
});
app.rootView = new RootLayoutView();

app.start();