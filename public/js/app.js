var app = angular.module('app', [
	'ui.router',
	'ngMaterial',
	'angular-timeline',
	'angularMoment',
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

		factory.experiences = [
			{
				logo: '/img/personiv.png',
				position: 'IT Senior Executive',
				company: 'Personiv',
				from: 'July 2015',
				present: true,
				description: 'Personiv is a BPO company who offers a wide range of services from Recruiting, Graphic Design, Digital Services, Customer Care, and Back Office Services.',
				projects: [
					{
						icon: 'mdi-timer',
						title: 'Project 40 Hours',
						description: 'Aims to justify the lessening of weekly work hours up to 40 hours by tracking the employees actual productive work hour.',
					},
					{
						icon: 'mdi-account-multiple-plus',
						title: 'Appraisal',
						description: 'Helps the management to analyze employees perfomance subjected for a salary appraisal.',
					},
					{
						icon: 'mdi-laptop',
						title: 'Personiv Portal',
						description: 'Handles posts, announcements, and room reservations of Personiv Manila.',
					},
					{
						icon: 'mdi-clipboard-text',
						title: 'Revolve Workflow',
						description: 'A task tracker for the artists of Revolve department.',
					},
					{
						icon: 'mdi-folder',
						title: 'File Repository',
						description: 'An easy way to access company files through a browser.',
					},
					{
						icon: 'mdi-chart-bar',
						title: 'Productivity and Quality Report',
						description: 'Generates weekly and monthly productivity and quality reports of the services offered by the company. It also evaluates the total productivity of an employee.',
					},
					{
						icon: 'mdi-format-list-numbers',
						title: 'Inventory',
						description: 'Manages stocks, repairs, pulled out IT equipments, and purchase orders of Personiv Manila.',
					},
				],
			},
		];

		factory.publications = [
			{
				image: '/img/edited/ezpayplus.png',
				name: 'EZPayPlus',
				release: 'June 2017',
				description: 'HRIS, Payroll and Bookkeeping done the easy way.',
			},
		]

		factory.volunteerWorks = [
			{
				logo: '/img/marimar.png',
				position: 'Photo Editor',
				company: 'Marimar Santillan Photography',
				from: 'December 2014',
				present: true,
				description: 'Caters photography services for schools and events.',
			}
		]

		factory.skills = [
			{
				category: 'Front End',
				items: ['HTML', 'CSS', 'SASS', 'Bootstrap', 'Javascript', 'jQuery', 'AngularJS', 'Material Design', 'Photoshop'],
			},
			{
				category: 'Back End',
				items: ['PHP', 'Laravel', 'MySQL', 'Apache'],
			},
			{
				category: 'Tools',
				items: ['Github.com', 'Mailtrap.io', 'Pusher.com'],
			},
		];

		factory.educations = [
			{
				image: '/img/pup.png',
				degree: 'BS Information Technology',
				school: 'Polytechnic University of the Philippines Santa Rosa Campus',
			},
		]

		factory.interests = [
			{
				icon: 'mdi-bike',
				name: 'Cycling',
			},
			{
				icon: 'mdi-music',
				name: 'Music',
			}
		]

		factory.references = [
			{
				name: 'Alex Coroza',
				position: 'Software Developer',
				company: 'Getz Clinical',
			},
			{
				name: 'Jhai Talingdan',
				position: 'Head - IT Department',
				company : 'Personiv',
			},
			{
				name: 'Ainsley Limgenco',
				position: 'Head - IT Department',
				company : 'Personiv',
			},
		]

		return factory;
	});
app
	.controller('contentController', ['Profile', function(Profile){
		var vm = this;

		vm.profile = Profile;

		vm.present = new Date();
	}]);
app
	.controller('leftSidenavController', ['Profile', function(Profile){
		var vm = this;

		vm.profile = Profile;
	}]);