bestRestaurants.controller('RestaurantsCtrl', function RestaurantsCtrl($scope) {
  $scope.restaurants = [];
  $scope.addRestaurant = function() {
    $scope.restaurants.push({ name: $scope.restaurantName, address: $scope.address, restaurantDesc: $scope.restaurantDesc, cuisine: $scope.cuisineName, rating: $scope.rating, price: $scope.price });
    $scope.restaurantName = null;
    $scope.address = null;
    $scope.restaurantDesc = null;
    $scope.cuisineName = null;
    $scope.rating = null;
    $scope.price = null;
  };

  $scope.deleteRestaurant = function(restaurant) {
    var index = $scope.restaurants.indexOf(restaurant);
    $scope.restaurants.splice(index, 1);
  };

  $scope.predicate = 'name';
  $scope.reverse = true;
  $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
  };
});
