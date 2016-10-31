/* global Quill */

import Ember from "ember";
import layout from "../templates/components/quill-editor";

const { computed, run, get, set } = Ember;

export default Ember.Component.extend({
  layout,
  editor: null,

  options: computed(function() {
    return {theme: "snow"}
  }),

  didInsertElement() {
    const self = this;
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
