/**
 * Shims the jQuery module both as a required module and as a DOM window module.
 */
'use strict';

var jquery = require('jquery');

// Shim the jQuery module for dependencies that require it to load (for example, Bootstrap)
if(window) {
    window.jQuery = jquery;
}

module.exports = jquery;