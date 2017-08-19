//字符串扩展
// ==========Unicode表达式,遍历接口,模板字符串,新增的10个方法
// {}表示块级作用域
{
    console.log('a', `\u0061`);
    console.log('s', `\u20BB7`);

    console.log('s', `\u{20BB7}`);

}

{
    // es5的写法 但是charAt和charCodeAt的处理都不到位
    let s = '𠮷';
    console.log('length', s.length);
    // charAt()表示取哪位的字符
    console.log('0', s.charAt(0));
    console.log('1', s.charAt(1));
    // charCodeAt()表示取哪位码值
    console.log('at0', s.charCodeAt(0));
    console.log('at1', s.charCodeAt(1));

    // es6的写法
    let s1 = '𠮷a';
    console.log('length', s1.length);
    console.log('code0', s1.codePointAt(0));
    // 将码值进行处理,转成16进制
    console.log('code0', s1.codePointAt(0).toString(16));
    console.log('code1', s1.codePointAt(1));
    console.log('code2', s1.codePointAt(2));
}

{
    // 给了码值取对应的字符
    console.log(String.fromCharCode("0x20bb7"));
    console.log(String.fromCodePoint("0x20bb7"));
}

{
    let str = '\u{20bb7}abc';
    for (let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }
    for (let code of str) {
        console.log('es6', code);
    }
}

{
    let str = "string";
    // str.includes()表示字符串中是否包含某个字符
    console.log('includes', str.includes("c"));
    // str.startsWith表示某个字符串是否以某个字符为起始
    console.log('start', str.startsWith('str'));
    // str.endsWith表示某个字符串是否以某个字符为结束
    console.log('end', str.endsWith('ng'));
}

{
    let str = "abc";
    // repeat()表示要遍历字符串的次数
    console.log(str.repeat(2));
}

{
    // 模板字符串
    let name = "list";
    let info = "hello world";
    // ``表示用``将数据包起来  数据项需用${}
    let m = `i am ${name},${info}`;
    console.log(m);
}

{
    // ******重点:  常用于时间  价格
    console.log('1'.padStart(2, '0'));
    console.log('1'.padEnd(2, '0'));
}

{
    // 标签模板
    let user = {
        name: 'list',
        info: 'hello world'
    };
    console.log(abc`i am ${user.name},${user.info}`);
    function abc(s, v1, v2) {
        console.log(s, v1, v2);
        return s + v1 + v2
    }
}

{
    console.log(String.raw`Hi\n${1 + 2}`);
    console.log(`Hi\n${1 + 2}`);
}
