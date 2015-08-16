'use strict';

var Marionette = require('@shim/marionette'),
    IndexLayoutView = require('@index/indexLayoutView'),
    Router,
    Controller;

Controller = function(options) {

    function getContentRegion() {
        return options.rootLayoutView.getRegion('contentRegion');
    }

    return {

        index: function() {
            var indexLayoutView;

            indexLayoutView = new IndexLayoutView({
                el: getContentRegion().$el
            });
            indexLayoutView.render();
            indexLayoutView.showRegions();
        },

        login: function() {
            console.log('/login route initiated.');
        }

    };

};

Router = Marionette.AppRouter.extend({

    appRoutes: {
        '': 'index',
        'login': 'login'
    },

    initialize: function(options) {
        console.log('Initialized contentRouter.');

        this.controller = new Controller(options);
    }

});

module.exports = Router;