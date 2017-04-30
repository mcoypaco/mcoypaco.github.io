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
					'work-experince@home': {
						templateUrl: '/app/templates/work-experince.template.html',
					},
					'skills@home': {
						templateUrl: '/app/templates/skills.template.html',
					},
					'publications@home': {
						templateUrl: '/app/templates/publications.template.html',
					},
					'education@home': {
						templateUrl: '/app/templates/education.template.html',
					},
					'volunteer-work@home': {
						templateUrl: '/app/templates/volunteer-work.template.html',
					},
					'interests@home': {
						templateUrl: '/app/templates/interests.template.html',
					},
					'references@home': {
						templateUrl: '/app/templates/references.template.html',
					},
				},
			})
	}]);