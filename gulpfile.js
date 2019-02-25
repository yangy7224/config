/**
 * Created by yiyang1990 on 2019/2/25.
 */
const gulp = require('gulp');
const gulpBabel = require("gulp-babel");
const gulpMinify = require('gulp-minify');

/** 默认任务。执行gulp或gulp default触发
 **/
gulp.task('default', async() => {

})

/** 默认任务。执行gulp或gulp default触发
 **/
gulp.task('build', async() => {
    gulp.src('./src/index.js')
        .pipe(gulpBabel())
        .pipe(gulpMinify())
        .pipe(gulp.dest('dist'));
})