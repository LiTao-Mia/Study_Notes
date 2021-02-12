# HTML

## 浏览器

浏览器是用于网页显示、运行的平台；前端开发中的核心工具，编写的所有代码只有通过浏览器的渲染成可供用户查看的页面，也就说所有代码最后形成实际效果是由浏览器来决定的

常见浏览器有：

* 谷歌浏览器
* 火狐浏览器
* IE浏览器
* Safari浏览器
* Edge浏览器

### 浏览器内核

浏览器内核可以分为两部分：

* **渲染引擎**（`Layout Engineer`或者`Rendering Engine`）
* **`JS`引擎**

#### 渲染引擎

渲染引擎的作用就是负责取得网页内容（HTML、图像等），计算网页的显示方式，然后在显示器上显示

浏览器不同的内核对于网页的语法解释会有不同，所以渲染的效果也就不同

#### `JS`引擎

`JS`引擎用于解析`JavaScript`语言，执行`JavaScript`语言来实现网页的动态效果

#### 常见浏览器内核分类

常见的浏览器内核可以分为以下四种：

* `Trident`

  IE内核，以及国内的双核浏览器兼容模式：

  * IE、360极速浏览器、百度浏览器等都是以其为内核
  * Window10发布后，IE将其内置浏览器命名为Edge，而Edge最显著的特点就是新内核EdgeHTML

* `Gecko`

  Firefox内核，Mozilla FireFox：

  * 代码是完全公开的

* `Webkit`

  苹果浏览器Safari的内核：

  * Apple Safari、Android默认浏览器

* `Blink`

  在Chromium项目中研发出来的Blink渲染引擎，内置在了Chrome浏览器之中：

  * Blink其实是Webkit的分支
  * 大部分国产浏览器最新版都是采用Blink内核，而采用的二次开发

## Web标准

由于浏览器的内核不同，所以会导致同一个代码所生成网页显示的效果是不一样的，会有很多的差别，此时最好的解决方法就是需要一个标准将其统一化，也就是说使不同浏览器展示出的内容得到统一，也就是标准

### 万维网联盟（W3C）

万维网联盟（`World Wid Consortium`，`W3C`），是万维网的主要国际标准组织：

* 1994年伯纳斯李创建了万维网联盟（W3C）
* 该组织制定了W3C规范一套标准用以解决网络应用在不同平台间的兼容问题
* 定义了网页中的`HTML`、`CSS`、`DOM`等的标准

### Web标准构成

Web标准是由W3C和其他的标准化组织指定的一系列标准的集合，主要包括三个方面：

* **结构（Structure）**：HTML用于描述页面的结构，使内容更加清晰，更有逻辑性
* **表现（Presentation）**：CSS用于控制页面中元素的样式，修饰内容的样式，美化页面
* **行为（Behavior）**：JavaScript用于响应用户操作，控制内容的交互以及操作效果，负责页面的行为

举例：

* 房子
* 人

所以最理想的源码状态是：一个优秀的网页会要求结构、表现、行为三者分离：

* `.html`文件
* `.css`文件
* `.js`文件

也可理解为：**解耦**

解耦：代码之间的关系过于紧密，修改一个必须要同时对其他部分进行修改，也就是牵一发而动全身

### Web标准的优势

Web标准的优势是呼之欲出的：

* 使网站更容易维护
* 使网页能让更多更广泛的设备访问

## 网页

网页主要是由文字、图像、音频、视频和超链接等元素构成

