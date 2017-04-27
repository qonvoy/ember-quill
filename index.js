/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-quill',
  options: {
    nodeAssets: {
      quill: function() {
        if (!process.env.EMBER_CLI_FASTBOOT) {
          return {
            import: [
              'dist/quill.min.js',
              'dist/quill.min.js.map',
              'dist/quill.snow.css',
            ],
          };
        } else {
          return {};
        }
      },
    },
  },
  isDevelopingAddon: function() {
    return true;
  },
};
