// Karma configuration
// Generated on Fri Mar 03 2017 08:22:10 GMT+0100 (Środkowoeuropejski czas stand.)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'basic/exercise6/script.js',
      'basic/exercise6/scriptSpec.js',
      'basic/exercise11/script.js',
      'basic/exercise11/scriptSpec.js',
      'functions/exercise1/script.js',
      'functions/exercise1/scriptSpec.js',
      'functions/exercise2/script.js',
      'functions/exercise2/scriptSpec.js',
      'functions/exercise3/script.js',
      'functions/exercise3/scriptSpec.js',
      'functions/exercise4/script.js',
      'functions/exercise4/scriptSpec.js',
      'functions/exercise5/script.js',
      'functions/exercise5/scriptSpec.js',
      'functions/exercise6/script.js',
      'functions/exercise6/scriptSpec.js',
      'functions/exercise7/script.js',
      'functions/exercise7/scriptSpec.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
