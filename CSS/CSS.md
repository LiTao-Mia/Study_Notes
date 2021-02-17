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

##### 结构性伪类选择器

* `Selector:root`
* `Selector:only-child`
* `Selector:only-of-type`
* `Selector:`

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

盒子模型(box model)，页面中每个元素相当于页面中的一个矩形盒子，也就是说一个页面中的所有元素都可以被当做一个个的矩形盒子

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

### 内容区

内容区指的是盒子中放置内容的区域，也就是元素中的文本内容，且子元素也都是存在于内容区中的

特点：

* 如果没有为元素设置内填充区和边框，则内容区的大小默认和盒子的大小是一致的
* 通过`width`和`height`两个属性可以设置内容区的大小
* `width`和`height`属性只适合于块元素

### 内填充区

### 边框区

### 外边距区