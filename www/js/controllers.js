angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('HomeCtrl', function($scope) {
	$scope.getDetailBuku = function(){
	};
})
.controller('SemuaBuku', function($scope,$http) {
	$scope.baseUrl = 'http://hiwata.freevar.com/client/';
	$scope.baseImageUrl = 'http://hiwata.freevar.com/images/';
	alert("Gagal tersambung ke server !");
	$scope.getSemuaBuku = function(){
		$scope.showLoader = true;
		$http.get(
			$scope.baseUrl+'get-semua-buku.php'
		).success(function(data){
			$scope.semua_buku = data;
			$scope.showLoader = false;
		}).error(function(){
			alert("Gagal tersambung ke server !");
			$scope.showLoader = false;
		});
	};
	$scope.getSemuaBuku();
})
.controller('users', function($scope,$http) {
	$scope.getUsers = function(){
		$scope.showLoader = true;
		$http.get(
			'http://jsonplaceholder.typicode.com/users'
		).success(function(data){
			$scope.users = data;
			$scope.showLoader = false;
		}).error(function(){
			alert("Gagal tersambung ke server !");
			$scope.showLoader = false;
		});
	};
	$scope.getUsers();
})