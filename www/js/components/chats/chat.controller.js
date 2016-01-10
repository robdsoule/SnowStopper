(function() {
  'use strict';

  function ChatController($scope, $stateParams, ChatsService) {
    $scope.chat = ChatsService.get($stateParams.chatId);
  }

  module.exports = ['$scope', '$stateParams', 'ChatsService', ChatController];
}());

