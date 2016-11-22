(function(){
  'use strict';

  angular
    .module('eCommerce')
    .config(configure);
  configure.$inject = ['$stateProvider', '$urlRouterProvider'];

  function configure($stateProvider, $urlRouterProvider) {
    
        $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('login', {
          url: '/',
          templateUrl: 'views/login.html',
          controller: 'LoginController',
          controllerAs: 'loginCtrl'
        })
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'HomeController',
          controllerAs: 'homeCtrl'
        });
  };
})();