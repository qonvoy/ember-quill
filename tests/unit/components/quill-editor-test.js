import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import Service from '@ember/service';

module('Unit | Component | quill-editor', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const component = this.owner.factoryFor('component:quill-editor').create();
    assert.ok(component);
  });

  test('should initially have a null editor', function(assert) {
    const component = this.owner.factoryFor('component:quill-editor').create();

    assert.equal(
      component.get('editor'),
      null
    );
  });

  test('should use snow theme by default', function(assert) {
    const component = this.owner.factoryFor('component:quill-editor').create();

    assert.deepEqual(
      component.get('options'),
      { theme: 'snow' }
    );
  });

  test('should return value attr as htmlSafe', function(assert) {
    const inputValue = '<h1>Expected value</h1>';

    const component = this.owner.factoryFor('component:quill-editor').create({
      value: inputValue,
    });

    assert.equal(
      component.get('safeValue'),
      inputValue
    );
  });

  test('should compute fastboot presence', function(assert) {
    const FastbootServiceStub = Service.extend({
      isFastboot: true,
    });

    this.owner.register('service:fastboot', FastbootServiceStub);

    const component = this.owner.factoryFor('component:quill-editor').create();

    assert.deepEqual(
      new FastbootServiceStub,
      component.get('fastboot')
    );
  });
});
