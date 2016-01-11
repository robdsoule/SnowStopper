'use strict';

function MainConfig($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'js/components/menu/menu.html'
  })

  // Each tab has its own nav history stack:
  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'js/components/dash/dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
    url: '/chats',
    views: {
      'tab-chats': {
        templateUrl: 'js/components/chats/chats.html',
        controller: 'ChatsCtrl'
      }
    }
  })

  .state('tab.chat-detail', {
    url: '/chats/:chatId',
    views: {
      'tab-chats': {
        templateUrl: 'js/components/chats/chat.html',
        controller: 'ChatCtrl'
      }
    }
  })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'js/components/account/account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');
  // position tabs on bottom for Android as well
  $ionicConfigProvider.tabs.position('bottom');
}

module.exports = ['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', MainConfig];

