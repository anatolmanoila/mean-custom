(function () {
  "use strict";

  angular.module('app')
    .controller('MainCtrl', ['$scope', 'postsService', function ($scope, postsService) {
      $scope.posts = postsService.posts;

      $scope.addPost = function () {
        if ($scope.title === '') {
          return;
        }
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link,
          upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
      };

      $scope.incrementUpvotes = function (po) {
        po.upvotes += 1;
      };


    }]);
})();
