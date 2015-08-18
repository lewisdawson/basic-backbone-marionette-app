'use strict';

var Backbone = require('@shim/backbone'),
    Marionette = require('@shim/marionette'),
    template = require('@account/signin/signinTemplate.hbs');

module.exports = Marionette.ItemView.extend({

    template: template,

    onRender: function() {
        console.log('signinView rendered.');
    },

    onDestroy: function() {
        console.log('signinView destroyed.');
    }

});