/*引入gulp这个包*/
import gulp from 'gulp';
/*gulp语句中做if判断*/
import gulpif from 'gulp-if';
/*gulp语句中处理文件拼接*/
import concat from 'gulp-concat';
/*打包过程webpack包*/
import webpack from 'webpack';
/*因为*/
import gulpWebpack from 'webpack-stream';
/*文件重命名做标志的包*/
import named from 'vinyl-named';
/*文件修改后浏览器自动的更新功能--热更新*/
import livereload from 'gulp-livereload';
/*文件信息流*/
import plumber from 'gulp-plumber';
/*对文件重命名*/
import rename from 'gulp-rename';
/*压缩js或css文件的包*/
import uglify from 'gulp-uglify';
/*命令行工具输出的一些包*/
import {log,colors} from 'gulp-util';
/*命令行参数进行解析的包*/
import args from './util/args';


/*创建gulp任务*/
/*任务名称为scripts*/
gulp.task('scripts',()=>{
  /*打开的index.js文件*/
  return gulp.src(['app/js/index.js'])
    .pipe(plumber({
      errorHandle:function(){
        /*错误的处理*/
      }
    }))
      /*文件重新命名*/
    .pipe(named())
      /*webpack进行重新编译*/
    .pipe(gulpWebpack({
      module:{
        loaders:[{
          test:/\.js$/,
          loader:'babel'
        }]
      }
    }),null,(err,stats)=>{
      log(`Finished '${colors.cyan('scripts')}'`,stats.toString({
        chunks:false
      }))
    })
      /*文件的路径*/
    .pipe(gulp.dest('server/public/js'))
    .pipe(rename({
      basename:'cp',
      extname:'.min.js'
    }))
    .pipe(uglify({compress:{properties:false},output:{'quote_keys':true}}))
    .pipe(gulp.dest('server/public/js'))
      /*判断命令行是否有监听功能,如果有的话那么当这个文件变换的时候,开始热更新*/
    .pipe(gulpif(args.watch,livereload()))
})
