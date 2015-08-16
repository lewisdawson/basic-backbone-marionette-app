/**
 * The root layout view of the app. That is, the top-level view that controls the application.
 */
'use strict';

var Marionette = require('@shim/marionette'),
    NavbarRegion = require('@navbar/navbarRegion'),
    ContentRegion = require('@content/contentRegion'),
    rootLayoutView;

rootLayoutView = Marionette.LayoutView.extend({

    el: '.viewport-container',

    initialize: function(options) {
        console.log('initialize rootLayoutView.');
    },

    /**
     * Set the regions that the root view will control
     */
    regions: {
        navbarRegion: NavbarRegion,
        contentRegion: ContentRegion
    }

});

module.exports = rootLayoutView;