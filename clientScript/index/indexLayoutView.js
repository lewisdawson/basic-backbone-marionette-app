'use strict';

var Marionette = require('@shim/marionette'),
    HeroRegion = require('@hero/heroRegion'),
    MarketingColumnsRegion = require('@marketingColumns/marketingColumnsRegion'),
    template = require('@index/indexTemplate.hbs'),
    indexLayoutView;

indexLayoutView = Marionette.LayoutView.extend({

    template: template,

    el: '.content',

    //regions: {
    //    heroRegion: HeroRegion,
    //    marketingColumnsRegion: MarketingColumnsRegion
    //},

    initialize: function(options) {
        //this.attachElContent(template);
        //this.el = options.el;
    },

    showRegions: function() {
        this.addRegions({
            heroRegion: HeroRegion,
            marketingColumnsRegion: MarketingColumnsRegion
        });
    }

});

module.exports = indexLayoutView;