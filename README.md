# Ember-Quill
==============================================================================

[![build status](https://gitlab.com/noppo/ember-quill/badges/master/build.svg)](https://gitlab.com/noppo/ember-quill/commits/master)



Installation
------------------------------------------------------------------------------

* `ember install ember-quill`

## Component example
```javascript
import Ember from 'ember';

export default Ember.Component.extend({
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
