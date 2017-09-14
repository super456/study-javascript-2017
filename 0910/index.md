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


## 数据类型与变量

### (一)、原始数据类型

1. 数值型

   JavaScript中的数值包含整数和浮点数，所有数值都以双精度浮点型来表示。双精度浮点数可以表示-2的53次方到2的53次方的整数，也可以表示为正负1.7976的10的308次方的最大值和正负2.2250乘以10的-308次方的浮点数。

   (1)十进制数：12、1.2、-23、.222e33、-1.3e3、3.E-2、12e+20

   (2)十六进制：0x0、0XABCDEF、0x1a2b3c4d
   
   (3)八进制数：00、0123、0241234

   (4)特殊值：Infinity无穷大**->**当一个数值或数值表达式的值超出了可表示的最大值的范围，将被赋值为Infinity。可以有无穷大Infinity，也可以有无穷小-Infinity（如：1.79e309、-1.79e309）、NaNNaN**->**代表Not a Number。当一个Undefined表达式的结果为数值型数据时，该数值型就是NaN值。NaN是唯一一个不能和自身做比较的值（如：0/0）可以通过`isNaN()`检测值是否为NaN

2. 字符串型

   (1)定界符：`""|''`

   (2)转义符：`\n`->回车换行、`\r`->换行、`\t`->水平制表符、`\"`->"、`\'`->'

   (3)布尔类型：true|false

### (二)、复合数据类型

   **重点**对象(object)、数组(array)、函数(function)

### (三)、特殊数据类型

1. 无定义数据类型`undefined`：undefined用来表示不存在的值或者尚未赋值的变量。对一个变量只声明不赋值或者赋予一个不存在的属性值，都会使这个变量的值为Undefined

2. 空值null：null表示空值，表示什么都没有，相当于一个占位符。null和undefined的区别就是undefined表示变量未被赋值，而null表示变量被赋予了一个空值。

### (四)、变量

1. 声明变量

   (1)通过`var`关键字声明变量

   (2)可以声明变量的同时给变量赋值

   (3)可以一次声明一个变量也可以一次声明多个看变量

   **注意：如果只声明变量未对其赋值，默认值为undefined，如果变量重名产生覆盖。**

   (4)格式注意：变量严格区分大小写、变量名称不要包含特殊字符、变量名称最好遵循驼峰标记法或者下划线法、变量名称最好含义明确
   
2. 变量在内存中的存储与释放：收集方式、收集内容、回收算法。

### (五)、类型转换

1. 隐式转换
			转换成布尔类型假
				undefined->false
				null->false
				数值型0或0.0或NaN->false
				字符串长度为0->false
				其它对象->true
			转换为数值型数据
				undefined->NaN
				null->0
				true->1|false->0
				内容为数字->数字，否则转换成NaN
				其它对象->NaN
			转换为字符串型数据
				undefined->"undefined"
				null->"NaN"
				true->"true" false->"false"
				数值型->NaN、0或者与数值对应的字符串
				其它对象->如果存在这个对象则转换为toString()方法的值，否则转换为Undefined
		显示转换
			转换成数值
				Number函数强制转换成数值
					数值->转换成原来的值
					字符串->如果可以解析为数值，则转换成数值；否则转换成NaN或者0
					true->1,false->0
					undefined->NaN
					null->0
				转换成整型
					praseInt()
				转换成浮点型
					praseFloat()
				注意
					Number函数将字符串转换为数值比praseInt函数严格很多。基本上只要有一个字符无法转换成数值，整个字符串就会被转换成NaN
			转换成字符串
				通过String函数转换成字符串
					数值->数值本身
					字符串->字符串本身
					true->"true",false->"false"
					undefined->"undefined"
					null->"null"
				转换成字符串型
					toString()
			转换成布尔类型
				通过Boolean函数强制转换成布尔值
					0、-0->false
					NaN->false
					空字符串->false
					undefined->false
					null->false