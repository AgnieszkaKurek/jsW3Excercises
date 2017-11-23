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
       'functions/exercise7/scriptSpec.js',
       'functions/exercise8/script.js',
       'functions/exercise8/scriptSpec.js',
       'functions/exercise9/script.js',
       'functions/exercise9/scriptSpec.js',
       'functions/exercise11/script.js',
       'functions/exercise11/scriptSpec.js',
       'functions/exercise12/script.js',
       'functions/exercise12/scriptSpec.js',
       'functions/exercise13/script.js',
       'functions/exercise13/scriptSpec.js',
       'functions/exercise14/script.js',
       'functions/exercise14/scriptSpec.js',
       'functions/exercise15/script.js',
       'functions/exercise15/scriptSpec.js',
       'functions/exercise16/script.js',
       'functions/exercise16/scriptSpec.js',
       'functions/exercise17/script.js',
       'functions/exercise17/scriptSpec.js',
       'functions/exercise19/script.js',
       'functions/exercise19/scriptSpec.js',
       'functions/exercise20/script.js',
       'functions/exercise20/scriptSpec.js',
       'functions/exercise21/script.js',
       'functions/exercise21/getPossibleSubsetsTestsHelpers.js',
       'functions/exercise21/scriptSpec.js',
       'functions/exercise22/script.js',
       'functions/exercise22/scriptSpec.js',
       'functions/exercise23/script.js',
       'functions/exercise23/scriptSpec.js',
       'functions/exercise25/script.js',
       'functions/exercise25/scriptSpec.js',
       'functions/exercise26/script.js',
       'functions/exercise26/scriptSpec.js',
       'functions/exercise27/script.js',
       'functions/exercise27/scriptSpec.js',
       'functions/exercise29/script.js',
       'functions/exercise29/scriptSpec.js',
       'recursion/exercise1/script.js',
       'recursion/exercise1/scriptSpec.js'

     
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
