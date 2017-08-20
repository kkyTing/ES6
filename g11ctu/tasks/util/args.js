/*yargs是解决如何处理命令行参数*/
import yargs from 'yargs';

const args = yargs
/*开发环境*/
  .option('production',{
    boolean:true,
    default:false,
    describe:'min all scripts'
  })
/*监听*/
  .option('watch',{
    boolean:true,
    default:false,
    describe:'watch all files'
  })
/*详细信息*/
  .option('verbose',{
    boolean:true,
    default:false,
    describe:'log'
  })
/*映射压缩和源文件*/
  .option('sourcemaps',{
    describe:'force the creation of sroucemaps'
  })
/*接口*/
  .option('port',{
    string:true,
    default:8080,
    describe:'server port'
  })
/*输入的命令行的内容和字符串作为解析*/
  .argv

export default args;

