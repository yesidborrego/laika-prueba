const mix = require('laravel-mix');

mix.styles([
    'resources/assets/css/fonts.css',
    'resources/assets/css/laika.css',
    'resources/assets/css/lightslider.min.css',
 ], 'public/css/styles.css')
//  .scripts([
//      'resources/assets/js/lightslider.min.js',
//  ], 'public/js/template.js')
 .js('resources/js/app.js', 'public/js')
 .sass('resources/sass/app.scss', 'public/css/app.css');