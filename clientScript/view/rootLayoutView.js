/**
 * The root layout view of the app. That is, the top-level view that controls the application.
 */
'use strict';

var Marionette = require('@shim/marionette'),
    NavRegion = require('@region/navRegion'),
    HeroRegion = require('@region/heroRegion'),
    MarketingColumns = require('@region/marketingColumnsRegion'),
    rootLayoutView;

rootLayoutView = Marionette.LayoutView.extend({

    el: '.viewport-container',

    /**
     * Set the regions that the root view will control
     */
    regions: {
        navRegion: NavRegion,
        heroRegion: HeroRegion,
        marketingColumns: MarketingColumns,
    }

});

module.exports = rootLayoutView;