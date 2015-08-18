'use strict';

var Backbone = require('@shim/backbone'),
    Marionette = require('@shim/marionette'),
    template = require('@root/navbar/navbarViewTemplate.hbs');

module.exports = Marionette.ItemView.extend({

    model: new Backbone.Model({
        companyName: 'Example Project'
    }),

    template: template

});