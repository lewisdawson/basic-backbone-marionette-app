/**
 * The region used to control the nav section root view.
 */
'use strict';

var Marionette = require('@shim/marionette'),
    region;

region = Marionette.Region.extend({

    el: '.nav-section'

});

module.exports = region;