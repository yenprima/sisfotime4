angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
})

.controller('HomeCtrl', function($scope) {
	$scope.getDetailBuku = function(){
	};
})

.controller('SemuaBuku', function($scope,$http) {
	$scope.baseUrl = 'http://wisata-kalteng.eu5.org/aplikasi/';

	$scope.baseImageUrl = 'http://hiwata.freevar.com/images/';

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
			'http://wisata-kalteng.eu5.org/aplikasi/get-wisata.php?id=4'
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

.controller('MapCtrl', function($scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {
    $ionicPlatform.ready(function() {
         
        $ionicLoading.show({
            template: '<ion-spinner icon="bubbles"></ion-spinner><br/>Acquiring location!'
        });
         
        var posOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };
        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var lat  = position.coords.latitude;
            var lon = position.coords.longitude;
             
            var myLatlng = new google.maps.LatLng(lat, lon);
             
            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };          
             
            var map = new google.maps.Map(document.getElementById("map"), mapOptions);          
             
            $scope.map = map;   
            $ionicLoading.hide();           
             
        }, function(err) {
            $ionicLoading.hide();
            console.log(err);
			alert("map gagal loading");
        });
    });
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
})

.controller('MapController', function($scope, $state, $stateParams, $ionicLoading, $timeout) {
 
 var lat = $stateParams.latitude;
 var long = $stateParams.longitude;
 
 $scope.coba = function(){	
	location.reload();
}

 $scope.peta = function(){
    google.maps.event.addDomListener(window, 'load', function() {
        var myLatlng = new google.maps.LatLng(lat, long);
 
        var mapOptions = {
            center: myLatlng,
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
 
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
		
        navigator.geolocation.getCurrentPosition(function(pos) {
            map.setCenter(new google.maps.LatLng(lat, long));
            var myLocation = new google.maps.Marker({
                position: new google.maps.LatLng(lat, long),
                map: map,
                title: "Lokasi Saya"
            });
        });		
		
        $scope.map = map;			
    }); 
 }
 
$timeout(function() {
	//$scope.coba();
}, 3000)
 
$scope.peta();

});