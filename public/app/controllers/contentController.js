app
	.controller('contentController', ['Profile', function(Profile){
		var vm = this;

		vm.profile = Profile;
	}]);