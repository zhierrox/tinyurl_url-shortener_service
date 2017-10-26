angular.module("tinyurlApp")
	.controller("homeController", ["$scope", "$http", "$location",
		function($scope, $http, $location) {
			$scope.submit = function() {
				$http.post("/api/v1/urls", {
					longUrl: $scope.longUrl
				})
				.success(function (data) {
					//go to "localhost:3000/urls/A"
					$location.path("/urls/" + data.shortUrl);
				});
			}
		}]);