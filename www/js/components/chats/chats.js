(function() {
  'use strict';

  module.exports = angular.module('chats', [])
    .factory('ChatsService', require('./chats.service'))
    .controller('ChatsCtrl', require('./chats.controller'))
    .controller('ChatCtrl', require('./chat.controller'));
}());

