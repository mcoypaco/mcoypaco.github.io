export default {
  firstName: 'Marco Christian',
  middleName: 'Santillan',
  lastName: 'Paco',
  occupation: 'Web Developer',
  email: 'marcopaco1230@gmail.com',
  address: 'Santa Rosa City, Laguna, PH, 4026',
  github: 'https://github.com/mcoypaco',
  linkedin: 'https://www.linkedin.com/in/marco-christian-paco-256182117',
  workExperiences: [
    {
      company: 'Personiv',
      logo: 'img/personiv.png',
      position: 'Web Developer',
      jobDescription: `Responsible For Developing Web Applications; Design Landing Pages & Optimize Search Engine Markteing Campaigns.`,
      dateStart: new Date('07-29-2015'),
      dateEnd: new Date('01-01-2019'),
      projects: [
        {
          name: 'Scorecard',
          description: 'Used to evaluate employees weekly and monthly overall performance.',
          icon: 'mdi-account-details'
        },
        {
          name: 'Project 40 Hours',
          description: `Reduced the weekly work hours to 40 by tracking the employees' actual productive work hour.`,
          icon: 'mdi-timer',
        },
        {
          name: 'Portal',
          description: 'Handles posts, announcements, and room reservations of Personiv.',
          icon: 'mdi-laptop'
        },
        {
          name: 'File Repository',
          description: `An web based repository for company's documentations.`,
          icon: 'mdi-folder'
        },
        {
          name: 'Productivity and Quality Report',
          description: `Generates weekly and monthly productivity and quality reports of the team used for employees' performance incentives.`,
          icon: 'mdi-chart-bar'
        },
        {
          name: 'Inventory',
          description: 'Manages stocks, repairs, pulled out IT equipments, and purchase orders of Personiv Manila.',
          icon: 'mdi-format-list-numbers'
        }
      ]
    }
  ],
  skills: [
    {
      category: 'Essentials',
      items: [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'MySQL',
        'Apache',
        'Git',
      ],
    },
    {
      category: 'Frameworks',
      items: [
        'AngularJS',
        'Angular',
        'Vue.js',
        'Laravel'
      ]
    },
    {
      category: 'Component Libraries',
      items: [
        'Angular Material',
        'Vuetify'
      ]
    },
    {
      category: 'Others',
      items: [
        'Firebase',
        'Linux',
        'Sass',
        'Pusher'
      ]
    }
  ],
  educations: [
    {
      course: 'BS Information Technology',
      logo: 'img/pup.png',
      school: 'Polytechnic University of the Philippines Santa Rosa Campus'
    }
  ]
}