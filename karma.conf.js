module.exports = function(config) {
  config.set({

    basePath: './',

    files: [
      'assets/dependencies/javascripts.bundle.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'assets/app/javascripts.bundle.js',
      'app/**/*.spec.js',
    ],

    frameworks: ['mocha', 'chai'],
    browsers: ['PhantomJS'],
    reporters: ['mocha'],
    singleRun: false,
    autoWatch: true,
    colors: true,
    port: 9876,

    // LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
  });
};
