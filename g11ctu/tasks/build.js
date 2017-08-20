
//这个文件的任务是把所有包的任务关联起来
import gulp from 'gulp';

/*引入处理包的顺序的包*/
import gulpSequence from 'gulp-sequence';

gulp.task('build',gulpSequence('clean','css','pages','scripts',['browser','serve']));
