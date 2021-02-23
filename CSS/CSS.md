# CSS

`Cascading Style Sheet`，层叠样式列表

主要用于给页面的元素标签设置样式

## CSS的基本使用

### 基本语法

CSS的样式表是由一个一个的样式构成的，每一个样式都是由两部分组成：

* 选择器
* 声明块

格式语法：

```html
选择器{
	样式名:样式值;
	样式名:样式值;
}
Selector {property:value}
```

![CSS语法](..\imgs\CSS语法.png)

* 选择器（Selector）：用于决定对哪些HTML元素起作用
* 声明块：花括号中，属性名与属性值组成的键值对，指定决定对HTML元素起怎样的作用

示例：

```css
p {color: lightblue; font-family: '楷体';}
```

### 使用方式

在HTML文档中使用CSS的方式共有3种：

* 使用行内样式
* 使用内部样式
* 导入外部样式文件

#### 使用行内样式

直接将样式写在标签内部的`style`属性中，如：

```html
<p style="color: lightseagreen; font-size: 100px;">行内样式使用</p>
```

特点：

* 书写较为方便，权重较高

* 只对单个标签有作用，并不会影响其他的标签以及整个文档，意味着不能够复用
* 可以精确的控制某个标签元素，也意味着结构与样式的耦合
* 不推荐使用，使用情况较少
* 属性`style`可以是一个或多个CSS样式定义，多个CSS样式定义之间用英文分号隔开
* 属性值是由`property:value`（键值对）组成的

行内样式语法格式：

```html
style="property1:value1;property2:value2;..."
```

#### 使用内部样式

使用内部样式，需要在HTML文档内嵌入CSS样式定义，内部CSS样式需要放在`<style>`元素中定义

`<style>`标签元素实际上可以放在任意一个地方，但通常应该放在`<head>`元素内，作为它的子元素

内部样式的语法格式：

```html
<style type="text/css">
    样式单文件定义
</style>
```

示例：

```html
<style type="text/css">
  div {
    color: lightsalmon;
  }
</style>
```

但其实并不推荐使用该种方式，原因是它的劣势太过于明显：

* 大量的CSS样式定义嵌套在HTML文档中，将会导致HTML文档过大，大量的重复下载会导致网络负载过重
* 其他的HTML文档不能复用该HTML文档中的CSS样式定义

特点：

* 部分结构和样式相分离，但是并不是完全彻底的分离
* 只能控制一个页面

#### 导入外部样式文件

可以将所有的样式保存在一个外部CSS文件中，然后通过`<link>`标签元素将样式表引入到文件中，而该`<link>`标签应该放在`<head>`元素中

语法格式：

```html
<link rel="stylesheet" type="text/css" href="CSS样式文件的URL">
```

说明：

* 其中的`type`和`rel`属性值表明该页面导入和使用了CSS样式文件，值是固定的
* `href`属性值为所需要导入的CSS文件地址，该地址既可以是绝对地址也可以是相对地址

优势：

* 这种CSS样式的使用方式可以多次复用，方便多个页面的引入，可以控制整个站点
* 实现了结构和样式的完全相分离
* 浏览器加载文件时可以使用缓存

### CSS选择器

需要给HTML元素添加样式时，首先需要确定是给哪一个元素进行添加，而用来找到该元素的工具就是CSS选择器

#### 元素选择器

根据标签的名字来从页面中选取指定的元素

语法格式：

```css
标签名 {}
ele {}
```

示例：

```css
p {color: lightblue; font-family: '楷体';}
```

说明：会将设置该页面中的所有`<p>`标签元素样式

#### 类选择器

根据页面中元素的`class`属性值选取元素

语法格式：

```css
ele.className{}
```

类选择器使用`.`进行标识，后面紧跟类名，而其中：

```css
.className{}
```

相当于：

```css
*.className{}
```

该选择器会对`class`属性值为`className`的所有元素起作用

示例：

```css
.box{
      background-color: gold;
}
```

#### ID选择器

ID选择器使用`#`进行标识，后面紧跟ID名，语法格式：

```css
ele#idValue{}
```

会对`id`属性值为`idValue`的元素起作用，由于元素的`id`属性是唯一的，也就是说该选择器只会对应于一个具体的元素，所以以上的可以直接书写成：

```css
#idValue{}
```

示例：

```css
#box{
  color: red;
}
```

ID选择器与类选择器的使用区别：

举例：人名和身份证

#### 属性选择器

可以根据元素的属性来选中元素

语法格式：

```css
ele[attr]{}
```

指定具有`attr`属性的`ele`元素起作用

```css
ele[attr=value]{}
```

指定具有`attr`属性的，且`attr`属性值为`value`的`ele`元素

```css
ele[attr^=value]{}
```

指定所有具有`attr`属性，且`attr`属性值以`value`开头的`ele`元素

```css
ele[attr$=value]{}
```

指定所有具有`attr`属性，且`attr`属性值以`value`结尾的`ele`元素

```css
ele[attr*=value]{}
```

指定所有具有`attr`属性，且`attr`属性值包含`value`的`ele`元素

```css
ele[attr|=value]{}
```

指定所有具有`attr`属性，且`attr`属性值为以连字符分隔的系列值，其中第一个值为`value`的`ele`元素

```css
ele[attr~=value]{}
```

指定所有具有`attr`属性，且`attr`属性值为以空格隔开的系列值

#### 通配符选择器

`*`作为通配符，可以匹配所有的HTML元素

示例：

```css
* {
  border: 2px solid;
}
```

说明：将页面中的所有元素边框设置成实线且2px

通配选择器是作用范围中最广的，它能匹配页面中所有的元素

常用：使用通配符选择器清除页面所有的元素的默认边距

```css
* {
  margin: 0;
  padding: 0;
}
```

#### 交集选择器

用于选择同时满足多个选择器的元素，语法格式：

```css
Selector1Selector2...{}
```

示例：

```css
div.box{
  font-family: '楷体';
}
```

说明：选取页面中`class`属性值为`box`的`div`元素设置样式

#### 并集选择器

将满足多个选择器的元素标签全部选择出来

语法格式：

```css
Selector1,Selector2,...{}
```

* 并集选择器可以按照需求同时书写多个选择器，而每个选择器之间使用逗号隔开

* 并集选择器中的单个选择器，可以是类选择器、标签选择器、ID选择器等

示例：

```css
div,p{
  color: pink;
}
```

#### 后代选择器

选取处在元素内部的后代元素

语法格式：

```css
Selector1 Selector2...{}
```

后代选择器中的选择器之间用空格进行隔开，步骤：

* 通过选择器1找出一个范围内的标签
* 在该范围的后代元素中，按照选择器2找出该范围内所指定的后代标签元素

示例：

```css
p strong{
  color:lightseagreen;
}
```

还需要注意的是该选择器会将所有的后代元素都选取出来

```html
<div class="father">
  <p>小花</p>
  <div>
    <p>小明</p>
  </div>
</div>
```

选择器：

```css
.father p{
  font-size: 100px;
}
```

此时会发现小花和小明的两个文本都会被设置样式

