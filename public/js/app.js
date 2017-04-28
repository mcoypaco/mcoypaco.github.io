var app = angular.module('app', [
	'ui.router',
	'ngMaterial',
]);
app
	.config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', '$qProvider', function($urlRouterProvider, $stateProvider, $mdThemingProvider, $qProvider){
		$qProvider.errorOnUnhandledRejections(false);
		/*
		 * Set the default theme to Indigo - Amber.
		 */
		$mdThemingProvider.theme('default')
			.primaryPalette('light-blue')
			.accentPalette('pink')

		$mdThemingProvider.theme('dark-blue').backgroundPalette('light-blue').dark();

		/*
		 * Fallback route when a state is not found.
		 */
		$urlRouterProvider
			.otherwise('/page-not-found')
			.when('', '/');
		
		$stateProvider
			.state('page-not-found',{
				url: '/page-not-found',
				templateUrl: '/app/templates/views/page-not-found.view.html',
			})
			.state('home', {
				url: '/',
				views: {
					'': {
						templateUrl: '/app/templates/views/main.view.html',
						// controller: 'mainViewController as mainVm',
					},
					'content-container@home': {
						templateUrl: '/app/templates/views/content-container.view.html',
					},
					'left-sidenav@home':{
						templateUrl: '/app/templates/views/left-sidenav.view.html',
						controller: 'leftSidenavController as vm',
					},
					'content@home':{
						templateUrl: '/app/templates/views/content.view.html',
						controller: 'contentController as vm',
					},
					'profile@home': {
						templateUrl: '/app/templates/profile.template.html',
					},
					'social@home': {
						templateUrl: '/app/templates/social.template.html',
					},
					'about@home': {
						templateUrl: '/app/templates/about.template.html',
					},
				},
			})
	}]);
app
	.factory('Profile', function(){
		var factory = this;

		factory.name = 'Marco Christian Paco';

		factory.occupation = 'Web Developer';

		factory.info = [
			{
				label: 'Email',
				icon: 'mdi-email',
				value: 'marcopaco1230@gmail.com',
			},
			{
				label: 'Contact Number',
				icon: 'mdi-phone',
				value: '(049) 543-1704',
			},
			{
				label: 'Address',
				icon: 'mdi-map-marker',
				value: 'Santa Rosa City, Laguna, PH',
			},
		];

		factory.links = [
			{
				label: 'Github',
				icon: 'mdi-github-circle',
				url: 'https://github.com/mcoypaco'
			},
			{
				label: 'LinkedIn',
				icon: 'mdi-linkedin-box',
				url: 'https://www.linkedin.com/in/marco-christian-paco-256182117/'
			},
		]

		factory.about = 'Marco Christian Paco is a young web developer based in the Philippines. He has earned a degree in Bachelor of Science in Information Technology at Polytechnic University of the Philippines. He is currently working at Personiv Manila as an IT Senior Executive. His work focuses on developing  applications that would ease, improve and save costs for internal business issues.';

		return factory;
	});
app
	.controller('contentController', ['Profile', function(Profile){
		var vm = this;

		vm.profile = Profile;
	}]);
app
	.controller('leftSidenavController', ['Profile', function(Profile){
		var vm = this;

		vm.profile = Profile;
	}]);