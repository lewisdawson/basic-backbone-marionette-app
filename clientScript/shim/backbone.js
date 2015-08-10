/**
 * Shims the backbone module as a common required module. Sets jQuery on the Backbone object.
 */
'use strict';

var $ = require('jquery'),
    Backbone = require('backbone');

Backbone.$ = $;

module.exports = Backbone;