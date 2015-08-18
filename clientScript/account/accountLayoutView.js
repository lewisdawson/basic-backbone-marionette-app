'use strict';

var Marionette = require('@shim/marionette'),
    SigninRegion = require('@account/signin/signinRegion'),
    template = require('@account/accountTemplate.hbs'),
    view;

view = Marionette.LayoutView.extend({

    template: template,

    showAllRegions: function() {
        this.addRegions({
            signinRegion: SigninRegion
        });
    },

    emptyAllRegions: function() {
        // TODO: make generic
        //this.emptyRegions();
        this.getRegion('signinRegion').empty();
    }

});

module.exports = view;