/**
 * The root layout view of the app. That is, the top-level view that controls the application.
 */
'use strict';

var Marionette = require('@shim/marionette'),
    NavbarRegion = require('@navbar/navbarRegion'),
    HeroRegion = require('@hero/heroRegion'),
    MarketingColumns = require('@marketingColumns/marketingColumnsRegion'),
    rootLayoutView;

rootLayoutView = Marionette.LayoutView.extend({

    el: '.viewport-container',

    /**
     * Set the regions that the root view will control
     */
    regions: {
        navbarRegion: NavbarRegion,
        heroRegion: HeroRegion,
        marketingColumns: MarketingColumns
    }

});

module.exports = rootLayoutView;