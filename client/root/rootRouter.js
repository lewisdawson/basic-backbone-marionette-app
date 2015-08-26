'use strict';

var Marionette = require('@shim/marionette'),
    ContentRouter = require('@root/content/contentRouter'),
    Router;

Router = Marionette.AppRouter.extend({

    initialize: function(options) {
        console.log('Initialized rootRouter.');

        this.contentRouter = new ContentRouter(options);
    }

});

module.exports = Router;