#### 子元素选择器

选中满足条件的直接子代元素，也就是儿子

示例：

```html
<div class="father">
  <p>小花</p>
  <div>
    <p>小明</p>
  </div>
</div>
```

当选择器：

```css
.father>p{
  color: lightseagreen;
}
```

此时只有小花文本样式改变

#### 兄弟选择器

兄弟选择器中有两种方式选择元素：

选择出所有的兄弟元素，语法格式：

```css
Selector~Selector{}
```

示例：

```html
<body>
  <p>多利</p>
  <div>史努比</div>
  <p>史派克</p>
  <p>布朗</p>
  <span>汤姆</span>
  <p>杰瑞</p>
  <div>莎拉</div>
</body>
```

选择器：

```css
/* 兄弟选择器 */
/* 选择所有的兄弟元素 */
div~p{
  color: lightsalmon;
}
```

![所有兄弟元素](..\imgs\所有兄弟元素.png)

选取出紧跟着的兄弟元素，语法格式：

```css
Selector+Selector{}
```

示例：选择器

```css
/* 选择出紧跟着的兄弟元素 */
div+p{
  color:gold;
}
```

![紧跟着的兄弟元素](..\imgs\紧跟着的兄弟元素.png)

#### 伪类选择器

伪类选择器只针对伪元素起作用，即对文档中不一定真实存在的结构起作用，或者为某些元素的特定状态指定样式

##### 伪元素选择器

在CSS中可以通过伪元素向页面中插入虚构的元素

|          伪元素          |            说明            |
| :----------------------: | :------------------------: |
| `Selector::first-letter` | 选择指定对象内的第一个字符 |
|  `Selector::first-line`  | 选择指定对象内的第一行内容 |
|    `Selector:before`     |   选择指定对象内部的前端   |
|     `Selector:after`     |   选择指定对象内部的尾端   |

需要注意的是：

* `::first-letter`和`::first-line`仅仅只针对块元素起作用，但是当其元素属性设置`position：absolute`或者`display:block`或者设置浮动`float`都会使其起作用
* `:after`和`:before`两者都需要与内容相关的属性搭配使用

示例：

```css
span::first-letter{
  font-size: 60px;
  color:lightcoral;
  font-weight: bold;
}
span::first-line{
  color:lightgreen
}
p::first-letter{
  font-size: 60px;
  color:lightseagreen;
  font-weight: bold;
}
p::first-line{
  color: lightgreen;
}
div::before{
  content: 'D';
  font-size: 60px;
  color: lightseagreen;
  font-weight: bold;
}
div::after,span::after{
  content:'V';
  font-size: 60px;
  color:lightsalmon;
  font-weight: bold;
}
```

![伪元素选择器](..\imgs\伪元素选择器.png)

###### 内容相关属性

* `content`：

  该属性值可以是文字字符串、`url(url)`、`attr(alt)`、

* ``

##### 结构性伪类选择器

这是CSS3新增的伪类选择器

|       伪类选择器       |                  说明                  |
| :--------------------: | :------------------------------------: |
|        `:root`         | 选择文档的根元素，根元素只能是`<html>` |
|        `:empty`        |       选择没有任何子元素的空元素       |
|     `:only-child`      |            选择唯一的子元素            |
|    `:only-of-type`     |          选择同类型唯一子元素          |
|     `:first-child`     |            选择第一个子元素            |
|     `:last-child`      |           选择最后一个子元素           |
|    `:first-of-type`    |        选择第一次出现的某种元素        |
|    `:last-of-type`     |       选择最后一个出现的某种元素       |
|    `:nth-child(n)`     |           选择第`n`个子元素            |
|  `:nth-last-child(n)`  |         选择倒数第`n`个子元素          |
|   `:nth-of-type(n)`    |          选择第`n`个某种元素           |
| `:nth-last-of-type(n)` |        选择倒数第`n`个某种元素         |

##### 状态伪类选择器

###### 超链接

|     伪类选择器     |                   说明                   |
| :----------------: | :--------------------------------------: |
|  `Selector:link`   |  选择`Selector`选择器且未被访问前的元素  |
| `Selector:visited` | 选择`Selector`选择器且已经被访问过的元素 |

示例：

###### 用户操作

|     伪操作类      |                            说明                            |
| :---------------: | :--------------------------------------------------------: |
| `Selector:hover`  |        选择`Selector`选择器且处于鼠标悬停状态的元素        |
| `Selector:focus`  |           选择`Selector`选择器且已获得焦点的元素           |
| `Selector:active` | 选择`Selector`选择器且处于被用户激活（鼠标点击）状态的元素 |

示例：



###### 表单

| 表单伪类 | 说明 |
| :------: | :--: |
|          |      |
|          |      |
|          |      |



## 字体与文本相关属性

### 字体样式属性

#### `font-size`

设置文字的字体大小，此处大小既可以是相对的字体大小，也可以是绝对的字体大小，默认值为`medium`

属性值：

* 数值+长度单位：`12px`
* `small`：小字体
* `x-small`：较小字体
* `xx-small`：最小字体
* `large`：大字体
* `x-large`：较大字体
* `xx-large`：最大字体
* `larger`：相对于父元素中的字体设置较大
* `smaller`：相对于父元素中的字体设置较小

#### `font-family`

设置文字的字体，可以同时设置多个，中间使用逗号隔开，由于字体是需要浏览器内嵌字体的支持，所以所设置的字体不一定会被支持，浏览器会依次搜索，直到找到支持的字体，最后使用找到的字体来显示文本

默认值为：微软雅黑

示例：

```css
div.box{
  font-family: '楷体';
}
```

##### CSS Unicode字体

在CSS中设置字体时，可以直接写中文，但在编码不匹配时会产生乱码的错误，即系统不支持中文设置，解决方法：

* 用英文代替，例如：

  `font-family:"Microsoft YaHei","微软雅黑","SimSun","宋体";`

* 直接使用CSS Unicode编码来书写字体名称，即使用Unicode来写中文字体名称，例如：

  `font-family:"\5FAE\8F6F\96C5\9ED1"`等效于``font-family:"微软雅黑"`

建议：考虑到字体的支持问题，应尽量使用微软雅黑、宋体来设置字体

#### `font-style`

设置文字风格，属性值：

* `normal`：设置文字正常
* `italic`：设置文字斜体
* `oblique`：设置文字倾斜

示例：

```css
/* 字体样式设置：font-style  */
#italic{
  font-style: italic;
}
```

需要说明的是：一般较少使用将文字设置为斜体，反而会将斜体的标签该为普通正常模式显示

#### `font-weight`

设置文字的字体粗细，属性值表示加粗的程度：

* `lighter`：更细
* `normal`：正常
* `bold`：加粗
* `bolder`：更粗
* 也可以用数字设置：
  * `400`相当于`normal`
  * `700`相当于`bold`

示例：

```css
/* 字体粗细设置：font-weight  */
div{
  font-weight: bold;
}
```

#### `color`

用于设置字体的颜色，该属性值可以是字符串类型的颜色名、十六进制的颜色名、`rgb`颜色设置、`hsl`颜色设置

示例：

```css
#box{
  color: red;
}
```

##### 颜色设置

* 颜色名：

  `red`、`gold`、`greenyellow`

* 十六进制颜色

  使用三原色光混合原理：最前面的两位表示红光，中间两位表示绿光，后面的两位表示蓝光

  `#FF0000`：红色

  `#000000`：黑色

  当有重复值组成十六进制颜色时，可以缩写表示，例如：

  `#FF0000`：`#F00`

  `#6600FF`：`#60F`

  `#649892`：不能缩写表示

