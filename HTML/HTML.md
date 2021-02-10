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

说明：

* `<!DOCTYPE html>`:

  文档声明，用于告诉浏览器该HTML文件使用的是HTML中的哪一个版本

* `<meta>`标签：

  * 提供有关页面的元信息，比如：针对搜索引擎的网页描述或关键词等

  * `<meta>`标签位于文档的头部，其中不包含任何内容

  * `<meta>`标签的属性定义了与文档相关联的键值对：

    * `name`：需要设置的数据的名字
    * `content`：需要设置的数据的值
    * `http-equiv`：用于设置Http协议的响应头

  * 常用功能示例：

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

  * `<meta charset="UTF-8">`：用于告诉浏览器使用哪一种字符集来解析文件，即使用`utf-8`字符集来解析文件

### 常用标签

**标签语义化：**

可以理解为，文件中去除样式表现、行为等内容后，仍能够较为清晰的理解各个部分的作用

#### `<html>`标签

* 作用：
  * 用于告诉浏览器之个文档中包含的信息是用HTML编写的
  * 所有HTML标签中的一个根节点、根标签，也就是最大的标签
* 用法：
  * 一个页面中`<html>`标签只能有一个
  * 网页中的所有内容都需要编写在`<html>`标签之中
  * `<html>`标签中包含两个子标签`<head>`和`<body>`

#### `<head>`标签

* 作用：
  * 用来表示网页的元数据，用于描述文档的各种属性和信息
  * 包括：文档的标题、与其他文档之间的关系等
  * 其中包含了浏览器和搜索引擎使用的其他不可见信息
* 用法：
  * 一个网页中只能有一个`<head>`标签
  * `<head>`标签中必须要设置的是标签`<title>`

#### `<title>`标签

* 作用：

  * 表示网页的标题，会在网页的标题栏中显示

* 用法：

  * 一个网站中的多个页面的title不应该重复，重复不利于搜索引擎的检索
  * `<title>`标签需要紧跟在`<head>`标签内，便于搜索引擎检索

* 示例：

  

#### `<body>`标签

* 作用：
  * 用来设置网页的主体
  * 所有在页面中能看到的内容都应该编写到`<body>`标签中
* 用法：
  * `<body>`标签作为`<html>`标签的子标签使用

#### `<h1>`~`<h6>`标签

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

#### `<p>`标签

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

#### `<hgroup>`标签

* 作用：

  * 其表示网页中某个区域内有多个标题

* 用法：

  * 标签中包含一组有`<h1>`-`<h6>`组成的标题列表
  * IE9以上才支持

* 示例：

  ```html
  
  ```

  

