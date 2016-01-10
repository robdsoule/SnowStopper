(function() {
  'use strict';

  require('angular');
  require('ionic');

  require('./components/account/account');
  require('./components/chats/chats');
  require('./components/dash/dash');
  require('./components/menu/menu');

  module.exports = angular.module('main', [
    'ionic',
    'firebase',
    'account',
    'chats',
    'dash',
    'menu'
  ])
  .config(require('./router'))
  .run(require('./app-main'));
}());

