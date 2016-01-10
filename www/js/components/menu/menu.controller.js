(function() {
  'use strict';

  function MenuController($scope, ChatsService) {
    // this instead of $scope for controller as notation in the template
    this.dash = "Dash";
    console.log('Menu Controller accessing ChatsService: ', ChatsService.get(1));
  }

  module.exports = ['$scope', 'ChatsService', MenuController];
}());

