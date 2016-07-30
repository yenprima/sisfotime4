angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('HomeCtrl', function($scope) {
	$scope.getDetailBuku = function(){
	};
})

.controller('SemuaBuku', function($scope,$http) {
	$scope.baseUrl = 'http://wisata-kalteng.eu5.org/aplikasi/';
	$scope.baseImageUrl = 'http://wisata-kalteng.eu5.org/aplikasi/gambar/';
	$scope.getSemuaBuku = function(){
		$scope.showLoader = true;
		$http.get(
			$scope.baseUrl+'get-wisata.php'
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

.controller('DetailWisata', function($scope, $stateParams,$http) {
	var kode = $stateParams.kode;
	$scope.baseUrl = 'http://wisata-kalteng.eu5.org/aplikasi/';
	$scope.getDetailBuku = function(){
		$scope.showLoader = true;
		$http.get(
			$scope.baseUrl+'get-wisata.php',
			{
				params : {
					id : kode
				}				
			}
		).success(function(data){
			$scope.wisata = data;
			$scope.showLoader = false;
		}).error(function(){
			alert("Gagal tersambung ke server !");
			$scope.showLoader = false;
		});
	};
	$scope.getDetailBuku();
});