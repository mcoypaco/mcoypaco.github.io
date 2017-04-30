const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')

   // Vendor CSS
   .styles([
        'public/css/vendor/angular-material.css',
        'public/css/vendor/angular-timeline.css',
        'public/css/vendor/materialdesignicons.css',
   	], 'public/css/vendor.css')

   	// Vendor Scripts
   .scripts([
        'public/js/vendor/angular.js',
        'public/js/vendor/moment.js',
        'public/js/vendor/angular-aria.js',
        'public/js/vendor/angular-animate.js',
   		'public/js/vendor/angular-material.js',
   		'public/js/vendor/angular-moment.js',
   		'public/js/vendor/angular-ui-router.js',
   		'public/js/vendor/angular-timeline.js',
   	], 'public/js/vendor.js')

   .sass('resources/assets/sass/app/app.scss', 'public/css/application.css')

	// App Scripts
   .scripts([
        'public/app/*.js',
   		'public/app/factories/**/*.js',
        'public/app/controllers/**/*.js',
   	], 'public/js/app.js')
