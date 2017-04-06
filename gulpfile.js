  // Include gulp
  var gulp = require('gulp');

  // Include Plugins in order of use
  var rename = require('gulp-rename');
  var sourcemaps = require('gulp-sourcemaps');
  var babel = require('gulp-babel');
  var vulcanize = require('gulp-vulcanize');
  var crisper = require('gulp-crisper');
  var webserver = require('gulp-webserver');
  var opn = require('opn');
  var server = {
  	host: 'localhost',
  	port: '8001'
  }

  // Babelize ES6 to ES5
  gulp.task('babel', function() {
  	return gulp.src([
  		'src/js/*.es6.js'
  		])
  		.pipe(rename(function (path) {
  			var base = path.basename.substring(0, path.basename.lastIndexOf("."));
      	path.basename = base + "-es5";
  		}))
  		.pipe(sourcemaps.init())
  		.pipe(babel({
  				presets: ['es2015']
  		}))
  		.pipe(sourcemaps.write('.'))
  		.pipe(gulp.dest('src/js'))
  });

  gulp.task('build', function() {
    return gulp.src('src/tadkit-viewer.html')
      .pipe(vulcanize({
        stripComments: true,
        inlineScripts: true,
        inlineCss: true
  		}))
      .pipe(crisper())
      .pipe(gulp.dest('dist'));
    });

  gulp.task('webserver', function() {
    gulp.src( '.' )
  	.pipe(webserver({
  	  host:             server.host,
  	  port:             server.port,
  	  livereload:       false,
  	  directoryListing: false
  	}));
  });

  gulp.task('openbrowser', function() {
    opn( 'http://' + server.host + ':' + server.port + '/index.html');
  });

  // Watch Files For Changes
  gulp.task('watch', function() {
  	gulp.watch([
  		'src/**/*'
  	], [
  		'babel',
  		'build'
  	]);
  });

  // Default Task
  gulp.task('default', [
    'babel',
  	'build',
  	'webserver',
  	'openbrowser',
  	'watch'
  ]);
