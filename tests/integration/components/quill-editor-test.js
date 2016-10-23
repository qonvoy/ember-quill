import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('quill-editor', 'Integration | Component | quill editor', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{quill-editor}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#quill-editor}}
      template block text
    {{/quill-editor}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
