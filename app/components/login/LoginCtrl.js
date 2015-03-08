DgSecureApp.controller('LoginCtrl',function($scope,$location,LoginService){
	$scope.credentials = {
		username:'',
		password:''
	};
	$scope.login = function(credentials){
		var params = {
			json:{"UserName":credentials.username,"Password":credentials.password}
		};
		LoginService.login(params).then(function(response){
			console.log(response);
			$location.path('/home');
		},function(){

		});
	}
})