(function () {
  "use strict";

  angular.module('app')
    .controller('PostsCtrl', ['$scope','$stateParams','postsService', function ($scope,$stateParams, postsService) {

      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });

    }]);
})();
