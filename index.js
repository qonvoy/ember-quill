"use strict";

module.exports = {
  name: "ember-quill",
  options: {},
  isDevelopingAddon: function() {
    return true;
  },
  included(app) {
    this._super.included(app);
    app.import("node_modules/quill/dist/quill.snow.css");
  }
};
