'use strict';

var Backbone = require('@shim/backbone'),
    Marionette = require('@shim/marionette'),
    template = require('@template/navLoginButtonTemplate.hbs');

module.exports = Marionette.ItemView.extend({

    model: new Backbone.Model({
        name: 'Tim...'
    }),

    template: template

});

