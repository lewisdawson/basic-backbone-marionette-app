'use strict';

var Marionette = require('@shim/marionette'),
    HeroRegion = require('@index/hero/heroRegion'),
    MarketingColumnsRegion = require('@index/marketingColumns/marketingColumnsRegion'),
    template = require('@index/indexTemplate.hbs'),
    indexLayoutView;

indexLayoutView = Marionette.LayoutView.extend({

    template: template,

    showAllRegions: function() {
        this.addRegions({
            heroRegion: HeroRegion,
            marketingColumnsRegion: MarketingColumnsRegion
        });
    },

    emptyAllRegions: function() {
        // TODO: make generic
        //this.emptyRegions();
        this.getRegion('heroRegion').empty();
        this.getRegion('marketingColumnsRegion').empty();
    }

});

module.exports = indexLayoutView;