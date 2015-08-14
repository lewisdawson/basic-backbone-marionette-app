'use strict';

var Backbone = require('@shim/backbone'),
    Marionette = require('@shim/marionette'),
    template = require('@template/heroTemplate.hbs');

module.exports = Marionette.ItemView.extend({

    template: template

});