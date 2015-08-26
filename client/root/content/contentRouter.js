'use strict';

var Marionette = require('@shim/marionette'),
    IndexLayoutView = require('@index/indexLayoutView'),
    AccountLayoutView = require('@account/accountLayoutView'),
    Router,
    Controller;

Controller = function(options) {

    var currentView;

    function getContentRegionEl() {
        return options.rootLayoutView.getRegion('contentRegion').$el;
    }

    function setCurrentView(view) {
        if (currentView && currentView.emptyAllRegions) {
            currentView.emptyAllRegions();
        }

        currentView = view;
    }

    return {

        index: function() {
            var view;

            view = new IndexLayoutView({
                el: getContentRegionEl()
            });
            view.render();
            view.showAllRegions();

            // TODO: add region.destroy() functionality
            setCurrentView(view);
        },

        signin: function() {
            var view;

            view = new AccountLayoutView({
                el: getContentRegionEl()
            });
            view.render();
            view.showAllRegions();

            // TODO: add region.destroy() functionality
            setCurrentView(view);
        }

    };

};

Router = Marionette.AppRouter.extend({

    appRoutes: {
        '': 'index',
        'account/signin': 'signin'
    },

    initialize: function(options) {
        console.log('Initialized contentRouter.');

        this.controller = new Controller(options);
    }

});

module.exports = Router;