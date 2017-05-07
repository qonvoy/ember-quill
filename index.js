/* eslint-env node */
"use strict";

module.exports = {
  name: "ember-quill",
  options: {
    nodeAssets: {
      quill: function() {
        if (process.env.EMBER_CLI_FASTBOOT) {
          return {};
        }
        else {
          return {
            import: [
              'dist/quill.min.js',
              'dist/quill.min.js.map',
              'dist/quill.snow.css',
            ],
          };
        }
      }
    } 
  },
  isDevelopingAddon: function() {
    return true;
  }
};
