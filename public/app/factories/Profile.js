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