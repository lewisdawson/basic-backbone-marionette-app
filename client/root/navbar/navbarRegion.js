/**
 * The region used to control the navbar section.
 */
'use strict';

var Marionette = require('@shim/marionette'),
    NavbarView = require('@root/navbar/navbarView'),
    region;

region = Marionette.Region.extend({

    el: '.navbar',

    /**
     * Initialize the region and show all of Views.
     */
    initialize: function() {
        this.initializeViews();
    },

    /**
     * Initializes all of the views associated with the region.
     */
    initializeViews: function() {
        this.show(new NavbarView());
    }

});

module.exports = region;