* [世界上的第一个网站](http://info.cern.ch/hypertext/WWW/TheProject.html)



## HTML

**超文本标记语言**（Hyper Text Markup Language，HTML）：

* **超文本**：

  与普通文本的区别在于它可以在其中假如图片、声音、动画、多媒体、超级链接等内容，其中的超级链接还可以使其从一个文件跳转到另一个文件

* **标记**：

  HTML中的标记指的就是标签，作用是用于描述网页，结构：

  ```html
  <标签名>标签内容</标签名>
  <标签名 />
  ```

**需要注意的是：**

* HTML不是一种编程语言，而是一种标记语言
* 标记语言是一套标记标签
* 一个完整的标签也称为元素

### 骨架格式

HTML的语言骨架格式：

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>网页标题</title>
</head>
<body>
	<h1>网页正文</h1>
</body>
</html>
```

#### 文档类型`<!DOCTYPE>`

文档声明，用于告诉浏览器该HTML文件使用的是HTML中的哪一个版本

#### `<meta>`标签

* 提供有关页面的元信息，比如：针对搜索引擎的网页描述或关键词等

* `<meta>`标签位于文档的头部，其中不包含任何内容

* `<meta>`标签的属性定义了与文档相关联的键值对：

  * `name`：需要设置的数据的名字
  * `content`：需要设置的数据的值
  * `http-equiv`：用于设置Http协议的响应头

* 常用功能：

  * 设置网页的描述信息

    ```html
    <meta name="description" content="这是一个学习使人快乐的网站...">
    ```

  * 设置网页的关键字

    ```html
    <meta name="keywords" content="HTML,CSS,JavaScript">
    ```

  * 设置网页的重定向

    ```html
    <meta http-equiv="refresh" content="4;url=https://www.baidu.com">
    ```

* `<meta charset="UTF-8">`：

  用于告诉浏览器使用哪一种字符集来解析文件，即使用`utf-8`字符集来解析文件

### 标签

#### 标签语义化

标签的含义，可以理解为，文件中去除样式表现、行为等内容后，仍能够较为清晰的理解各个部分的作用，使用它的优势：

* 利于代码的阅读与理解
* 便于代码维护
* 更好的搜索引擎优化

**原则：**

先确定语义的HTML，再选择合适的CSS，也就是说去掉CSS之后，网页结构依然具有可读性，能够很清楚的看懂各个部分是什么作用，依然组织有序

#### 标签分类

* 双标签

  ```html
  <标签名>内容</标签名>
  ```

  语法中：`<标签名>`表示该标签的作用开始，称为开始标签（start tag），`</标签名>`表示该标签的作用结束，称为结束标签（end tag）

  > 标题：<title>网页标题</title>

* 单标签

  ```html
  <标签名 />
  ```

  单标签也被称为空标签，用一个标签符号即可完整的描述标签功能

  > 换行：<br />

#### 标签关系

* 嵌套关系

  ```html
  <head>
  	<meta charset="UTF-8">
  	<title>网页标题</title>
  </head>
  ```

  此时`<head>`标签被称为`<meta>`标签和`<title>`标签的父标签、父元素，而`<meta>`标签和`<title>`标签又被称为`<head>`标签的子标签、子元素

  ```html
  <body>
  	<p><em>内容</em></p>
  </body>
  ```

  此处的`<body>`标签也称作`<p>`标签和`<em>`标签的祖先元素，而`<p>`标签和`<em>`标签也称作`<body>`标签的后代元素

* 并列关系

  ```html
  <meta charset="UTF-8">
  <title>网页标题</title>
  ```

  此处，`<meta>`标签和`<title>`标签的关系就为并列关系，也就是兄弟关系

#### 标签属性

* 通过属性为HTML元素提供附加信息
* 属性一般是以“名称/值”对的形式出现：`属性名="属性值"`
* 部分属性是任意值，部分是指定值
  * 需要特殊说明：当属性值为`boolean`值时，可以省去属性值的`true`或`false`，当属性值为`true`时，直接写入属性名称即可，当为`false`时，不写属性名称即可

##### 通用属性

一些属性是所有元素都支持的

###### `id`属性

`id`属性用于为HTML元素指定唯一标识，类似于身份证，所以同一个网页中不能出现相同的`id`属性值

###### `class`属性

为标签分组，拥有相同`class`属性的标签可被认为是一组，用于匹配CSS样式，所以同一网页中可以出现相同的`class`属性值

###### `style`属性

用于为HTML元素指定CSS样式

###### `title`属性

用于指定标签的标题，为HTML元素指定额外信息，设置`title`属性值后，鼠标悬停到元素上方后，就会出现该属性值所包含的文本内容

经常与`<a>`元素一起使用

```html
<!-- 通用属性 -->
<div id="general_attri" >
  <p class="red" style="color:lightcoral">Hi</p>
  <a href="https://www.baidu.com/" title="百度一下">world</a>
</div>
```

![常用属性](D:\Study_Notes\imgs\常用属性.png)



#### 排版标签

##### `<html>`标签

* 作用：
  * 用于告诉浏览器之个文档中包含的信息是用HTML编写的
  * 所有HTML标签中的一个根节点、根标签，也就是最大的标签
* 用法：
  * 一个页面中`<html>`标签只能有一个
  * 网页中的所有内容都需要编写在`<html>`标签之中
  * `<html>`标签中包含两个子标签`<head>`和`<body>`

##### `<head>`标签

* 作用：
  * 用来表示网页的元数据，用于描述文档的各种属性和信息
  * 包括：文档的标题、与其他文档之间的关系等
  * 其中包含了浏览器和搜索引擎使用的其他不可见信息
* 用法：
  * 一个网页中只能有一个`<head>`标签
  * `<head>`标签中必须要设置的是标签`<title>`

##### `<title>`标签

* 作用：

  * 用于设置网页的标题，会在网页的标题栏中显示

* 用法：

  * 一个网站中的多个页面的title不应该重复，重复不利于搜索引擎的检索
  * `<title>`标签需要紧跟在`<head>`标签内，便于搜索引擎检索

* 示例：

  ```html
  <head>
    <meta charset="UTF-8">
    <title>常用标签</title>
  </head>
  ```
  
  ![title标签](D:\Study_Notes\imgs\title标签.png)

##### `<body>`标签

* 作用：
  * 用来设置网页的主体
  * 所有在页面中能看到的内容都应该编写到`<body>`标签中
* 用法：
  * `<body>`标签作为`<html>`标签的子标签使用

##### `<h1>`~`<h6>`标签

* head，头部、标题

* 作用：
  * 标题标签，用于表示网页中的一个标题，也就相当于正文的标题
  * 其重要性仅次于页面的`title`

* 用法：
  * `<h1>`-`<h6>`重要性越来越低
  * 一般只会使用到标签`<h3>`，因为`<h3>`标签以后的标题标签对于搜索引擎就没有什么意义了
  * 一个页面只能够只会使用一个`<h1>`标签

* 示例：

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>常用标签</title>
</head>
<body>
  <h1>标题标签</h1>
  <h2>标题标签</h2>
  <h3>标题标签</h3>
  <h4>标题标签</h4>
  <h5>标题标签</h5>
  <h6>标题标签</h6>
</body>
</html>
```

![h_标题标签](D:\Study_Notes\imgs\h_标题标签.png)

##### `<p>`标签

* paragraph，段落

* 作用：

  * 表示网页中的一个段落

* 用法：

  * 浏览器会在段落的前和后各加上一个换行，也就是段落会在页面中自成一行

* 示例：

  ```html
  <body>
    <!-- p标签 -->
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p>Soluta libero nesciunt, </p>
    <p>repellat porro ducimus possimus voluptatum cupiditate</p> 
    <p>molestias dolores deserunt vel eos cum aspernatur magnam nulla!</p> 
    <p>incidunt consequatur?</p>
  </body>
  ```

  ![p_段落标签](D:\Study_Notes\imgs\p_段落标签.png)

##### `<div>`标签

* division，分割、分区

* 作用：

  * 表示页面中一个布局容器
  * 没有任何语义
  * 标签中可包含各种内容，但`<div>`标签的滥用会导致网页中语义的清晰度下降，可读性变差

* 用法：

  ```html
  <div>
      内容
  </div>
  ```

##### `<span>`标签

* span，跨度、范围

* 作用：

  * 用于选中内容，可以方便我们设置其样式
  * 没有任何语义

* 用法：

  ```html
  <span>文字内容</span>
  ```

##### `<div>`、`<span>`与`<p>`三者标签的区别

![div_p_span标签三者区别](D:\Study_Notes\imgs\div_p_span标签三者区别.png)

* `<span>`标签不会导致换行
* `<div>`标签会导致换行
* `<p>`标签会产生一个段落，而段落与段落之间默认会有更大的间距

##### `<br>`标签

* break，打断、换行

* 作用：

  * 将文本强制换行显示

* 用法：

  ```html
  <br />
  ```

##### `<hr>`标签

* horizontal，水平线、横线

* 作用：

  * 使用一条水平线将段落与段落之间隔开

* 用法：

  ```html
  <hr />
  ```

**小应用：新闻页面**

![新闻小界面](D:\Study_Notes\imgs\新闻小界面.png)

#### 文本格式化标签

文本格式化元素能包含文本、图像、超链接、文本格式化元素和表单控件元素等，也可以与`<span>`元素相互包含

##### `<b>`标签

* 作用：

  * 定义粗体标签，使包含文字粗体显示
  * 并不具备强调的语义

* 示例：

  ```html
  <span><b>b标签：加粗文本</b></span><br>
  ```

##### `<strong>`标签

* 作用：

  * 定义粗体标签，使包含文字粗体显示
  * 具有强调的语义

* 示例：

  ```html
  <span><strong>strong标签：加粗文本</strong></span><br>
  ```

##### `<i>`标签

* 作用：

  * 定义斜体文本
  * 没有强调的语义

* 示例：

  ```html
  <span><i>i标签：斜体文本</i></span><br>
  ```

##### `<em>`标签

* 作用：

  * 定义斜体文本
  * 具有强调的语义

* 示例：

  ```html
  <span><em>em标签：斜体文本</em></span><br>
  ```

##### `<small>`标签

* 作用：

  * 定义小号字体文本

* 示例：

  ```html
  <span>文本<small>small标签：小号字体文本</small></span><br>
  ```

##### `<sup>`标签

* 作用：

  * 定义上标文本

* 示例：

  ```html
  <span>文本<sup>sup标签：上标文本</sup></span><br>
  ```

##### `<sub>`标签

* 作用：

  * 定义下标文本

* 示例：

  ```html
  <span>文本<sub>sub标签：下标文本</sub></span><br>
  ```

##### `<bdo>`标签

* 作用：

  * 属性`dir="ltr"`：将指定文本从左向右显示
  * 属性`dir="rtl"`：将指定文本从右向左显示

* 示例：

  ```html
  <!-- 文本显示方向 -->
  <span>文本显示：<bdo dir="ltr">从左向右显示文本</bdo></span><br>
  <span>文本显示：<bdo dir="rtl">从右向左显示文本</bdo></span><br>
  ```

![文本格式化标签元素](D:\Study_Notes\imgs\文本格式化标签元素.png)

#### 语义标签

##### `<q>`标签

* 作用：

  * 定义一个较短的、不带换行的引用文本
  * 浏览器会为这段被引用的文本添加引号

* 示例：

  ```html
  <p>学习的指导思想：<q>学习使我快乐</q>这是一种态度</p>
  ```

![q标签](D:\Study_Notes\imgs\q标签.png)

##### `<blockquote>`标签

* 作用：

  * 定义一个段长的引用文本

* 用法：

  * `cite`属性：用于指定该引用文本所引用的网址URL或出处

* 示例：

  ```html
  <blockquote cite="定风波·莫听穿林打叶声">
    莫听穿林打叶声，何妨吟啸且徐行。<br>
    竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。<br>
    料峭春风吹酒醒，微冷，山头斜照却相迎。<br>
    回首向来萧瑟处，归去，也无风雨也无晴。<br>
  </blockquote>
  ```

![blockquote标签](D:\Study_Notes\imgs\blockquote标签.png)

##### `<pre>`标签

* 作用：

  * 表示该元素所包含文本已经进行了预格式化
  * 标签内部的空格、回车、Tab键和其他格式字符都会保留下来

* 示例：

  ```html
  <pre>
    莫听穿林打叶声，何妨吟啸且徐行。
    竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。
    料峭春风吹酒醒，微冷，山头斜照却相迎。
    回首向来萧瑟处，归去，也无风雨也无晴。 
  </pre>
  ```

![pre标签](D:\Study_Notes\imgs\pre标签.png)

##### `<cite>`标签

* 作用：

  * 用于表示作品（书籍、音乐和电影）的标题
  * 浏览器会用斜体字来显示所包含的文本

* 示例

  ```html
  <p>
    <cite>JavaScript高级程序设计</cite>和<cite>你不知道的JavaScript</cite>都是很好的书哦！
  </p>
  ```

![cite标签](D:\Study_Notes\imgs\cite标签.png)

##### `<abbr>`标签

* 作用：

  * 用于表示一个缩写

* 用法：

  * `title`属性用于指定该缩写所表示的全称，也是该标签的必须属性

* 示例：

  ```html
  <p>一月（元月）：<abbr title="January">Jan</abbr></p>
  ```

![abbr标签](D:\Study_Notes\imgs\abbr标签.png)

##### `<address>`标签

* 作用：

  * 用于表示一个地址
  * 浏览器会使用斜体字来显示所包含的文本

* 示例：

  ```html
  <p>福尔摩斯：<address>伦敦贝克街221号</address></p>
  ```

![address标签](D:\Study_Notes\imgs\address标签.png)

##### `<code>`标签

* 作用：

  * 用于表示这是一段计算机代码

* 示例：

  ```html
  <code>
    var name = 'Snoopy';<br>
    console.log('Hi,',name)
  </code>
  ```

![code标签](D:\Study_Notes\imgs\code标签.png)

##### `<dfn>`标签

* 作用：

  * 用于定义一个专业术语
  * 浏览器会用粗体或斜体字显示标签内所包含的文本

* 示例：

  ```html
  <p>史努比原型为<dfn>米格鲁猎兔犬</dfn></p>
  ```


![dfn标签](D:\Study_Notes\imgs\dfn标签.png)

##### `<del>`标签

* 作用：

  * 定义文档中被删除的文本
  * 浏览器会以中划线的形式显示所包含的文本

* 用法：

  * `cite`属性：属性值为一个URL，该URL对应的文本解释了文本被删除的原因
  * `datetime`属性：定义文本被删除的日期时间

* 示例：

  ```html
  <p>哆啦A梦是<del datetime="2021-02-11 10:42:43" cite="https://baike.baidu.com/item/%E5%93%86%E5%95%A6A%E6%A2%A6/185384?fr=aladdin">大熊猫</del></p>
  ```

  ![del标签](D:\Study_Notes\imgs\del标签.png)

##### `<ins>`标签

* 作用：

  * 定义文档中插入的文本
  * 浏览器会以下划线的形式显示所包含的文本

* 用法：

  * `cite`属性：属性值为一个URL，该URL对应的文本解释了文本被插入的原因
  * `datetime`属性：定义文本被插入的日期时间

* 示例：

  ```html
  <p>哆啦A梦是<ins datetime="2021-02-11 10:42:43" cite="https://baike.baidu.com/item/%E5%93%86%E5%95%A6A%E6%A2%A6/185384?fr=aladdin">大熊的猫</ins></p>
  ```

  ![ins标签](D:\Study_Notes\imgs\ins标签.png)

##### `<kbd>`标签

* 作用：

  * 用于定义键盘文本
  * 用于表示文本是通过键盘输入的

* 示例：

  ```html
  <kbd>list -l</kbd>
  ```

![kbd标签](D:\Study_Notes\imgs\kbd标签.png)

##### `<var>`标签

* 作用：

  * 用于表示所包含文本为变量
  * 浏览器会用斜体字显示所包含的文本

* 示例：

  ```html
  <p><var>i</var> 和 <var>j</var> 是两个变量</p>
  ```

  ![var变量标签](D:\Study_Notes\imgs\var变量标签.png)

#### 外部资源标签

##### 路径

##### `<img>`标签

* 作用：

  * 使用该标签在页面中定义图片

* 属性：

  * `src`：使用该元素必须指定该属性，用于指定图片文件的所在位置，可以使用相对路径也可以使用绝对路径

    ```html
    <!-- 图片img元素 -->
    <img src="../imgs/pexels-coffee-374757.jpeg">  
    ```

  * `alt`：该属性的值为图片的描述，具体为当图片在网页中不能正常显示时会作为该图片的提示信息，可用于搜索引擎的优化

    ```html
    <img src="../imgs/pexels-coffee-374757.jpeg">
    <img src="../imgs/pexels-coffee-3747571.jpeg" alt="coffee">
    ```

    ![img标签_alt](D:\Study_Notes\imgs\img标签_alt.png)

  * `title`：设置当鼠标悬停在图片上所显示的文本内容

    ```html
    <img src="../imgs/pexels-coffee-374757.jpeg" title="coffee">
    ```

    ![im标签_title](D:\Study_Notes\imgs\im标签_title.png)

  * `width`：指定该图片显示的宽度，属性值可以是百分比，也可以是像素值

  * `height`：指定该图片显示的高度，属性值可以是宝百分比，也可以是像素值

* 相关用法：

  * 在图片上添加链接：

    ```html
    <a href="https://www.baidu.com/"><img src="../imgs/pexels-coffee-374885.jpeg" alt=""></a>
    ```

    ![img_a标签](D:\Study_Notes\imgs\img_a标签.png)

##### `<iframe>`标签

* 作用：

  * 用来引入一个外部的网页
  * 先已很少使用，且不推荐使用

* 属性：

  * `width`：设置该iframe的宽度

  * `height`：设置该iframe的高度

  * `frameborder`：设置是否显示该iframe的表框

  * `src`：该属性指定一个URL，指定该iframe将装载哪一个页面

    ```html
    <iframe src="https://www.baidu.com/" frameborder="8" height="420" width="420"></iframe>
    ```

    ![iframe](D:\Study_Notes\imgs\iframe.png)

  * `scrolling`：用于设置该iframe是否显示滚动条，支持三个属性值：

    * `yes`：显示滚动

    * `auto`：自动，该iframe大小不够显示时显示滚动条，否则不显示滚动条

    * `no`：不显示滚动条，无论该iframe够不够显示

      ```html
      <iframe src="https://www.baidu.com/" frameborder="8" height="420" width="420" scrolling="no"></iframe>
      ```

      ![iframe_no](D:\Study_Notes\imgs\iframe_no.png)

  * `srcdoc`：HTML5新增属性，允许直接使用HTML片段，但如果浏览器不支持该属性(例如：IE浏览器不支持该属性)，那么就会继续显示`src`属性所指定的页面内容

    ```html
    <iframe src="https://www.baidu.com/" frameborder="8" height="420" width="420" srcdoc="<h1>HTML5</h1><div>HTML5是标记语言</div>"></iframe>
    ```

    ![iframe_srcdoc](D:\Study_Notes\imgs\iframe_srcdoc.png)

  * `sandbox`：

#### 多媒体标签

在HTML5之前，如果需要在网页中插入播放视频、音频，通常需要借助第三方的插件，如Flash，而HTML5新增的标签解决了这个局面，使得浏览器无需安装额外插件，浏览器本身提供支持

##### `<audio>`标签

* 作用：

  * 向页面中引入一个外部的音频

* 参数：

  * `src`：指定播放音频的URL地址
  * `controls`：播放音频时是否显示控制条，属性值为`boolean`值，值为`true`时，就显示控制条
  * `autoplay`：是否在音频转载完成后自动播放，属性值为`boolean`值，值为`true`时，就自动播放
  * `loop`：是否设置为循环播放，属性值为`boolean`值，值为`true`时，就为循环播放

* 示例：

  ```html
  <audio src="../src/audio.mp3" controls autoplay loop></audio>
  ```

 



##### `<video>`标签



#### 超链接

##### `<a>`标签

* anchor，锚、铁锚
* 作用：
  * 通过该标签，可以快速跳转到其他页面
* 属性：
  * `href`：值为一个链接地址
  * `target`：值可选择：`_blank`、`_self`、`_top`、`_parent`
  * `download`：用于让用户下载目标链接所指向的资源，而并不是直接打开该目标链接，该属性的属性值指定用户用于保存该下载资源的默认文件名
  * `type`：指定被链接文档的`MIME`文档
  * `media`：指定目标URL所引用的媒体类型，默认值为`all`，只有在指定了`href`属性才有效

##### `<header>`标签

* 作用：

##### `<hgroup>`标签

* 作用：

  * 其表示网页中某个区域内有多个标题

* 用法：

  * 标签中包含一组有`<h1>`-`<h6>`组成的标题列表
  * IE9以上才支持

* 示例：

  ```html
  <body>
    <!-- hgroup标签 -->
    <hgroup>
      <h1>微积分 I</h1>
      <h2>原理</h2>
    </hgroup>
    <p>
      本课程将从简单介绍函数的极限开始。
      然后，将导数的概念应用到物理和几何中去
    </p>
  </body>
  ```

  ![hgroup标签](D:\Study_Notes\imgs\hgroup标签.png)

#### 表单元素

类比：

![银行申请表](D:\Study_Notes\imgs\银行申请表.jpg)

目的：搜集用户信息

在网页中，为了与用户完成交互，获取到用户数据信息，也需要表单

实现表单也就用到了HTML中的表单元素，HTML使用表单向服务器提交请求当用户提交表单时，用户输入的内容将被作为请求参数提交到远程服务器

##### `form`元素

* 作用：用于生成输入表单，但并不会生成可视化部分，所以需要也必须与其他的表单控件元素结合使用
* 属性：
  * `action`：指定当表单提交时，该表单被提交到哪一个地址，该属性既可以指定一个绝对地址，也可以指定一个相对地址，该属性是必须的
  * `method`：指定提交表单时发送何种类型请求，该属性值可设置为`get`或`post`，分别对应用于发送`GET`或`POST`，通常该属性值会被设置为`POST`请求，该属性是必须的
  * `enctype`：指定对表单内容进行编码时所使用的字符集，属性值：
    * `application/x-www-form-urlencoded`：这是默认的编码方式，其只处理表单控件里的`value`属性值，并将这些值处理成`URL`编码方式
    * `multipart/form-data`：这种编码方式会以二进制流的方式来处理表单数据，这种编码方式会把文件域内文件内容封装到请求参数里，在需要通过将表单上传文件时使用该属性值
    * `text/plain`
  * `target`：指定使用哪一种方式打开目标`URL`，因为提交请求会打开另一个`URL`资源（与`<a>`标签中的该属性用法一致），属性值可以设置为`_blank`、`_parent`、`_self`、`_top`
  * `name`：指定表单的唯一名称，推荐将该属性设置与其`id`属性值保持一致

##### `input`元素

`input`元素按照其功能的不同，其控件的`type`属性值也就不同，可以分为：

* **单行文本框**：`type`属性值为`text`
* **单选框**：`type`属性值为`radio`

* **复选框**：`type`属性值为`checkbox`
* **密码输入框**：`type`属性值为`password`
* **文件上传域**：`type`属性值为`file`
* **按钮**：
  * **提交**：`type`属性值为`submit`
  * **重新设置**：`type`属性值为`reset`
  * **无动作**：`type`属性值为`button`
  * **图像形式提交按钮**：`type`属性值为`image`
* **隐藏域**：`type`属性值为`hidden`

除了`type`属性，`input`控件元素还有其他的属性：

* 当`type`属性值为`image`时，有：
  * `width`：指定图像域的宽度
  * `height`：指定图像域的高度
  * `src`：指定图像域显示图像的`URL`
* 当`type`属性值为`checkbox`或者`radio`，即为单选框或者复选框时，有：
  * `checked`：指定该单选框或者复选框是否处于选中状态，属性值支持`boolean`值，当其值为`true`时，表示其初始为选中状态
* `size`：值为一个正整数，指定控件的显示宽度
* `maxlength`：值为一个正整数，指定文本框所允许输入的最大字符数
* `disabled`：指定首次加载该控件元素时是否禁用该元素，属性值支持`boolean`值
* `name`：用户自定义，控件的名称
* `value`：用户自定义，控件中默认文本值

```html

```



