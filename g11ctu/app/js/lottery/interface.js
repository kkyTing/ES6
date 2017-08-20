/**
 * 接口
 * */

/*这里引入jquery,如果不想引入jquery的话可以使用fetch,但是fetch不稳定*/
import $ from 'jquery';

 class Interface{
    /*
    *getOmit表示遗漏的数据
    * issue 表示当前期号
    *
    */
    getOmit(issue){
        /*保留this指向问题*/
        var self = this;
        /*
        *  使用Promise方法实现异步操作
        * */
        return new Promise( (resolve,reject)=>{
            $.ajax({
                url:'/get/omit',
                data:{
                    issue:issue
                },
                dataType:'json',
                success:function(res){
                    self.setOmit(res.data);
                    resolve.call(self,res)
                },
                error:function(err){
                    resolve.call(err)
                }
            })
        });
    }



    /*开奖号码的接口*/
    getOpenCode(issue){
        let self = this;
        /* promise有2个参数,成功则有功resolve(解决了),失败用reject(拒接) */
        return new promise( (resolve,reject)=>{
          $.ajax({
              url:'/get/opencode',
              data:{
                  issue:issue
              },
              dataType:'json',
              success(res){
                  /*保留当前开奖的号码*/
                  self.setOpenCode(res.data);
                  resolve.call(self,res);
              },
              error(err){
                  reject.call(err)
              }
          })
        })


    }

    /*获取当前的状态*/
    getState(issue){
        var self = this;
        return new Promise((reslove,reject)=>{
            $.ajax({
                url:'/get/state',
                data:{
                    issue:issue
                },
                dataType:'json',
                success(res){
                    self.setOpenCode(res.data);
                    resolve.call(self,res);
                },
                error(err){
                    reject.call(err);
                }
            })
        })
    }

}

export default Interface;
