var gulp       = require('gulp'),
    browserify = require('gulp-browserify'),
    sass       = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

var paths = {
    scripts: ['app/**/*.js', 'app/**/*.jsx'],
    sass: ['app/**/*.s?ss'],
    main_script: 'app/main.js',
    main_sass: 'app/styles/main.scss',
    output: 'public'
};

gulp.task('scripts', function () {
    return gulp.src([paths.main_script])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest(paths.output));
});

gulp.task('sass', function () {
    return gulp.src([paths.main_sass])
        .pipe(sass())
        .pipe(gulp.dest(paths.output));
});

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['scripts']);
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('default', ['scripts', 'sass']);