* RGB值

  使用的也是三原色混合原理：

  `rgb(255,0,0)`：红色

  `rgb(0,255,0)`：绿色

  `rgb(0,0,255)`：蓝色

* RGBA值

  比起RGB值表示颜色，多了一个不透明度的参数值`a`（`alpha`）：

  * 值为`0`时，表示完全透明

  * 值为`1`时，表示完全不透明

  * 示例：

    ```css
    color: rgba(64, 98, 92, 0.5);
    ```

* hsl值

  * `Hue`：色调

  * `Saturation`：饱和度

  * `Lightness`：亮度

  * 示例：

    ```css
    hsl(45, 100%, 50%)
    ```

  ![hsl](..\imgs\hsl.png)

* hsla值

  用法和`hsl`的用法一致，多了一个透明度的参数，与`rgba`的用法相似

#### `font`

可以综合设置字体的样式，其为一个复合属性，语法格式：

```css
Selector{font：font-style font-weight font-size font-family}
```

使用`font`时必须按照以上的顺序进行设置，不能更换顺序，每个属性以空格隔开

其中不需要设置的属性可以省略，但必须保留`font-size`和`font-family`

```css
#box{
  font:italic lighter 48px '楷体';
}
```

```html
<body>
  <div>默认格式的字体文本</div>
  <div style="font-family: '楷体';">字体设置font-family：楷体</div>
  <div style="font-style: italic;">字体样式font-style：斜体</div>
  <div style="font-weight: bold;">字体粗细font-weight：bold体</div>
  <div style="font-weight: lighter;">字体粗细font-weight：lighter体</div>
  <div style="font-weight: bolder;">字体粗细font-weight：bolder体</div>
  <div style="font-size: small;">字体大小font-size：small小字体</div>
  <div style="font-size: smaller;">字体大小font-size：smaller相对于父元素相对减小字体</div>
  <div style="font-size: x-small;">字体大小font-size：x-small较小字体</div>
  <div style="font-size: xx-small;">字体大小font-size：xx-small最小字体</div>
  <div style="font-size: medium;">字体大小font-size：medium默认设置</div>
  <div style="font-size: large;">字体大小font-size：large大字体</div>
  <div style="font-size: x-large;">字体大小font-size：x-large较大字体</div>
  <div style="font-size: xx-large;">字体大小font-size：xx-large最大字体</div>
  <div style="font:italic lighter 48px 楷体">font属性综合设置字体样式</div>
</body>
```

![font样式](..\imgs\font样式.png)

#### `text-decoration`

设置文字是否有修饰线，属性值：

* `none`：无修饰
* `underline`：下划线
* `line-through`：中划线
* `overline`：上划线

示例：

```html
<div style="text-decoration: underline;">测试字体</div>
<br>
<div style="text-decoration: line-through;">测试字体</div>
<br>
<div style="text-decoration: overline;">测试字体</div>
```

![text-decoration属性](..\imgs\text-decoration属性.png)

常用：`<a>`标签默认会有下划线的样式，可以将其设置取消

```html
<!-- text-decoration -->
<a href="#">百度一下</a>
<a href="#" style="text-decoration: none;">百度一下</a>
```

![a标签_text-decoration属性](..\imgs\a标签_text-decoration属性.png)

#### `line-height`

该属性用于设置字体的行高，行间距，也就是行与行之间的距离

### 文本样式属性

#### `text-align`

用于设置文本的水平对齐方式，默认值为`left`，属性值：

* `left`：左对齐
* `right`：右对齐
* `center`：居中对齐
* `start`
* `end`

理解：是设置元素中的文本内容水平对齐方式，而不是设置元素水平对齐方式

```html
<div style="width:240px; height: 240px; background-color: coral; text-align: center;">
  测试字体
</div>
```

![text-align属性](..\imgs\text-align属性.png)

#### `vertical-align`

用来设置目标元素中内容的垂直对齐方式，属性值：

* ``

#### `text-indent`

用于设置段落文本的缩进，默认值为0

```html
<!-- text-indent属性 -->
<div>默认设置：无缩进</div>
<div style="text-indent: 100px;">设置:缩进100px</div>
<div style="text-indent: 200px;">设置:缩进200px</div>
```

![text-indent属性](..\imgs\text-indent属性.png)

需要注意的是：被`<br>`标签打断的元素不能应用该属性

```html
<div style="text-indent: 200px;">
  设置:缩进
  <br>200px
</div>
```

![text-indent_br](..\imgs\text-indent_br.png)

## 盒子模型

盒子模型(box model)，页面中每个元素相当于页面中的一个矩形盒子，也就是说一个页面中的所有元素都可以被当做一个个的矩形盒子(盒模型)

此时，一个网页页面的布局就相当于放置盒子，将各个盒子放置到合适的位置就可以完美的完成页面的布局

盒子的组成部分：

* 内容区（content）
* 内填充区（padding）
* 边框区（border）
* 外边距区（margin）

![box-model](..\imgs\box-model.png)

其中也可以分为：

* 可见部分：内容区和边框区
* 不可见部分：内填充区和外边距区

### 内填充区

指的是元素内容区与边框以内的空间，颜色透明

默认情况下，`width`和`height`不包含`padding`的大小

使用`padding`属性来设置元素的内边距，还有其他具体的属性：

* `padding-top`：上内边距
* `padding-bottom`：下内边距
* `padding-right`：右内边距
* `padding-left`：左内边距

语法格式：

```css
padding:3px 5px 10px 15px;
```

但属性值可以设置的数值个数不同，所达到的设置效果也就不同：

| 数值个数 |                          所设置效果                          |
| :------: | :----------------------------------------------------------: |
| 1个数值  |             该数值将设置上下左右四个方向的内边距             |
| 2个数值  | 其中第一个数值会被设置为上下两个内边距，第二个数值会被设置为左右两个内边距 |
| 3个数值  | 第一个数值会被设置为上内边距，第二个数值会被设置为左右两个内边距，第三个数值会被设置为下内边距 |
| 4个数值  | 第一个数值会被设置为上内边距，第二个数值会被设置为右内边距，第三个数值会被设置为下内边距，第四个数值会被设置为左内边距 |

示例：

```css
padding:15px;   /* 上下左右都是15px */
padding:15px 10px;   /* 上下都是15px,而左右都是10px */
padding:15px 10px 12px;   /* 上是15px,左右都是10px,下是12px*/
padding:15px 10px 12px 8px;   /* 上是15px,右是10px,下是12px,左是8px*/
```

