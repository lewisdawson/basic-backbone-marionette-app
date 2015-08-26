/**
 * The initializer for the Application.
 */
'use strict';

var Backbone = require('@shim/backbone'),
    Marionette = require('@shim/marionette'),
    _ = require('underscore'),
    RootLayoutView = require('@root/rootLayoutView'),
    RootRouter = require('@root/rootRouter'),
    app;

// Create the application instance
app = Marionette.Application.extend({

    initialize: function(options) {
        this.rootLayoutView = new RootLayoutView(options);

        this.rootRouter = new RootRouter(_.extend({
            rootLayoutView: this.rootLayoutView
        }, options));
    }

});

module.exports = app;