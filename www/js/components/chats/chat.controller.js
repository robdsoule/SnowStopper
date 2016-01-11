(function() {
  'use strict';

  function ChatController($scope, $stateParams, ChatsService) {
    this.chatter = ChatsService.get($stateParams.chatId);
  }

  module.exports = ['$scope', '$stateParams', 'ChatsService', ChatController];
}());

