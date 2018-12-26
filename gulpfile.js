var gulp         = require('gulp'),
    uglify       = require('gulp-uglifyjs'),
    autoprefixer = require('gulp-autoprefixer'),
    del          = require('del'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache');



var toDelete = [
    'dist',
]
var jsFiles = [
    // 'src/js/oneplayer.js',
    // 'src/js/twoplayers.js',
    'src/js/menu.js'
]
var cssFiles = [
    'src/css/style.css'
]
var imgFiles =[
    'src/img/**/*'
]
var buildCss = [
    'src/css/style.min.css'
]
var buildJs =[
    'src/js/oneplayer.js',
    'src/js/twoplayers.js',
    'src/js/menu.min.js'
]
var buildHtml = [
    'src/pages/**/*',
]
var buildAudio = [
    'src/audio/**/*'
]



gulp.task('styles', function() {
    var stream = gulp.src(cssFiles)
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true }))
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('src/css'));
    return stream;
});
gulp.task ('clean', function() {
    return del(toDelete);
});
gulp.task('scripts', function() {
    for (var i=0; i<jsFiles.length; i++) {
        var stream = gulp.src(jsFiles[i])
            .pipe(rename({suffix: '.min'}))
            .pipe(uglify())
            .pipe(gulp.dest('src/js'));
    }
        return stream;

});
gulp.task ('clearcache', function() {
    return cache.clearAll();
});
gulp.task ('img', function() {
    var stream = gulp.src(imgFiles)
        .pipe(cache(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            une: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img'));
    return stream;
});
gulp.task('build', function () {
    var buildStyles = gulp.src(buildCss)
        .pipe(gulp.dest('dist/css'));
    var buildScripts = gulp.src(buildJs)
        .pipe(gulp.dest('dist/js'));
    var buildHTML = gulp.src(buildHtml)
        .pipe(gulp.dest('dist/pages'));
    var index = gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
    var buildSounds = gulp.src(buildAudio)
        .pipe (gulp.dest('dist/audio'));
    return buildStyles,buildScripts,buildHTML,index,buildSounds;
});

gulp.watch(cssFiles, gulp.parallel('styles'));
gulp.watch(jsFiles, gulp.parallel('scripts'));
gulp.watch(imgFiles, gulp.series('img', 'clearcache'));

gulp.task('serve', gulp.series('clean',
    gulp.parallel(
        'styles',
        'scripts',
        'img')));

gulp.task('default', gulp.series('serve', 'clearcache', 'build'));