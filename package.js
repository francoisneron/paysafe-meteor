Package.describe({
  name: 'francoisneron:paysafe-meteor',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Paysafe.js and Node-Paysafe brought to meteor',
  // URL to the Git repository containing the source code for this package.
  git: "https://github.com/francoisneron/paysafe-meteor.git",
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({ "NodeNetBanxSDK": "2.0.2" });

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');
  if (api.export) api.export('PAYSAFEMETEOR');
  api.addFiles('paysafe_server.js', 'server');
});

Package.on_test(function(api) {
  api.use(['tinytest','francoisneron:paysafe-meteor']);
  api.add_files([ "tests/server.js" ], 'server');
});
