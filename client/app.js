'use strict';

var Backbone = require('@shim/backbone'),
    Marionette = require('@shim/marionette'),
    app;

// Create the application instance
app = Marionette.Application.extend({

    initialize: function(options) {
        console.log('Initialized app!');
    }

});

module.exports = app;