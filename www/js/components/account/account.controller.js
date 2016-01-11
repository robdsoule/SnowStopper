(function() {
  'use strict';

  function AccountController($scope) {
    this.settings = {
      enableFriends: true
    };
  }

  module.exports = ['$scope', AccountController];
}());

