'use strict';

var Backbone = require('@shim/backbone'),
    Marionette = require('@shim/marionette'),
    template = require('@index/marketingColumns/marketingColumnsTemplate.hbs');

module.exports = Marionette.ItemView.extend({

    template: template,

    onDestroy: function() {
        console.log('marketingColumnsView destroyed!');
    }

});