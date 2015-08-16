'use strict';

var Marionette = require('@shim/marionette'),
    Controller,
    router;

Controller = function(options) {

    return {

        index: function() {
            console.log('navbarRouter.controller.index() invoked.');
            console.log('container = ' + options.container);
        }

    };

};

router = Marionette.AppRouter.extend({

    controller: new Controller({
        container: this.container
    }),

    appRoutes: {
        '': 'index'
    },

    initialize: function(options) {
        console.log('navbarRouter initialized.');

        //this.controller = new Controller(options.container);
    }

});

module.exports = router;