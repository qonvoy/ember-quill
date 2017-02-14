import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('quill-editor', 'Integration | Component | quill editor', {
  integration: true
});

test('it renders quill container and toolbar', function(assert) {
  this.render(hbs`{{quill-editor}}`);

  assert.ok(this.$().find('.ql-toolbar').length, 'Quill container was inserted');
  assert.ok(this.$().find('.ql-container').length, 'Quill toolbar was inserted');
});
