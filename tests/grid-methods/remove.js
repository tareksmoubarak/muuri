(function (window) {

  var Muuri = window.Muuri;

  QUnit.module('Grid methods - remove');

  QUnit.test('Muuri instance should have a remove method', function (assert) {
    assert.expect(1);
    assert.strictEqual(typeof Muuri.prototype.remove, 'function');
  });

})(this);