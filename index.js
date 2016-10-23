/* jshint node: true */
"use strict";

module.exports = {
  name: "ember-quill",
  options: {
    nodeAssets: {
      quill: {
        import: [
          "dist/quill.min.js",
          "dist/quill.min.js.map",
          "dist/quill.snow.css"
        ]
      }
    }
  },
  isDevelopingAddon: function() {
    return true;
  }
};
