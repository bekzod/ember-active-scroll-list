import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('active-scroll-list', 'Integration | Component | active scroll', {
  integration: true
});

test('it renders', function(assert) {

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#active-scroll-list}}
      template block text
    {{/active-scroll-list}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
