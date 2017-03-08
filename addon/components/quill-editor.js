/* global Quill */

import Ember from "ember";
import layout from "../templates/components/quill-editor";

const { Component, computed, get, set } = Ember;

export default Component.extend({
  layout,
  editor: null,

  options: computed(function() {
    return {theme: "snow"};
  }),

  safeValue: computed(function() {
    return Ember.String.htmlSafe(get(this, "value"));
  }),

  // didUpdateAttrs() {
  //   this._super(...arguments);
  //   // get(this, "editor").clipboard.dangerouslyPasteHTML()
  // }

  didInsertElement() {
    const self = this;
    const html = this.$().get(0);
    const editor = new Quill(this.$().get(0), get(this, "options"));

    editor.on("text-change", (delta, oldDelta, source) => {
      self.sendAction("textChange", get(self, "editor"), delta, oldDelta, source);
    });
    editor.on("selection-change", (delta, oldDelta, source) => {
      self.sendAction("selectionChange", get(self, "editor"), delta, oldDelta, source);
    });

    set(this, "editor", editor);
  }
});
