(function() {
  function vendorModule() {
    "use strict";

    return {
      "default": self["quill"],
      __esModule: true,
    };
  }

  define("quill", [], vendorModule);
})();
