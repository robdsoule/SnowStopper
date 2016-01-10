(function() {
  'use strict';

  function DashController($scope, ChatsService) {
    this.testIt = "Test Value";
    console.log('DashCtrl ChatsService?', ChatsService);
  }

  module.exports = ['$scope', 'ChatsService', DashController];
}());

