'use strict';

var Marionette = require('@shim/marionette'),
    SigninView = require('@account/signin/signinView'),
    region;

region = Marionette.Region.extend({

    el: '.account-action',

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
        this.show(new SigninView());
    }

});

module.exports = region;