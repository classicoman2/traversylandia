const gulp = require("gulp");
const browserify = require("browserify");
const babelify = require("babelify");

const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");
 
const htmlmin = require("gulp-htmlmin");

const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
 
const del = require("del");

//Si empro async o await en el JS, llavors se produira un error de regenatorRuntime si no faig això
const regeneratorRuntime = require("regenerator-runtime");


// To prevent rewriting the source and build folder locations
const paths = {
    source: "./src",
    build: "../server/public"
};
 
	
function javascriptBuild() {
  return (
      browserify({
          entries: [`${paths.source}/js/script.js`],
          transform: [babelify.configure({ presets: ["@babel/preset-env"] })]
      })
          .bundle()
          .pipe(source("js/script.js"))
          // Turn it into a buffer!
          .pipe(buffer())
          // And uglify
          .pipe(uglify())
          .pipe(gulp.dest(`${paths.build}`))
  );
}

// Write our html task in a seperate function
function htmlBuild() {
  return gulp
      .src(`${paths.source}/*.html`)
      .pipe(htmlmin())
      .pipe(gulp.dest(paths.build));
}

function cssBuild() {
  return gulp
      .src(`${paths.source}/**/css/*.css`)
      .pipe(postcss([cssnano()]))
      .pipe(gulp.dest(`${paths.build}`));
}


function cleanup() {
    // Simply execute del with the build folder path
    return del([paths.build], {force:true});
}

 
// We have to change our exposed task, these functions can be ran in parallel as they do not depend on eachother.
// If your functions should run synchronously use gulp.series()

 

// We have to run the cleanup task first, after which we can run the build tasks 
exports.build = gulp.series(cleanup, gulp.parallel(javascriptBuild, htmlBuild, cssBuild));