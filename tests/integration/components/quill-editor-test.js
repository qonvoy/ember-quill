import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Quill from 'quill';
import Service from '@ember/service';
import { getOwner } from '@ember/application'; 

moduleForComponent('quill-editor', 'Integration | Component | quill editor', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{quill-editor}}`);

  assert.equal(this.$().text().trim(), '');
});

test('it attaches the editor on render', function(assert) {
  this.set('editor', null);

  this.render(hbs`{{quill-editor editor=editor}}`);

  assert.ok(
    this.$('.ql-editor').length,
    'The Quill DOM node for the editor should be present'
  );

  assert.ok(
    this.get('editor') instanceof Quill,
    'The editor attribute should be an instance of the Quill editor'
  );
});

test('it does not attach editor on render if fastboot present', function(assert) {
  const FastbootServiceStub = Service.extend({
    isFastBoot: true,
  });

  getOwner(this).register('service:fastboot', FastbootServiceStub);
  
  this.set('editor', null);

  this.render(hbs`{{quill-editor editor=editor}}`);

  assert.equal(
    this.get('editor'),
    null
  );
});

test('it sends textChange action', function(assert) {
  const done = assert.async();
  const expectedText = 'Some new content';
  const htmlStringToInsert = `<h1>${expectedText}</h1>`;

  this.on('textChange', (editor, delta, oldDelta, source) => {
    assert.ok(
      editor instanceof Quill,
      'The editor passed should be an instance of Quill'
    );

    assert.deepEqual(
      delta.ops,
      [
        {
          insert: expectedText,
        },
        {
          attributes: {
            header: 1
          },
          retain: 1
        }
      ],
      'The delta should be correct'
    );

    assert.ok(oldDelta, 'The old delta should be passed');

    assert.equal(
      source,
      'user',
      'The source of the change should be "user"'
    );

    done();
  });

  this.render(hbs`{{quill-editor textChange=(action 'textChange')}}`);

  this.$('.ql-editor')[0].innerHTML = htmlStringToInsert;
});

test('it sends selectionChange action', function(assert) {
  const done = assert.async();

  this.on('selectionChange', (editor, delta, oldDelta, source) => {
    assert.ok(
      editor instanceof Quill,
      'The editor passed should be an instance of Quill'
    );

    assert.ok(
      delta.constructor.name === 'Range',
      'The delta should be a Range object'
    );

    assert.equal(oldDelta, null, 'The old delta should be passed');

    assert.equal(
      source,
      'user',
      'The source of the change should be "user"'
    );

    done();
  });

  this.render(hbs`{{quill-editor selectionChange=(action 'selectionChange')}}`);

  this.$('.ql-editor').focus();
});
