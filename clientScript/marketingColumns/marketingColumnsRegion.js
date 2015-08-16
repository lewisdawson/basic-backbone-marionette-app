/**
 * The region used to control the marketing columns section.
 */
'use strict';

var Marionette = require('@shim/marionette'),
    MarketingColumnsView = require('@marketingColumns/marketingColumnsView'),
    region;

region = Marionette.Region.extend({

    el: '.marketing-columns',

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
        this.show(new MarketingColumnsView());
    }

});

module.exports = region;