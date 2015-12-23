import Ember from 'ember';
import ActiveScrollListMixin from '../../../mixins/active-scroll-list';
import { module, test } from 'qunit';

module('Unit | Mixin | active scroll list');

// Replace this with your real tests.
test('it works', function(assert) {
  let ActiveScrollListObject = Ember.Object.extend(ActiveScrollListMixin);
  let subject = ActiveScrollListObject.create();
  assert.ok(subject);
});
