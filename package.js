Package.describe({
  name: 'sdenis:aurelia',
  version: '1.0.8',
  // Brief, one-line summary of the package.
  summary: 'This module is just to load Aurelia on Meteor 1.3 using NPM',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stphdenis/meteor-aurelia.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript@0.4.3');
  api.imply('sdenis:static-raw-html@1.0.6');
  api.addFiles('lib/aurelia-init.js');
});

Package.onTest(function(api) {
  api.use('sdenis:aurelia');
  api.use('tinytest');
  api.mainModule('aurelia-tests.js');
});
