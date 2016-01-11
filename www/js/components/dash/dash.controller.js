(function() {
  'use strict';

  function DashController($scope, LINK, ChatsService) {
    this.testIt = "Test Value";
    console.log('DashCtrl ChatsService?', ChatsService);
    console.log('DashCtrl Constant LINK test', LINK);
  }

  module.exports = ['$scope', 'LINK', 'ChatsService', DashController];
}());

