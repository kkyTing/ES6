
    /*
    *   导出就用export  导入就用import
    * */

    export let num = 123;

    // 私有模块不能被使用
    export function test(){
        console.log('test');
    }

    export class Hello{
        test(){
         console.log('class');
        }
    }


    // 导出这些模块的话一般像下面这样命名  这样可以方便别人改名字
    export default {
        num,
        test,
        Hello
    }

