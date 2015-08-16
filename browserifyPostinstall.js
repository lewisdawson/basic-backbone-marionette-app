/**
 * A Node module used to add symlinks for Browserify resources.
 */
'use strict';

var slinker = require('slinker'),
    path = require('path');

slinker.link({
    modules: ['shim', 'dist', 'hero', 'marketingColumns', 'navbar', 'root'],
    modulesBasePath: path.join(__dirname, 'clientScript'),
    symlinkPrefix: '@',
    nodeModulesPath: path.join(__dirname, 'node_modules'),
    onComplete: function() {
        console.log('Symlinks created for Browserify resources.');
    },
    onError: function(error) {
        console.log('Error creating symlinks for Browserify resources! error = ' + error);
    }
});