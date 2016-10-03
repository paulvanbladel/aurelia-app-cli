'use strict';

System.register(['./app-console-configuration'], function (_export, _context) {
  "use strict";

  var AppConsoleConfiguration;
  function configure(aurelia, callback) {
    var config = new AppConsoleConfiguration(aurelia);

    if (typeof callback === 'function') {
      callback(config);
    } else {}
    config._apply();
  }

  _export('configure', configure);

  return {
    setters: [function (_appConsoleConfiguration) {
      AppConsoleConfiguration = _appConsoleConfiguration.AppConsoleConfiguration;
    }],
    execute: function () {}
  };
});