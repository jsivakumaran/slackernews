slackerNews.controller('LinkCtrl', function LinkCtrl($scope, $state, LinkFactory){
  $scope.links = LinkFactory.links;
  $scope.LinkFactory = LinkFactory;
  $scope.addThenHome = function(){
    LinkFactory.addLink();
    $state.go('newsList');
  }

})