记忆：顺时针方向赋值

### 边框区

#### 边框

边框的相关属性：

|      属性      |      作用      |
| :------------: | :------------: |
| `border-color` | 设置边框的颜色 |
| `border-style` | 设置边框的线型 |
| `border-width` | 设置边框的线宽 |

以上的属性值：

* 设置4个值时，表示按照上、右、下、左的顺序来设置属性值
* 设置3个值时，表示第一个值用于设置上边框的属性，第二个值用于设置左右边框的属性，第三个值用于设置下边框的属性值
* 设置2个值时，表示第一个值用于设置上下两个边框的属性值，而第二个值用于设置左右两个边框的属性值
* 设置1个值时，表示设置上下左右四个边框属性值

可使用属性`border`来设置盒子的边框，，该属性是个复合属性，语法格式：

```css
border: border-width  border-style  border-color
```

可以顺序指定边框的宽度、样式和颜色

示例：

```css
border: 8px groove lightcyan;
```

边框样式`border-style`可以设置边框的风格，属性值：

|  属性值  |   样式   |
| :------: | :------: |
|  `none`  | 没有边框 |
| `solid`  |   实线   |
| `dotted` |   点线   |
| `dashed` |   虚线   |
| `double` |   双线   |
| `groove` |   槽线   |
| `ridge`  |   脊线   |
| `inset`  |   凹边   |
| `outset` |   凸边   |

还可以指定四个方向上的边框，其也为复合属性，可同时设置某一特定方向上边框的宽度、线型和颜色

* `border-top`
* `border-left`
* `border-right`
* `border-bottom`

也可以具体的设置某个方向上单一属性值，例如`border-top`

|        属性        |         说明         |
| :----------------: | :------------------: |
| `border-top-color` | 用于设置上边框的颜色 |
| `border-top-style` | 用于设置上边框的线性 |
| `border-top-width` | 用于设置上边框的线宽 |

示例：

```css
border: 100px solid lightseagreen;
width: 160px;
border-color: lightseagreen pink lightskyblue lightgreen;
```

![border](..\imgs\border.png)

可以借助于边框的设置来实现特殊图形的实现：

示例：

```css
border: 100px solid transparent;
border-bottom: 180px solid lightsalmon;
width: 160px;
```

![border_example](..\imgs\border_example.png)

