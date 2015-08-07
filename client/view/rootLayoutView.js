/**
 * The root layout view of the app. That is, the top-level view that controls the application.
 */
'use strict';

var Marionette = require('@shim/marionette'),
    NavRegion = require('@region/navRegion'),
    NavLoginButtonView = require('@view/navLoginButtonView'),
    rootLayoutView;

rootLayoutView = Marionette.LayoutView.extend({

    el: 'body',

    /**
     * Set the regions that the root view will control
     */
    regions: {
        navRegion: NavRegion
    },

    /**
     * Initialize and show all of the necessary views for the regions.
     */
    initialize: function() {
        this.navRegion.show(new NavLoginButtonView());
    }

});

module.exports = rootLayoutView;