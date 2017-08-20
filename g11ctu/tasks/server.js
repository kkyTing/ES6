import gulp from 'gulp';
import gulpif from 'gulp-if';
/*启动脚本作为服务器功能*/
import liveserver from 'gulp-live-server';
import args from './util/args';

gulp.task('serve',(cb)=>{

    /*如果不是处于监听状态下就直接返回一个回调*/
    if(!args.watch) return cb();
    /*创建一个服务器*/
    var server = liveserver.new(['--harmony','server/bin/www']);
    /*接着启动一个服务器*/
    server.start();
    /*监听项目下面所有的.js和.ejs文件*/
    gulp.watch(['server/public/**/*.js','server/views/**/*.ejs'],function(file){
      /*通知服务器 当文件做改变的时候,你就做相对应的改变*/
      server.notify.apply(server,[file]);
    })

    gulp.watch(['server/routes/**/*.js','server/app.js'],function(){
      /*监听了变换后,让服务重启,所以调用server.start*/
      server.start.bind(server)()
    });

})
