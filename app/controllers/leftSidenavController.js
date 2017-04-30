app
	.controller('leftSidenavController', ['Profile', function(Profile){
		var vm = this;

		vm.profile = Profile;
	}]);