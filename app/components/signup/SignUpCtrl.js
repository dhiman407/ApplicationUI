DgSecureApp.controller('SignUpCtrl',function($scope,$location){
	$scope.credentials = {
		username:'',
		password:''
	};
	$scope.login = function(credentials){
		var params = {
			json:{"UserName":credentials.username,"Password":credentials.password}
		};
		
	}
})