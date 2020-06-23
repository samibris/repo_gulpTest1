const gulp = require('gulp');
const concat = require('gulp-concat'); /* concatenates files */
const terser = require('gulp-terser'); /*compressed es6+ code */
const { src, dest, watch} = require('gulp');

const jsPath = 'js/**/*.js';

/*src = source file
  dest = output file  */
function jsTask(){
    return src(jsPath)
    .pipe(concat('jsfunctions.js')) /* concatenated file */
    .pipe(terser())
    .pipe(dest('concat/js')); /* output directory */
}

/* watch for changes to js files */
exports.default = function(){
    watch(jsPath, jsTask);
}