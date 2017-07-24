/* global Quill */

import Ember from "ember";
import layout from "../templates/components/quill-editor";

const { Component, computed, getOwner, get, set } = Ember;

export default Component.extend({
  layout,
  editor: null,

  options: computed(function() {
    return {theme: "snow"};
  }),

  safeValue: computed(function() {
    return Ember.String.htmlSafe(get(this, "value"));
  }),

  fastboot: computed(function() {
    return getOwner(this).lookup("service:fastboot");
  }),

  didInsertElement() {
    const self = this;

    // Don't instantiate Quill if fastboot is detected
    if (this.get("fastboot.isFastBoot")) {
      return;
    }

    const editor = new Quill(this.element, get(this, "options"));

    editor.on("text-change", (delta, oldDelta, source) => {
      self.sendAction("textChange", get(self, "editor"), delta, oldDelta, source);
    });
    editor.on("selection-change", (delta, oldDelta, source) => {
      self.sendAction("selectionChange", get(self, "editor"), delta, oldDelta, source);
    });

    set(self, "editor", editor);
  }
});