[图形例子](https://css-tricks.com/the-shapes-of-css/)

#### 圆角边框

CSS3支持圆角边框，设置圆角以后，会将该圆的四分之一设置作为该边框的圆角

提供以下属性设置圆角半径：

|            属性名            |           说明           |
| :--------------------------: | :----------------------: |
|   `border-top-left-radius`   | 用来设置左上角的圆角半径 |
|  `border-top-right-radius`   | 用来设置右上角的圆角半径 |
| `border-bottom-left-radius`  | 用来设置左下角的圆角半径 |
| `border-bottom-right-radius` | 用来设置右下角的圆角半径 |

复合属性：`border-radius`可以同时设置多个位置的圆角，属性值可以为1个、2个、3个、4个属性值

示例：

```css
border: 16px solid lightsalmon;
border-top-left-radius: 50%;
border-top-right-radius: 20px;
border-bottom-left-radius: 60px;
```

![border-radius](..\imgs\border-radius.png)



### 外边距区

外边距是指元素边框与周围元素相距的空间

使用`margin`属性来设置外边距，有四个方向：

|      属性       |         说明         |
| :-------------: | :------------------: |
|  `margin-top`   | 设置上边的外边距距离 |
| `margin-bottom` | 设置下边的外边距距离 |
|  `margin-left`  | 设置左边的外边距距离 |
| `margin-right`  | 设置右边的外边距距离 |

而`margin`是一个复合属性，属性值类似于`padding`可设置1个值、2个值、3个值和4个值

示例：

```css
width:140px;
height:140px;
border: 8px dashed lightseagreen;
margin: 40px;
```

![margin](..\imgs\margin.png)

外边距可以设置成负数或`auto`，赋值为负数时表示

### 内容区

内容区指的是盒子中放置内容的区域，也就是元素中的文本内容，且子元素也都是存在于内容区中的

特点：

* 如果没有为元素设置内填充区和边框，则内容区的大小默认和盒子的大小是一致的
* 通过`width`和`height`两个属性可以设置内容区的大小
* `width`和`height`属性只适合于块元素

#### 尺寸等式

盒子模型中总宽度和总高度的计算等式：

```
盒子元素的总高度 = content height + padding-top + padding-bottom + border-top + border-bottom + margin-top + margin-bottom
```

```
盒子元素的总宽度 = content width + padding-right + padding-left + border-right + border-left + margin-right + margin-left
```

示例：

```css
width: 100px;
height: 100px;
border:2px solid yellowgreen;
padding: 20px;
margin: 20px;
background-color: lightcoral;
```

![盒子大小](..\imgs\盒子大小.png)

注意：

* 计算时需要考虑垂直方向上的外边距合并的情况
* `width`宽度和`heigh`高度对于行内元素是没有作用的
* 水平方向上，如果出现不满足以上的等式的情况，且所有的值都不是`auto`时，则会调整右外边距来满足等式；其他不满足等式的情况时，默认情况会自动调整设置为`auto`
* 当两个块级元素嵌套时，指定了父级元素宽高后，子级元素会默认撑满父级元素

#### 盒子居中

##### 水平方向

* 使用外边距实现水平居中，需要满足以下的条件：
  * 必须是块级元素
  * 盒子元素必须指定了宽度`width`

使用：

```css
margin: 0 auto;
```

```html
<!-- 盒子水平居中 -->
<div style="width: 160px; height: 160px; border:2px solid black;background-color: white;">
  <div style="width: 60px; height: 60px; background-color:lightsalmon;margin: 0 auto;">盒子水平居中</div>
</div>
```

![盒子水平居中margin](..\imgs\盒子水平居中margin.png)

### `box-sizing`

CSS3提供了一个新属性`box-sizing`，用来设置`width`和`height`两个属性控制哪一些区域的宽度、高度，因为在默认情况下，`width`和`height`两属性只用来指定content内容区域的宽度和高度

属性值：

* `content-box`：设置`width`和`height`两属性只用来控制内容区content的宽度和高度
* `border-box`：设置`width`和`height`两属性只用来控制内容区、内填充区和边框区的宽度和高度
* `inherit`：指从父元素继承`box-sizing`属性的值

示例：

```html
<!-- 默认情况 -->
<div style="width: 100px; height: 100px; border: 4px solid black; background-color: orange;padding: 40px;">默认情况</div>
```

![box-sizing默认情况](..\imgs\box-sizing默认情况.png)

```html
<div style="width: 100px; height: 100px; border: 4px solid black; background-color: orange;padding: 40px; box-sizing: content-box;">box-sizing: content-box</div>
```

![box-sizing_content-box](..\imgs\box-sizing_content-box.png)

```html
<div style="width: 100px; height: 100px; border: 4px solid black; background-color: orange;padding: 40px; box-sizing: border-box;"></div>
```

![box-sizing_border-box](..\imgs\box-sizing_border-box.png)

### 盒模型

盒模型的类型可分为两种：

* `block`类型：块级元素
  * 特点：
    * 该种盒类型的元素默认会占据一行；
    * 允许通过CSS设置宽度、高度；
    * 可以容纳其他块级元素和内联元素
    * 默认高度是由所包含的内容撑开，而宽度是独占一行
  * 常用于网页布局和网页结构
  * 示例：`<div>`、`<p>`
* `inline`类型：行内元素（内联元素）
  * 特点：
    * 该种盒类型的元素并不会占据一行，会和相邻的行内元素在一行上；
    * 通过CSS并不能设置宽度、高度，水平方向上可以设置`padding`和`margin`，但垂直方向上设置无效；
    * 默认宽高都是由元素内部所包含的内容撑开
    * 行内元素只能容纳文本或其他的行内元素
    * `<a>`元素比较特殊
  * 常用于控制页面中文本样式
  * 示例：`<span>`、`<a>`

示例：

```css
p{
  border: 2px solid yellowgreen;
}
div{
  width: 100px;
  height: 100px;
  border:2px solid yellowgreen;
}
span{
  width: 100px;
  height: 100px;
  border: 2px solid yellowgreen;
}
```

![盒类型](..\imgs\盒类型.png)

#### `display`

为了方便使用CSS来设置行内元素的`width`、`height`，可以通过`display`属性来改变元素默认的盒模型类型

属性值：

* `none`
* `inline`
* `block`
* `inline-block`

##### `none`

当`display`的属性值设置为`none`时，会将设置目标对象隐藏，同时释放其所占用的页面空间

需要特殊说明，与该属性值相似的是`visibility`属性，其属性值：

* `hidden`：控制目标对象隐藏
* `visible`：控制目标对象显示

隐藏和显示的效果看似是一样的，但是两者确实有很大的区别的：**是否占位**

示例：

```html
<body>
  <p>p元素</p>
  <div>div元素1</div>
  <div style="display: none;">div元素2</div>
  <span>span元素1</span>
  <span style="visibility:hidden;">span元素2</span>
  <span>span元素3</span>
  <span>span元素4</span>
</body>
```

![display_none](..\imgs\display_none.png)

##### `inline-block`

该种类型是`inline`类型和`block`类型两者的综合体，特点：

* 不会占据一行；
* 支持CSS指定宽度和高度；
* 默认情况下宽度和高度都是由元素所包含的内容撑开

示例：

```html
<span style="display:inline-block">inline-block:span元素1</span>
```

![inline-block](..\imgs\inline-block.png)

在默认情况中，多个`inline-block`类型盒模型的元素将会采用底端对齐的方式，也就是说它们的底端将会处于同一条线上，例如：

```html
<span style="display:inline-block">inline-block:span元素2</span>
<span style="display:inline-block">inline-block:span元素3</span>
<span style="display:inline-block;width: 100px; height:auto;">inline-block:span元素4inline-block:span元素4inline-block:span元素4inline-block:span元素4inline-block:span元素4inline-block:span元素4inline-block:span元素4inline-block:span元素4</span>
<span style="display:inline-block;">inline-block:span元素5</span>
```

![inline-block默认对齐方式](..\imgs\inline-block默认对齐方式.png)

为了让多个`inline-block`盒模型元素在顶端对齐，可以使用`vertical-align:top`

```html
<span style="display:inline-block">inline-block:span元素2</span>
<span style="display:inline-block">inline-block:span元素3</span>
<span style="display:inline-block;width: 100px; height:auto;vertical-align: top;">inline-block:span元素4inline-block:span元素4inline-block:span元素4inline-block:span元素4inline-block:span元素4inline-block:span元素4inline-block:span元素4inline-block:span元素4</span>
<span style="display:inline-block;">inline-block:span元素5</span>
```

![inline-block_vertical-align_top](..\imgs\inline-block_vertical-align_top.png)

##### `block`

`block`盒模型为块级元素，此处需要特别说明：

###### **相邻块元素垂直外边距的合并**

当两个紧靠的元素之间都设置了`margin`时，垂直方向上会出现：

```html
<span>block:margin</span>
<div style="margin: 40px;">div元素1</div>
<div style="margin: 40px;">div元素2</div>
```

![block块级元素margin](..\imgs\block块级元素margin.png)

垂直方向上相邻元素的外边距会有合并现象，也被称为外边距塌陷，即垂直方向上相邻元素的间距并不是两个元素的`margin-bottom`和`margin-top`之和：

* 两个边距`margin`值都为正时，取最大值
* 两个边距`margin`为一正一负时，取其求和
* 两个边距`margin`值都为负数时，取其绝对值最大

![垂直元素外边距合并](..\imgs\垂直元素外边距合并.png)

解决：

一次性给其中一个元素指定所需相距的距离值即可

###### **嵌套块元素垂直外边距的合并**

嵌套元素中两个块级元素垂直外边距的合并是指如果父级元素没有上内边距以及边框，则父元素的上边外边距会与子元素的上外边距发生合并，合并后的外边距取两者之中的较大者

示例：

```html
<div class="box1" style="margin-top: 40px;">
  <!-- div元素:父元素 -->
  <div class="box2" style="margin-top: 80px; background-color: lightcyan;width: 50px;">div元素:子元素</div>
```

![嵌套元素margin-top合并](..\imgs\嵌套元素margin-top合并.png)

解决方法:

* 借用父元素的`before`伪元素，例如：

  ```css
  .box1::before{
    content: '';
    display: table;
  }
  ```

* 可以为父元素定义1px的上边框或者上内边距
* 可以为父元素添加属性`overflow:hidden`

![嵌套元素上外边距合并](..\imgs\嵌套元素上外边距合并.png)

### `opacity`

CSS3提供了一个新的属性`opacity`，用来设置整个HTML元素的透明度

属性值：从0到1，0代表完全透明，1代表完全不透明

示例：

```css
opacity: .8;
```

![opacity](..\imgs\opacity.png)

该属性的设置会影响到整个HTML元素，其中包括背景（`background`）、边框（`border`）以及其中文本等

### `overflow`

设置如何处理溢出盒子的内容

![元素内容溢出](..\imgs\元素内容溢出.png)

属性值：

* `hidden`:

  溢出的内容会被剪裁，不会再被显示

  ```css
  overflow: hidden;
  ```

  ![overflow_hidden](..\imgs\overflow_hidden.png)

* `scroll`：

  ```css
  overflow: scroll;
  ```

  ![overflow_scroll](..\imgs\overflow_scroll.png)

  需要注意的是：当内容并没有多到溢出时也仍然会显示滚动条

* `auto`：

  当内容没有溢出时并不显示滚动条；当内容出现溢出后会自动显示滚动条，也就可以完整的显示内容

  ```css
  overflow: scroll;
  ```

* `visible`：

  其为默认值，不处理溢出的内容部分，使其在盒子外部显示

## 背景

用于设置背景的颜色或者背景图片，以及对背景图片进行设置，默认情况下，背景一直是从内容区延伸到边框的外边界

常用属性值：

|         属性名          |         作用         |
| :---------------------: | :------------------: |
|   `background-color`    |       背景颜色       |
|   `background-image`    |       背景图片       |
|   `background-repeat`   |   背景图片是否平铺   |
|  `background-position`  |     背景图片位置     |
| `background-attachment` | 背景图片内容是否固定 |

需要注意：

* 如果同时设置了背景色和背景图片，则背景图片会覆盖背景颜色
* 设置背景图片时，需要使用到`url()`函数，函数指定图片地址，其即可以是相对地址也可以是绝对地址，`url()`中不用添加引号
* `background-repeat`的属性值可以设置：
  * `no-repeat`：不平铺
  * `repeat`：平铺
  * `repeat-x`：水平方向上平铺
  * `repeat-y`：垂直方向上平铺
* `background-position`属性值既可以是实际的长度值，也可以是百分比，也可以设置为`bottom`、`center`等

### `background-color`

设置背景颜色，属性值为颜色表示，初始值`transparent`

语法格式：

```css
background-color:颜色表达式
```

示例：

```css
background-color: lightseagreen;
```

![background-color](..\imgs\background-color.png)

### `background-image`

使用该属性设置一个指定的图片作为背景

语法格式：

```css
background-imge: none | url(URL)
```

参数：

* `none`：表示无背景图，该为默认值
* `url`：设置背景图片时，需要使用到`url()`函数，函数指定图片地址，其即可以是相对地址也可以是绝对地址，`url()`中不用添加引号

示例：

```css
background-image:url(../imgs/pexels-coffee-374757.jpeg)
```

![background-image](..\imgs\background-image.png)

### `background-repeat`

设置背景图片是否平铺，在指定该属性时，必须先指定`background-image`属性

`background-repeat`的属性值可以设置：

* `no-repeat`：不平铺
* `repeat`：平铺
* `repeat-x`：水平方向上平铺
* `repeat-y`：垂直方向上平铺

示例：

```css
background-image: url(../imgs/pic.png);
background-repeat: repeat;
```

![background-repeat](..\imgs\background-repeat.png)

```css
background-image: url(../imgs/pic.png);
background-repeat: repeat-x;
```

![repeat-x](..\imgs\repeat-x.png)

```css
background-image: url(../imgs/pic.png);
background-repeat: repeat-y;
```

![repeat-y](..\imgs\repeat-y.png)

```css
background-image: url(../imgs/pic.png);
background-repeat: no-repeat;
```

![no-repeat](..\imgs\no-repeat.png)

### `background-position`

用于设置背景图片位置，属性值：

* 实际长度值、百分比；
* `bottom`、`center`、`right`、`left`

示例：

```html
<!-- background-position -->
<span>background-position</span>
<div style="background-image: url(../imgs/pic.png); background-repeat:no-repeat; background-position: 30px 80px;"></div>
<div style="background-image: url(../imgs/pic.png); background-repeat:no-repeat; background-position: center bottom;"></div>
```

![background-position](..\imgs\background-position.png)

### `background-attachment`

设置背景图片是否随着页面内容的滚动还是固定

属性值：

* `scroll`：

  该为默认值，该背景图片会随着内容的滚动而滚动

* `fixed`：

  背景图片固定，不会随着内容的滚动而滚动

示例：

```css
background-attachment: fixed;
```

### `background`

该属性是一个符合属性，可以同时设置背景色、背景图片、背景重复样式等属性

示例：

```css
background: transparent url(image.jpg) repeat-y  scroll 50% 0 ;
```

### CSS3新增

#### `background-clip`

在CSS2中，HTML元素的背景默认只会覆盖内填充区（`padding`）和内容区(`content`)；而在CSS3中则可以指定背景需要覆盖哪个范围

属性值：

* `border-box`：

  指定背景覆盖盒子模型的边框区、内填充区、内容区

  ```css
  background-clip: border-box;
  ```

  ![background-clip_border-box](..\imgs\background-clip_border-box.png)

* `padding-box`：

  指定背景覆盖盒子模型的内填充区、内容区

  ```css
  background-clip: padding-box;
  ```

  ![background-clip_padding-box](..\imgs\background-clip_padding-box.png)

* `content-box`：

  指定背景覆盖盒子模型的内容区

  ```css
  background-clip: content-box;
  ```

  ![background-clip_content-box](..\imgs\background-clip_content-box.png)

* `no-clip`：

  指定背景覆盖盒子模型的边框区、内填充区、内容区

  ```css
  background-clip: no-clip;
  ```

  ![background-clip_no-clip](..\imgs\background-clip_no-clip.png)

#### `background-orgin`

该属性用于指定背景从哪里覆盖

属性值：

* `border-box`：

  指定背景图片从边框区开始覆盖

  ```css
  background-origin: border-box;
  ```

  ![background-origin_border-box](..\imgs\background-origin_border-box.png)

* `padding-box`：

  指定背景图片从内填充区开始覆盖

  ```css
  background-origin: padding-box;
  ```

  ![background-origin_padding-box](..\imgs\background-origin_padding-box.png)

* `content-box`：

  ```css
  background-origin: content-box;
  ```

  ![background-orgin_content-box](..\imgs\background-orgin_content-box.png)

#### `background-size`

该属性用于设置背景图片的大小

属性值：

* 数值：`60px`
* 百分比：`100%`
* `auto`

```css
background-size:100% 100%;
```

![background-size](..\imgs\background-size.png)

#### 渐变背景

渐变是指从一个颜色到另一个颜色的平滑过渡

##### `linear-gradient`

可使用`linear-gradient`函数设置线性渐变

语法格式：

```css
linear-gradient([方向],颜色列表)
```

方向参数：

|     方向参数      |       效果       |
| :---------------: | :--------------: |
|     `to top`      |     从下到上     |
|    `to bottom`    | 默认值，从上到下 |
|     `to left`     |     从右到左     |
|    `to right`     |     从左到右     |
|   `to left top`   | 从右下角到左上角 |
|  `to right top`   | 从左下角到右上角 |
| `to left bottom`  | 从右上角到左下角 |
| `to right bottom` | 从左上角到右下角 |
|      `Ndeg`       |    指定角度值    |

需要注意的是：`0deg`代表12点钟方向，该角度值代表顺时针转过的角度

示例：

```css
background: linear-gradient(to top,grey,pink);
```

![background_linear-gradient](..\imgs\background_linear-gradient.png)

```css
background: linear-gradient(30deg,grey,pink);
```

![background_linear-gradient_Ndeg](..\imgs\background_linear-gradient_Ndeg.png)

颜色列表的语法格式：

```css
颜色1 位置1, 颜色2 位置2, ...
```

可发现实际上是可以设置多个颜色，并且可以为颜色设置位置，而位置既可以用百分比表示，也可以用长度值表示

示例：

```css
background: linear-gradient(45deg,lightseagreen 20%,lightblue 40%,pink 70%);
```

![background_linear-gradient_colors](..\imgs\background_linear-gradient_colors.png)

##### `repeating-linear-gradient`

用来设置循环线性渐变模式

示例：

```css
background: repeating-linear-gradient(90deg,lightseagreen 20%,grey 40%,pink 70%);
```

![background_repeating-linear-gradient](..\imgs\background_repeating-linear-gradient.png)

##### `radial-gradient`

该函数用来设置径向渐变

示例：

```css
background: radial-gradient(lightseagreen ,pink);
```

![background_radial-gradient](..\imgs\background_radial-gradient.png)

语法格式：

```css
radial-gradient([形状] [大小] at x坐标 y坐标, 颜色列表)
```

参数说明：

* 形状

  * `circle`：圆形
  * `ellipse`：椭圆

* 大小

  指定径向渐变大小，如果不设置会由浏览器来决定

* 圆心

  必须由`at`关键字开头，后面紧跟着x坐标和y坐标，默认为HTML元素的中心

* 坐标

  * `left`：代表x坐标的最左边
  * `center`：代表x坐标和y坐标的中间
  * `right`：代表x坐标的最右边
  * `top`：代表y坐标的最顶部
  * `bottom`：代表y坐标的最底部
  * 数值：该数值支持长度值和百分比

示例：

```css
background: radial-gradient(ellipse at right bottom, lightseagreen ,pink);
```

![radial-gradient_ellipse](..\imgs\radial-gradient_ellipse.png)

##### `repeating-radial-gradient`

该函数用来设置循环径向渐变，这种渐变会循环给出所指定的渐变颜色

示例：

```css
background: repeating-radial-gradient(at 40px 80px,lightseagreen,pink 30px, grey 50px);
```

![background_repeating-radial-gradient](..\imgs\background_repeating-radial-gradient.png)

## 轮廓

可以通过CSS来为元素设置轮廓线（`outline`）,轮廓通常位于边框的外侧

特点：

* 轮廓不占用空间
* 轮廓可以不是矩形
* 使用：通常在元素被选中时才会显示轮廓

可使用`outline`这个复合属性，可同时设置对象轮廓的颜色、线型、线宽三个属性

|       属性       |                             说明                             |
| :--------------: | :----------------------------------------------------------: |
| `outline-color`  |                       用于设置轮廓颜色                       |
| `outline-style`  | 用于设置轮廓线型，支持的属性值：`none`、`dotted`、`dashed`、`solid`、`double`、`groove`、`ridge`、`inset`、`outset` |
| `outline-width`  |                       用于设置轮廓宽度                       |
| `outline-offset` |        用于设置轮廓偏移距，也就是轮廓与边框之间的距离        |

显示效果基本和边框类似，轮廓和边框的主要区别就是：轮廓并不会影响页面的布局

示例：

```css
outline: lightcoral solid 2px;
```

## 阴影

CSS3增加了`box-shadow`属性为盒子添加阴影，其为以个复合属性

属性值

|   属性值   |                       说明                       |
| :--------: | :----------------------------------------------: |
|  hOffset   | 该属性值控制阴影在水平方向偏移，必须，可以为负值 |
|  vOffset   | 该属性值控制阴影在垂直方向偏移，必须，可以为负值 |
| blurLength |         该属性值控制阴影的模糊程度，可选         |
|   spread   |   该属性值控制阴影的缩放程度，可选，可以为负值   |
|   color    |           该属性值控制阴影的颜色，可选           |
|   inset    |     该属性值用于将外部阴影改为内部阴影，可选     |

语法格式：

```css
box-shadow: hOffset vOffset blurLength spread color inset;
```

示例：

```css
box-shadow: 10px 8px 20px 15px grey;
```

还需要说明的是：也可以对表格及单元格添加阴影：

示例：

```css
table{
  margin: 60px;
  width: 500px;
  border-spacing: 10px;
  box-shadow: 10px 10px 6px #444;
}
td{
  box-shadow: 6px 6px 4px #444;
  padding: 6px;
}
```

![table-shadow](..\imgs\table-shadow.png)

## 位置

CSS位置定位的机制有：

* 普通流（标准流）
* 浮动
* 定位

### 文档流

`normal flow`，普通流、文档流

普通流实际上就是指一个网页内标签元素正常从上到下、从左到右排列顺序

示例：

```html
<div style="width: 320px;height: 320px;background-color: pink; margin: 50px;">
  <div></div>
  <div></div>
</div>
```

![普通流](..\imgs\普通流.png)

特点：

* 块元素在文档流中的特点：
  * 在页面中自上向下排列
  * 默认高度是被内容撑开的
  * 默认宽度就是父级元素的全部
* 行内元素在文档流中的特点：
  * 默认宽度和高度都是由内容撑开的
  * 在页面中自左到右排列，一行占满后会自动转向下一行继续从左到右排列

### 浮动

设置了浮动属性`float`的元素会脱离标准普通流的控制，后将其移动到指定的位置

#### `float`

语法格式：

```css
Selector{float:value;}
```

设置了`float`属性的元素后，该元素就会被当作`inline-block`类型的盒模型处理，也就是相当于将该元素设置`display:inline-block`，此时元素的特点：

* 默认宽度被内容撑开
* 默认高度被内容撑开
* 该元素并不会独占一行
* 元素不会在文档流中占据位置
* 原块级元素设置浮动以后不会独占一行，原行内元素设置浮动以后可以为其设置宽高，所以元素浮动以后可以不区分块级元素和行内元素

浮动元素会紧紧跟随着它的前一个元素，可设置的属性值：

| 属性值  |        说明        |
| :-----: | :----------------: |
| `left`  |    元素向左浮动    |
| `right` |    元素向右浮动    |
| `none`  | 默认值，元素不浮动 |

```html
<!-- 浮动 -->
<div style="width: 460px;height: 460px;background-color: pink; margin: 50px;">
  <div style="float: left;"></div>
  <div style="background-color: lightskyblue; float: left;"></div>
  <div style="background-color: gold; width: 120px; height: 120px;"></div>
  <div style="background-color: gold; width: 120px; height: 120px;"></div>
  <div style="background-color: lemonchiffon; float: right"></div>
  <div style="background-color: turquoise; float: right"></div>
  <div style="background-color: mediumspringgreen;"></div>
  <div style="background-color: lightsteelblue; float: left;"></div>
</div>
```

![float浮动](..\imgs\float浮动.png)

以上可知：

浮动可理解为脱离文档流而“漂浮”在其上，属性值是告诉其“漂浮”的方向

浮动元素不会超过其上没有浮动的块元素

**浮动的特点：**

* 设置浮动以后，元素会向页面的左侧或者右侧移动
* 设置浮动以后，元素会完全脱离文档流，不再占据文档流中的位置，所以它下面的元素会自动上移，填补空出的位置
* 浮动元素不会超过其上没有浮动的块元素
* 浮动元素的默认位置不会超过其上的其他浮动元素，最多同齐

理解图示：

![float浮动规则](..\imgs\float浮动规则.jpg)

使用场景：导航栏菜单、多栏布局等等

特别说明：

```html
<!-- 图片文字环绕的效果 -->
<div style="width: 120px;height: 120px; float: left; background-color: lightseagreen;"></div>
<p style="width: 540px;">
    ”鲁迅《野草·好的故事》：“大红花和斑红花，都在水里面浮动。” 
    茅盾 《路》二：“天空是浮动的轻云。”
    李二和《那一碧麦田一直牵扯我的记忆》：“这时正是五月，惊风乱飐麦浪，竟有些撩人，浓郁又散乱的麦香时起时伏。我半是哀怜、半是满足地望着在风中浮动的那一碧碧涟漪，竟诡秘地笑了。”
    浮动是css布局非常强大的布局功能，也是理解CSS布局的关键问题所在，在CSSW中，包括div在内的任何元素都可以浮动的方式显示。
    浮动是一种非常有用的布局方式。它能够改变页面中对象的前后流动顺序。这样做的好处是，使得内容的排版变的简单，具有良好的伸缩性。
    举个例子，左右分栏的布局，左栏宽度为300px。
    如果使用一种相对的布局方式，我们可以使右栏显示在距左边300px的位置，这样可以使右栏贴着左栏进行显示。
    一旦涉及被改变，例如left的宽度由300px变为100px,就意味着right的定位需要重新设定，而使用浮动式布局方式后，当我们指定左栏的浮动为left，意味着其右方的内容将流入左栏的右边，而且能够根据左栏的宽度自动流入并贴进左栏，贴进的程度则靠左栏的右边距或者右栏的左边距来控制，二不依赖于对象本身的宽度值。
    浮动式布局使页面的大部分内容都可以由游览器自动调节，使我们能够专注于样式设计而非其相互之间的浮动关系，我们只需要简单地设置浮动方向，即可完成对象的布局分布。
</p>
```

![文字环绕](..\imgs\文字环绕.png)

浮动最早就是用来控制图片，以便达到其他元素（特别是文字）实现“环绕”图片的效果。

#### `clear`

浮动元素会脱离标准流，也就会影响后面的盒子占位与布局也就影响整个页面的布局，此时就需要消除浮动所带来的影响：

高度塌陷：块元素的高度默认情况下是被子元素撑开的，如果子元素设置了浮动，则其将会脱离文档流，而脱离文档流的子元素将无法撑起父元素高度，就会导致父元素高度失去

![float浮动元素影响](..\imgs\float浮动元素影响.png)

```html
<div style="width: 460px;height: 240px;background-color: pink; margin: 50px;">
  <div style="float: left;border: 2px solid black;"></div>
  <div style="float: left;border: 2px solid black;"></div>
  <div style="width: 100%; height: 140px; background-color: lightskyblue;"></div>
</div>
```

![clear](..\imgs\clear.png)

```html
<!-- 消除浮动 -->
<div style="width: 460px;height: 240px;background-color: pink; margin: 50px;">
  <div style="float: left;border: 2px solid black;"></div>
  <div style="float: left;border: 2px solid black;"></div>
  <div style="width: 100%; height: 140px; background-color: lightskyblue; clear: both;"></div>
</div>
```

语法格式：

```css
Selector{clear:value;}
```

属性值：

| 属性值  |                    说明                    |
| :-----: | :----------------------------------------: |
| `left`  | 不允许左侧有浮动元素（清除左侧浮动的影响） |
| `right` | 不允许右侧有浮动元素（清除右侧浮动的影响） |
| `none`  |             默认值，不清除影响             |
| `both`  |         同时清除左右两侧浮动的影响         |

```html
<!-- clear的本质 -->
<div class="dv1" style="width: 120px; height: 120px; float: left; background-color: lightgreen;"></div>
<div class="dv2" style="width: 180px; height: 180px; float:right; background-color: lightblue;"></div>
<div class="dv3" style="width: 100px; height:140px; background-color: lightsalmon;"></div>
```

![clear本质1](..\imgs\clear本质1.png)

* 当`clear:left`时：

![](..\imgs\clear_left.png)

* 当`clear:right`时：

  ![clear_right](..\imgs\clear_right.png)

* 当`clear:both`时：

  ![clear_both](..\imgs\clear_both.png)

#### 父级添加overflow属性方法

原理是：通过触发`BFC`的方式清除浮动

`BFC`，`Block Format Context`，块级格式化环境

`BFC`是一个隐藏的属性，一单元素开了`BFC`它将会开启一个独立的布局区域，不会受到外部元素的影响，这个布局区域将会具有以下一些特殊的性质：

* 开启了`BFC`的元素子元素的垂直外边距不会传递给父元素；
* 开启了`BFC`的元素不会被浮动的元素所覆盖；
* 开启了`BFC`的元素可以包含浮动的子元素

需要注意的是：`BFC`无法直接开启，需要通过一些属性来开启`BFC`：

* 设置元素浮动可以开启`BFC`；
* 设置元素为行内块元素；
* 可以将元素的`overflow`设置为一个非`visible`的值；

结论：

可以通过将元素`overflow`设置为`hidden`，来清除浮动效果

#### 使用`after`伪元素清除浮动

较为常见的用法

![百度清除浮动after伪元素](..\imgs\百度清除浮动after伪元素.png)

![网易清除浮动](..\imgs\网易清除浮动.png)

方法：

```css
.clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}
.clearfix {*zoom: 1;}   /* IE6、7 专有 */
```

注意： content:"."  里面尽量跟一个小点，或者其他，尽量不要为空，否则再firefox 7.0前的版本会有生成空格。

#### 使用before和after双伪元素清除浮动

与处理垂直方向上的父子元素外边距合并问题方法可以一起解决，此时写为：

```css
.clearfix:before,
.clearfix:after{
    content:'';
    display:table;
    clear:both;
}
.clearfix {*zoom: 1;}   /* IE6、7 专有 */
```

### 定位

通过定位我们可以将元素可自由移动页面元素的位置使其摆放在页面中的任意位置

#### `position`

属性值：

|   属性值   |       说明       |
| :--------: | :--------------: |
|  `static`  | 默认值，自动定位 |
| `relative` |     相对定位     |
| `absolute` |     绝对定位     |
|  `fixed`   |     固定定位     |

##### `relative`

当`position:relative`，则开启了该元素的相对定位，相对定位的意思是：相对于该元素原文档流的位置进行定位

```css
position:r elative;
```

开启后特点：

* 开启相对定位后，元素并不会发生任何变化；
* 开启相对定位后，元素不会脱离文档流，即当元素通过定位有了新位置后，原来的位置也会继续占有；
* 相对定位的元素，是相对于其原在文档流中的位置进行定位的
* 相对定位会使元素提升一个层级
* 相对定位不会改变元素的性质，即块级元素还是块级元素，而行内元素还是行内元素

可以通过四个方向的偏移量来控制元素的位置：

|   方向   |             说明             |
| :------: | :--------------------------: |
|  `top`   | 元素与其原定位位置的顶部距离 |
| `bottom` | 元素与其原定位位置的底部距离 |
|  `left`  | 元素与其原定位位置的左侧距离 |
| `right`  | 元素与其原定位位置的右侧距离 |

一般只需要使用两个值就可以确定一个元素的位置