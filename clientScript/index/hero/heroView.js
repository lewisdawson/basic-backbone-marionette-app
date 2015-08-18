'use strict';

var Backbone = require('@shim/backbone'),
    Marionette = require('@shim/marionette'),
    template = require('@index/hero/heroTemplate.hbs');

module.exports = Marionette.ItemView.extend({

    template: template,

    onDestroy: function() {
        console.log('heroView destroyed!');
    }

});