'use strict';

var Backbone = require('@shim/backbone'),
    Marionette = require('@shim/marionette'),
    template = require('@marketingColumns/marketingColumnsTemplate.hbs');

module.exports = Marionette.ItemView.extend({

    template: template

});