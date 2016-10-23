/* global Quill */

import Ember from "ember";
import layout from "../templates/components/quill-editor";

import { run } from Ember;

export default Ember.Component.extend({
  layout,

  didInsertElement() {
    const options = {
      theme: "snow",
      modules: {
        toolbar: [
          [{header: [2, 3, 4, false]}],
          ["bold", "italic", "underline", "strike"],
          [{"color": []}],
          [{"list": "ordered"}, {"list": "bullet"}],
          [{"indent": "-1"}, {"indent": "+1"}],
          [{"align": []}],
          ["link"],
          ["clean"]
        ]
      }
    }
    const editor = new Quill(this.$().get(0), options);
    editor.on("text-change", function() {
      run.debounce(this, () => {
        this.attrs.update(quill.root.innerHtml);
      }, 250);
    })
  }
});
