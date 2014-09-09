(function () {
  "use strict";

  angular.module('app', ['ngRoute'])
    .config(['$routeProvider', '$locationProvider',  function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl:'partials/home.html'
        })
        .otherwise('/');
      //$locationProvider.html5Mode(true);
    }]);
})();

