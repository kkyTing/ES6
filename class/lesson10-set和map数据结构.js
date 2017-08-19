/*
*  总结: 数据结构优先使用Map,要保证数据的唯一性就使用Set,放弃Object和数组
* */



{
    let map = new Map();
    let arr=['123'];
    // Map()添加元素是set()方法
    map.set(arr,456);

    console.log('map',map,map.get(arr));
}

{
    let map = new Map([['a',123],['b',456]]);
    console.log('map args',map);
    console.log('size',map.size);
    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);
}



{
    /* set()类似于数组，但是成员的值都是唯一的，没有重复的值(去重) */
    let list = new Set();
    // 添加元素
    list.add(5);
    list.add(7);
    // size可以理解为length属性
    console.log('size',list.size);  // size 2
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);

    console.log('size',list.size);   // 5
}

{
    // 添加重复的元素不会生效  也不会报错  利用这些特性可以数组去重

    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);

    console.log('list',list);

    let arr=[1,2,3,1,'2'];
    let list2=new Set(arr);

    console.log('unique',list2);   // {1,2,3}
}

{
    //方法:  add  delete  has   clear
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    //清空
    list.clear();
    console.log('list',list);
}

{

    // 遍历
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);

    for(let key of list.keys()){
      console.log('keys',key);
    }

    for(let value of list.values()){
      console.log('value',value);
    }


    for(let [key,value] of list.entries()){
      console.log('entries',key,value);
    }

    list.forEach(function(item){console.log(item);})

}


{
    // weakSet和Set的区别是支持的数据类型不一样
    // WeakSet表示的是对象
    let weakList=new WeakSet();

    let arg={};

    weakList.add(arg);

    // weakList.add(2);

    console.log('weakList',weakList);
}



{
    // WeakMap()接收的key必须是对象
  let weakmap=new WeakMap();

  let o={};
  weakmap.set(o,123);
  console.log(weakmap.get(o));
}


{
    /**
     *  数据结构横向对比,简单来说就是 增 删 改 查 的功能
     *  */

    let map = new Map();
    let array = [];

    // 添加
    map.set('t',1);
    array.push({t:1});

    // 查找
    let map_exist = map.has('t');
    let array_exist = array.find(item=>item.t);
    console.log('map_array',map_exist,array_exist);


    //改
    map.set('t',2);
    //遍历 是否存在这个值 有的话就改 没有就空
    array.forEach(item=>item.t?item.t=2:'');
    console.log('map-array-modify',map,array);

    // 删
    map.delete('t');
    let index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.log(map,array);

}



{

    /*
    * Set和数组对比
    * */
    let set = new Set();
    let array = [];

    // 添
    set.add({t:1});
    array.push({t:1});

    console.log(set,array);


    // 查
    let set_exist = set.has({t:1});
    let array_exist = array.find(item=>item.t);
    console.info(set_exist,array_exist);


    // 改
    set.forEach(item=>item.t?item.t=2:'');
    array_exist.forEach(item=>item.t?item.t=2:'');


    // 删
    set.forEach(item=>item.t?set.delete(item):'');
    var index = array.findIndex(item=>item.t);
    array.splice(index,1);
    console.info(set,array);

}




{

    let item={t:1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;
    console.info(obj,map,set);


    //查
    console.info({
        map_exist:map.has('t'),
        set_exist:set.has(item),
        obj_exist:'t' in obj
    });


    //改
    map.set('t',3);
    item.t = 3;
    obj['t'] = 3;
    console.info(obj,set,map);


    // 删
    map.delete('t');
    set.delete('t');
    delete  obj['t'];
    console.info(obj,set,map);


}


