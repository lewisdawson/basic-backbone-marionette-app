/**
 * Adds symlinks for the browserify resources.
 */
'use strict';

var slinker = require('slinker'),
    path = require('path');

slinker.link({
    modules: ['shim', 'view', 'region', 'template'],
    modulesBasePath: path.join(__dirname, 'client'),
    symlinkPrefix: '@',
    nodeModulesPath: path.join(__dirname, 'node_modules'),
    onComplete: function() {
        console.log('Symlinks created for Browserify resources.');
    },
    onError: function(error) {
        console.log('Error creating symlinks for Browserify resources! error = ' + error);
    }
});