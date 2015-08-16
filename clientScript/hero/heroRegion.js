/**
 * The region used to control the hero section.
 */
'use strict';

var Marionette = require('@shim/marionette'),
    HeroView = require('@hero/heroView'),
    region;

region = Marionette.Region.extend({

    el: '.hero',

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
        this.show(new HeroView());
    }

});

module.exports = region;