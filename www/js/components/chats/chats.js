'use strict';

module.exports = angular.module('chats', [])
  .service('ChatsService', require('./chats.service'))
  .controller('ChatsCtrl', require('./chats.controller'))
  .controller('ChatCtrl', require('./chat.controller'));

