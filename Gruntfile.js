'use strict';

module.exports = function (grunt) {
    var config = {
        scripts: 'client',
        dist: 'dist',
        distScripts: 'dist/client'
    };

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        config: config,
        browserify: {
            dist: {
                src: '<%= config.scripts %>/{,*/}*.*',
                dest: '<%= config.distScripts %>/client.js'
            },
            options: {
                transform: ['hbsfy']
            }
        }
    });

    grunt.registerTask('build', [
        'browserify'
    ]);

};