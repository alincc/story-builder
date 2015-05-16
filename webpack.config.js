'use strict';

var glob = require("glob");
var path = require('path');
var webpack = require('webpack');

var PATHS = {
  resolve: function(subPath) {
    return path.join(__dirname, subPath);
  },

  glob: function(pattern) {
    return glob.sync(PATHS.resolve(pattern));
  },

  dependencies: {
    stylesheets: function() {
      return [PATHS.resolve('app/dependencies/stylesheets.js')];
    },

    javascripts: function() {
      return [PATHS.resolve('app/dependencies/javascripts.js')];
    },
  },

  app: {
    stylesheets: function() {
      var componentStyles = PATHS.glob('app/components/**/*.scss');
      var moduleStyles = PATHS.glob('app/modules/**/*.scss');
      return componentStyles.concat(moduleStyles);
    },

    javascripts: function() {
      var moduleDefinitions = PATHS.glob('app/**/*.module.js');
      var sharedComponents = PATHS.glob('app/components/**/!(*.module|*.spec).js');
      var moduleComponents = PATHS.glob('app/modules/**/!(*.module|*.spec).js');

      return moduleDefinitions
        .concat(sharedComponents)
        .concat(moduleComponents);
    },
  },
};

module.exports = {
  context: PATHS.resolve('app'),

  entry: {
    'dependencies/stylesheets': PATHS.dependencies.stylesheets(),
    'dependencies/javascripts': PATHS.dependencies.javascripts(),
    'app/stylesheets': PATHS.app.stylesheets(),
    'app/javascripts': PATHS.app.javascripts(),
  },

  output: {
    path: PATHS.resolve('assets'),
    filename: '[name].bundle.js',
  },

  module: {
    loaders: [
      { test: /\.(css|scss)$/, loader: 'style!css!sass' },
      { test: /\.(eot|png|svg|ttf|woff|woff2)$/, loader: 'url' },
    ],
  },
};
