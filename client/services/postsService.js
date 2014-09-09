(function () {
  "use strict";

  angular.module('app')
    .factory('postsService', [function () {

      var o = {
        posts: []
      };
      return o;

    }]);
})();