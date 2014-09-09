(function () {
  "use strict";

  angular.module('app', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

       $stateProvider
         .state('home', {
           url: '/home',
           templateUrl:'partials/home.html',
           controller:'MainCtrl'
         })
         .state('posts', {
           url:'/posts/{id}',
           templateUrl:'partials/posts.html',
           controller:'PostsCtrl'
         });

        $urlRouterProvider.otherwise('home');
      }]);
})();

