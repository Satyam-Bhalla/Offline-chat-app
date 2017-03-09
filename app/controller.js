app.controller("AuthController", function($scope, $http, $window, $location){
	$('ul.tabs').tabs();

	$scope.login = {
		"username":"",
		"password":""
	}

	$scope.signin = {
		"username":"",
		"password":"",
		"email":"",
	}

	$scope.go_login = function() {
		if ($scope.login.username && $scope.login.password) {
			$http({
				method: "POST",
				url: "api/login.php",
	  			data: $scope.login
	  		})
			.then(function(data, status, headers, config) {
				if (data.data.response) {
					Materialize.toast(data.data.response, 1000,"" ,function() {
						if (data.data.status) {
							$location.path('/chat/')
							$scope.$apply()
						}
					})
				}
			})
		}

		else {
			 Materialize.toast('Something is Empty!', 3000)
		}
	}


	$scope.go_signin = function() {

		if ($scope.signin.username && $scope.signin.password && $scope.signin.email) {
			$http({
				method: "POST",
				url: "api/signin.php",
	  			data: $scope.signin
	  		})
			.then(function(data, status, headers, config) {
				console.log(data)
				if (data.data.response) {
					Materialize.toast(data.data.response, 2000,"" ,function() {
						if (data.data.status) {
							Materialize.toast("Please Wait....", 2000)
							$location.path('/chat/')
							$scope.$apply()
						}
					})
				}
			})
		}

		else {
			if ($scope.signin.email==undefined) {
				Materialize.toast('Oops! The email seems wrong!', 3000)
			}
			else {
			 Materialize.toast('Something is Empty!', 3000)
			}
		}
	}
})



app.controller("ChatController", function($scope, $http, $window, $location){
	$scope.id = 3131
})