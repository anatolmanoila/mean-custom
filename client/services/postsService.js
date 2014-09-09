(function () {
  "use strict";

  angular.module('app')
    .factory('postsService', [function () {

      var factory = {
        posts: [
          {title: 'post 1', upvotes: 5},
          {title: 'post 2', upvotes: 2},
          {title: 'post 3', upvotes: 15},
          {title: 'post 4', upvotes: 9},
          {title: 'post 5', upvotes: 4}
        ]
      };
      return factory;
    }]);
})();