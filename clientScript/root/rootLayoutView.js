/**
 * The root layout view of the app. That is, the top-level view that controls the application.
 */
'use strict';

var Marionette = require('@shim/marionette'),
    NavbarRegion = require('@navbar/navbarRegion'),
    template = require('@root/rootLayoutTemplate.hbs'),
    rootLayoutView;

rootLayoutView = Marionette.LayoutView.extend({

    el: '.viewport-container',

    template: template,

    /**
     * Set the regions that the root view will control
     */
    regions: {
        navbarRegion: NavbarRegion
    }

});

module.exports = rootLayoutView;