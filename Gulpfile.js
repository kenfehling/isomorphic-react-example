var gulp        = require('gulp'),
    browserify  = require('browserify'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    babel       = require('gulp-babel'),
    babelify    = require('babelify'),
    copy        = require('gulp-copy'),
    server      = require('gulp-develop-server'),
    clean       = require('gulp-rimraf'),
    plumber     = require('gulp-plumber'),
    source      = require('vinyl-source-stream'),
    jest        = require('jest-cli');
    //livereload  = require('gulp-livereload');

var paths = {
    scripts: ['src/**/*.js', 'src/**/*.jsx'],
    tests: ['tests/**/*.js'],
    sass: ['src/**/*.s?ss'],
    main_client_script: 'src/main.js',
    main_sass: 'src/styles/main.scss',
    server_file: 'server.js',
    server_path: 'server/',
    build_path: 'build/',
    scripts_build_path: 'build/src/',
    server_build_path: 'build/server/',
    public_path: 'build/server/public/'
};

gulp.task('client:browserify', function () {
    return browserify(paths.main_client_script, {
        debug: true //it's necessary to a source map generate
    })
        .transform(babelify, { stage: 0, optional: ["runtime"] })
        .bundle()
        .pipe(plumber())
        .pipe(source('main.js'))
        .pipe(gulp.dest(paths.public_path));
});

gulp.task('server:babel', ['client:browserify', 'sass', 'views:copy', 'images:copy'], function () {
    gulp.src(paths.scripts)
        .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
        .pipe(babel({ stage: 0, optional: ["runtime"] }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.scripts_build_path));

    return gulp.src(paths.server_path + "**/*.js")
        .pipe(babel({ stage: 0, optional: ["runtime"] }))
        .pipe(gulp.dest(paths.server_build_path));
});

gulp.task('sass', function () {
    return gulp.src([paths.main_sass])
        .pipe(sass())
        .pipe(gulp.dest(paths.public_path));
});

gulp.task('views:copy', function() {
    return gulp.src('server/views/index.ejs')
        .pipe(copy(paths.build_path));
});

gulp.task('images:copy', function() {
    return gulp.src('images/**')
        .pipe(copy(paths.public_path));
});

gulp.task('server:run', ['server:babel'], function() {
    server.listen( { path: paths.server_build_path + paths.server_file } );
});

gulp.task('server:restart', ['server:babel'], function() {
    server.restart();
    //livereload();
});

gulp.task('clean', function() {
    return gulp.src([paths.build_path], { read: false }).pipe(clean());
});

gulp.task('default', ['clean'], function() {
    gulp.start('server:run');
});

gulp.task('jest', function(done) {
    return jest.runCLI({config : { rootDir: 'app' }}, ".", function() {
        done();
    });
});
