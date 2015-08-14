/**
 * The configuration used for Grunt task automation.
 */
'use strict';

var path = require('path');

/**
 * The configuration for the `browserify` task.
 */
function browserify() {
    return {
        dist: {
            src: ['<%= config.scripts %>/{,*/}*.*', '!<%= config.distScripts %>/{,*/}*.*'],
            dest: '<%= config.distScripts %>/client.js'
        },
        options: {
            transform: ['hbsfy']
        }
    };
}

/**
 * The configuration for the `bower_concat` task.
 */
function bowerConcat() {
    console.log('called bowerConcat()');
    return {
        all: {
            dest: '<%= config.distScripts %>/bower-lib.js',
            cssDest: '<%= config.distStyles %>/bower.css',
            exclude: [
                'jquery'
            ],
            bowerOptions: {
                relative: false
            }
        }
    };
}

/**
 *
 */
function cssMin() {
    console.log('called cssMin()');
    return {
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1
        },
        target: {
            files: {
                '<%= config.distStyles %>/client.css': ['<%= config.styles %>/*.css', '!<%= config.distStyles %>/*.css',
                                                        '<%= config.distStyles %>/bower.css']
            }
        }
    };
}

/**
 * The common configuration for all grunt tasks.
 */
function config() {
    var config = {};

    config.scripts = 'clientScript';
    config.styles = 'clientStyle';
    config.dist = 'dist';
    config.distScripts = path.join(config.scripts, config.dist);
    config.distStyles = path.join(config.styles, config.dist);

    return config;
}

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        config: config(),
        bower_concat: bowerConcat(),
        browserify: browserify(),
        cssmin: cssMin()
    });

    grunt.registerTask('build', [
        'bower_concat',
        'browserify',
        'cssmin'
    ]);

};