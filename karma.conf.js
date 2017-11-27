module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'recursion/exercise3/*.js',
    ],
    preprocessors: {
      'recursion/exercise3/*.js': ['babel'],
    },
    babelPreprocessor: {
      options: {
        "presets": ["es2015"],
        "plugins": ["transform-es2015-modules-umd"]
      }
    },
    exclude: [],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}