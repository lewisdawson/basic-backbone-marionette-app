/**
 * The region used to control the content section.
 */
'use strict';

var Marionette = require('@shim/marionette'),
    region;

region = Marionette.Region.extend({

    el: '.content',

    /**
     * Initialize the region and show all of Views.
     */
    initialize: function() {
        console.log('initialize contentRegion.');
    }

});

module.exports = region;