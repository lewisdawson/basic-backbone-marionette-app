## basic-backbone-marionette-app
A basic application that demonstrates the use of Backbone.Marionette. In addition to it's primary focus of Backbone.Marionette, this app also show-cases the use of:

1. [browserify](http://browserify.org/) - Client-side dependency module loader
1. [bower](http://bower.io/) - Client-side package manager
1. [handlebars](http://handlebarsjs.com/) - HTML templating framework
1. [slinker](https://github.com/lewisdawson/slinker) - Symlinker for browserify and node dependencies--removes the need for relative paths
1. [Bootstrap](http://getbootstrap.com/) - HTML, CSS, and JS framework for simplifying responsive web pages and applications
1. [grunt](http://gruntjs.com/) - Build-time task automation
    1. [grunt-browserify](https://github.com/jmreidy/grunt-browserify) - Manages the browserify dependency lifecycle through grunt
    1. [grunt-bower-concat](https://github.com/sapegin/grunt-bower-concat) - Concatentates Bower packages into a single dependency file
    1. [hbsfy](https://github.com/epeli/node-hbsfy) - Handlebars build-time template compiler
    1. [grunt-contrib-cssmin](https://github.com/gruntjs/grunt-contrib-cssmin) - Used to concatenate CSS files together
    1. [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch) - Runs tasks whenever configured files are changed

## Installation

### Npm
First, run `npm install`:

```bash
$ cd <root-of-app>
$ npm install
```

The `npm install` command pulls down all of the necessary node dependences. In addition, it also symlinks the `js` directory folders to eliminate the need for relative paths.

### Client Artifact Creation
To generate the client artifacts, use the Grunt task runner:

```bash
$ cd <root-of-app>
$ grunt build
```

This will generate the `clientScript/dist/client.js` artifact as well as the `clientStyle/dist/client.css` artifact. These artifacts are used by the `index.html` page to run the Marionette application.

## Running
Before running for the first time, make sure to execute the _Installation_ instructions. Once you've done that, you can run the application by executing `npm start`:

```bash
$ cd <root-of-app>
$ npm start
```

### Grunt Watch
During development, you'll frequently make changes to files. This will require would require you to run `grunt build` each time to see your changes reflected. Enter Grunt Watch. You can use the `grunt watch` command to have Grunt automatically execute the `grunt build` task for you every time it detects that there were changes that were JavaScript or CSS changes saved. It will rebuild all of the necessary assets automagically. Upon completion, you can simply refresh your browser and the changes will be reflected. Neat!

To use, get the application running (see _Running_). Once your application is running, open a new console window and execute `grunt watch`:

```bash
$ cd <root-of-app>
$ grunt watch
```

### Troubleshooting

###### My `npm install` keeps failing
Try deleting the `node_modules` directory and then running `npm install` again.