"use strict";

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // Add options here
  });

  app.import("node_modules/quill/dist/quill.js");
  app.import("node_modules/quill/dist/quill.min.js.map");
  app.import("node_modules/quill/dist/quill.snow.css");
  app.import("vendor/shims/quill.js");

  return app.toTree();
};
