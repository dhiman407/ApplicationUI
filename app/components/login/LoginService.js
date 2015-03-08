DgSecureApp.factory('LoginService',function($rootScope,$http){
	var loginService = {};

	loginService.login = function(params){
		var url = $rootScope.dgUIUrl + 'Login';
		return $http.get(url,{
			params: params
		}).then(function(result){
			return result.data;
		});
	};
	return loginService;
});