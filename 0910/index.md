# 2017年9月10号学习内容：

## JavaScript简介

<img src="http://bmvjcv.img48.wal8.com/img48/17283365_20170904015317/150514351957.jpg" alt="js" border="0" />

1. JavaScript简介

   JavaScript是NetScape公司为Navigator浏览器开发的，是卸载HTML文件中的一种脚本语言，能实现网页内容的交互显示。当用户在客户端显示该网页时，浏览器就会执行JavaScript程序，用户通过交互的操作来改变网页的内容，来实现HTML语言无法实现的效果。

2. 如何使用JavaScript
   
   通过`<script></script>`中直接编写。
   
   通过`<script src='目标文档的URL'></script>`链接外部的Js文件。
   
   作为某个元素的事件属性值或者是超链接的`href`属性值。

3. 代码屏蔽

```js
		<script type='text/javascript'>
<!--
	Js代码;
//-->
</script>
```

   如果浏览器不支持Js，可以使用`<noscript></noscript>`标签，显示noscript中的内容。

4. JavaScript的基本语法

   JavaScript的执行顺序：按照在HTML文件中出现的顺序依次执行。**注：如果需要在HTML文件执行函数或者全局变量，最好将其放在HTML的头部中。**
   
   大小写敏感：JavaScript严格区分大小写。
   
   忽略空白符和换行符。**注：JavaScript会忽略关键字、变量名、数字、函数名或其它各种元素之间的空格、制表符或换行符我们可以使用缩进、换行来使代码整齐，提高可读性。**
   
   语句分隔符：使用 `;` 结束语句，可以把多个语句写在一行，最后一个语句的分号可以省略，但尽量不要省略，可以使用{}括成一个语句组，形成一个块block，通过 `\` 对代码进行折行操作。

```js
			document.write(' hello\
 world');
 ```

   注释：单行注释 `//`，多行注释 `/*注释内容*/`
   
   JavaScript的保留字：
   <img src="http://bmvjcv.img48.wal8.com/img48/17283365_20170904015317/150514339087.png" alt="保留字" border="0" />
			
   通过 `document.write()` 向文档书写内容。
   
   通过 `console.log()` 向控制台写入内容。
   
   **简单调试JavaScript中的错误：语法错误，通过控制台进行调试。逻辑错误，通过`alert()`进行调试。**