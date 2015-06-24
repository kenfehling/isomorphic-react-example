var gulp        = require('gulp'),
    browserify  = require('browserify'),
    sass        = require('gulp-sass'),
    sourcemaps  = require('gulp-sourcemaps'),
    babel       = require('gulp-babel'),
    babelify    = require('babelify'),
    copy        = require('gulp-copy'),
    server      = require('gulp-develop-server'),
    del         = require('del'),
    plumber     = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    source      = require('vinyl-source-stream'),
    jest        = require('jest-cli');

var paths = {
    scripts: ['app/**/*.js', 'app/**/*.jsx'],
    tests: ['tests/**/*.js'],
    sass: ['app/**/*.s?ss'],
    main_client_script: 'app/main.js',
    main_sass: 'app/styles/main.scss',
    server_file: 'server.js',
    server_path: 'server/',
    build_path: 'build/',
    scripts_build_path: 'build/app/',
    server_build_path: 'build/server/',
    public_path: 'build/server/public/'
};

gulp.task('client:browserify', function () {
    return browserify(paths.main_client_script)
            .transform(babelify, { stage: 0, optional: ["runtime"] })
            .bundle()
        .pipe(plumber())
        .pipe(source('main.js'))
        .pipe(gulp.dest(paths.public_path));
});

gulp.task('all:babel', function() {
    return gulp.src(paths.scripts)
        .pipe(babel({ stage: 0, optional: ["runtime"] }))
        .pipe(gulp.dest(paths.scripts_build_path));
});

gulp.task('server:babel', function () {
    return gulp.src(paths.server_path + paths.server_file)
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

gulp.task('server:run', ['all:babel', 'server:babel'], function() {
    server.listen( { path: paths.server_build_path + paths.server_file } );
});

gulp.task('server:restart', ['all:babel', 'server:babel'], function() {
    server.restart();
});

gulp.task('server:watch', ['default'], function() {
    gulp.watch([paths.server_path + "**/*.js"], ['server:restart']);
});

// May be something wrong with this:
gulp.task('clean', function() {
    return del([paths.build_path]);
});

gulp.task('default', function() {
    runSequence(
        //'clean',
        ['client:browserify', 'sass'],
        ['views:copy', 'images:copy'],
        'server:run'
    );
});

gulp.task('watch', ['default', 'server:watch'], function () {
    gulp.watch(paths.scripts, ['client:browserify']);
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('jest', function(done) {
    return jest.runCLI({config : { rootDir: 'app' }}, ".", function() {
        done();
    });
});
