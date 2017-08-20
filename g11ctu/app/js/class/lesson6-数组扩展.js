{

    // Array.of()表示用于将一组值转为数组
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=',arr);   // arr=[3,4,7,9,11]

    //不放任何参数,那么返回的是一个空数组
    let empty=Array.of();
    console.log('empty',empty);

}

{
    let p=document.querySelectorAll('p');
    // Array.from()用于将伪数组和可遍历的对象转为数组
    let pArr=Array.from(p);
    pArr.forEach(function(item){
    console.log(item.textContent);
    });

    console.log(Array.from([1,3,5],function(item){return item*2}));
}

{
    //fill()：fill方法使用给定值，填充一个数组，用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。
    console.log('fill-7',[1,'a',undefined].fill(7));
    console.log('fill,pos',['a','b','c'].fill(7,1,3));
}

{

    /*
    * entries(),keys(),values()都是用于遍历数组
    * */

    // keys()对键名的遍历
    for( let index of ['1','c','ks'].keys() ){
        console.log('keys',index);
    }
    // values()是对键值的遍历
    for(let value of ['1','c','ks'].values()){
        console.log('values',value);
    }
    // entries()是对键值对的遍历
    for(let [index,value] of ['1','c','ks'].entries()){
        console.log('values',index,value);
    }

}

{
    // copyWithin()当前数组内部,将制定位置的成员复制到其他位置,然后返回当前数组
    console.log([1,2,3,4,5].copyWithin(0,3,4));
}

{
    /*
    * 下面方法两个的区别是
    *   find返回的是true的成员,没有则返回undefined,findIndex返回的是符合条件的数组成员的索引值,没有则返回-1
    * */

    // find:用于找出第一个符合条件的数组成员,它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。

    console.log([1,2,3,4,5,6].find(function(item){return item>3}));     // 4

    // findIndex 用法与find方法非常类似，返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
    console.log([1,2,3,4,5,6].findIndex(function(item){return item>3}));   // 3
}

{

    //返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。该方法属于ES7，但Babel转码器已经支持。
    console.log('number',[1,2,NaN].includes(1));  // number,true

    console.log('number',[1,2,NaN].includes(NaN));  // number,true

}

