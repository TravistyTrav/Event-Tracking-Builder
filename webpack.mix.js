let mix = require('laravel-mix');

mix.setPublicPath('./')
    .sass('assets/sass/app.scss', 'dist/css')
    .sass('assets/sass/popup.scss', 'dist/css')
    .js('assets/js/background.js', 'dist/js')
    .js('assets/js/popup.js', 'dist/js').vue({ version: 3 })
    .copy('assets/img/', 'dist/img')
    .options({
        processCssUrls: false
    });