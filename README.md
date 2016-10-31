# Ember-Quill

This README outlines the details of collaborating on this Ember addon.

## Installation

* `ember install ember-quill`

## Component example
```javascript
import Ember from 'ember';

const { Component, inject, computed, get, run } = Ember;


export default Component.extend({
  session: inject.service(),
  placeholder: "",

  options: {
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
  },

  actions: {
    updateText(editor) {
      this.attrs.update(editor.root.innerHTML);
    }
  }
});

```

## Template example
```hbs
{{quill-editor value=value options=options textChange=(action "updateText")}}
```

## License
The `ember-quill` is under the Apache 2.0 license
