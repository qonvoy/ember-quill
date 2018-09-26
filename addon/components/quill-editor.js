import Quill from "quill";
import Component from "@ember/component";
import { computed } from "@ember/object";
import { getOwner } from "@ember/application";
import { htmlSafe } from "@ember/string";

import layout from "../templates/components/quill-editor";

export default Component.extend({
  layout,
  editor: null,

  textChange() {},

  selectionChange() {},

  options: computed(function() {
    return { theme: "snow" };
  }),

  safeValue: computed("value", function() {
    return htmlSafe(this.get("value"));
  }),

  fastboot: computed(function() {
    return getOwner(this).lookup("service:fastboot");
  }),

  didInsertElement() {
    // Don't instantiate Quill if fastboot is detected
    if (this.get("fastboot.isFastBoot")) {
      return;
    }

    const editor = new Quill(this.element, this.get("options"));

    editor.on("text-change", (delta, oldDelta, source) => {
      this.get("textChange")(
        this.get("editor"),
        delta,
        oldDelta,
        source
      );
    });

    editor.on("selection-change", (delta, oldDelta, source) => {
      this.get("selectionChange")(
        this.get("editor"),
        delta,
        oldDelta,
        source
      );
    });

    this.set("editor", editor);
  }
});
