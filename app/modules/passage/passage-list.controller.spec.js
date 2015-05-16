'use strict';

describe('PassageIndexController', function() {
  var $controller;

  beforeEach(module('app.passage'));

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('initializes with empty passages', function() {
    var ctrl = $controller('PassageIndexController', { $scope: {} });
    expect(ctrl.passages).to.be.an('array');
    expect(ctrl.passages).to.be.have.length(0);
  });
});
