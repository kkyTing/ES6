
/*
*   基本信息
* */

    import $ from 'jquery';

    //申明类
    class Base{

        initPlayList(){
            this.play_list.set('r2',{
                bonus:6,
                tip:'从01-11中任选2个或多个号码,所选号码与开奖号码任意两个号码相同,即中奖6元',
                name:'任二'
            })
            .set('r3',{
                bonus:19,
                tip:'从01-11中任选3个或多个号码,所选号码与开奖号码任意两个号码相同,即中奖19元',
                name:'任三'
            })
            .set('r4',{
                bonus:19,
                tip:'从01-11中任选4个或多个号码,所选号码与开奖号码任意两个号码相同,即中奖6元',
                name:'任四'
            })
            .set('r5',{
                bonus:19,
                tip:'从01-11中任选4个或多个号码,所选号码与开奖号码任意两个号码相同,即中奖6元',
                name:'任五'
            })
            .set('r6',{
                bonus:19,
                tip:'从01-11中任选4个或多个号码,所选号码与开奖号码任意两个号码相同,即中奖6元',
                name:'任六'
            })
            .set('r6',{
                bonus:19,
                tip:'从01-11中任选4个或多个号码,所选号码与开奖号码任意两个号码相同,即中奖6元',
                name:'任五'
            })
            .set('r7',{
                bonus:19,
                tip:'从01-11中任选4个或多个号码,所选号码与开奖号码任意两个号码相同,即中奖6元',
                name:'任七'
            })
            .set('r8',{
                bonus:19,
                tip:'从01-11中任选4个或多个号码,所选号码与开奖号码任意两个号码相同,即中奖6元',
                name:'任八'
            })
        }


        initNumber(){
            for(let i = 0; i<12; i++){
                this.number.add(''+1).padStart(2,'0');
            }
        }


        addCodeItem(code,type,typeName,count){
            let self = this;
            /*字符串模板*/
            const tpl = `
                <li>
                    <div>
                        <b>${typeName}${count}>1?'复式':'单式'</b>
                        <b class="em">${code}</b>
                        [${count}注,<em class="code-list-money">${count2}</em>元]
                    </div>
                </li>
            `;
            $(self.cart_el).append(tpl);
            self.getTotal();
        }


        getCount(){
            let self = this;
            let active = $('.boll_list .btn-bell-active').length;
            let count = self.computerCount(active,self,cur_play);
            let range = self.computerBonus(active,self.cur_play);
            let money = count *2;
            let win1 = range[0]-money;
            let win2 = range[1]-money;
            let tpl;
            let c1 = (win1<0 && win2<0)?Math.abs(win1):win1;
            let c2 = (win1<0 && win2<0)?Math.abs(win2):win1;
            if(count === 0){
                tpl = `您选了 <b class="red">${count}</b>注,共<b class="red">${count*2}元</b>`
            }else if(range[0]===range[1]){
                /*如果最大盈利与最小盈利都相等的话*/



            }else {
                tpl = ``



            }
            $('.sel_info').html(tpl);
        }


        /*计算所有金额*/
        getTotal(){

            


            


        }


        /*生成随机数*/
        getRandom(num){
            let arr = [],index;
            /*把一个集合转成真正的数组*/
            let number = Array.from(this.number);
            while ( num -- ){
                index = Number.parseInt(Math.random()*number.length)
                arr.push(number[index]);
                number.splice(index,1)

            }
            return arr.join(' ');
        }



        //随机事件
        getRandomCode(e){
            e.preventDefault();
            let num = e.currentTarget.getAttribute('count');
            let play = tbis.cur_play.match(/\d+/g)[0];
            let self = this;
            if(num === '0'){
                $(self.cart_el).html('');
            }else {
                for(let i=0; i<num; i++){
                    self.addCodeItem(self.getRandom(play) );
                }
            }
        }




    }



    export default Base;







