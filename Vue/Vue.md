# Vue

[Vue官网](https://cn.vuejs.org/)

## Vue是什么

Vue是一个渐进式前端框架

### 渐进式

The Progressive Framework

渐进式框架就是把框架分层：

- **小型项目：**使用Vue就够了
- **随着页面的复杂程度提高：**需要vue-router来管理更多的页面
- **随着项目的数据越来越多：**需要使用vuex来管理数据

### Vue全家桶

Vue全家桶：Vue / vue-router / vuex+axios

## 安装

使用一个框架的第一步，就是下载安装它：

### 直接CDN引入

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

### 下载引入

使用NPM命令来直接下载安装：

```shell
npm install -y vue
```

## MVVM

### MVC

MVC是后端的分层开发的概念

* **M:** Model，数据层，数据模型，用来操作数据，完成数据的CRUD
* **V：**View，视图层，对于前端来说也就是页面
* **C：**Controller，控制层，是视图层和数据层间沟通的桥梁，用于处理业务逻辑

### MVVM

Vue借鉴的是MVVM：

* **M：**Model，数据层
* **V：**View，视图层
* **VM：**ViewModel，视图模型

#### **核心思想**

> M <<==>> VM <<==>> V

#### **特点**

MVVM提出了**数据双向绑定**的概念，让数据自动的双向同步：

* V ==>> M：修改数据
* M ==>>V：修改视图

#### **优势**

MVC模式将应用程序划分为了三部分，实现了各部分的职责分离，但是，在前端中经常需要通过JS代码来进行一些逻辑操作，最终需要把这些逻辑操作展示在页面上，就需要频繁的进行DOM操作

#### Vue中的MVVM

![MVVM](D:\Study_Notes\imgs\MVVM.png)

其中;

* 

## 操作语法

### 插值操作

可通过`Mustache`语法将数据`data`插入到HTML中去，实现绑定

`mustache`语法也就是双大括号语法

```html
<body>
    <div id="app">
      <h1>Hello {{name}}</h1>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            name: 'LiTao'
          },
          methods:{}
        });
    </script>
</body>
```

![Hello](D:\Study_Notes\imgs\Hello.png)

#### `v-html`

当所需填入的数据是HTML代码，并且需要**解析出HTML代码来展示**

`v-html`接受一个`string`类型值，会将该`string`类型值解析出来并且进行渲染

```html
<body>
    <div id="app">
      <h1>Hello {{name}}</h1>
      <h2>{{link}}</h2>
      <h2 v-html="link"></h2>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            name: 'LiTao',
            link:'<a href="http://www.baidu.com">百度</a>'
          },
          methods:{}
        });
    </script>
</body>
```

![v-html](D:\Study_Notes\imgs\v-html.png)

#### `v-text`

`v-text`的作用与`mustache效果一致`，接受一个`string`类型值

```html
<body>
    <div id="app">
      <h1>Hello {{name}}</h1>
      <h2>{{link}}</h2>
      <h2 v-html="link"></h2>
      <h2 v-text="name"></h2>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            name: 'LiTao',
            link:'<a href="http://www.baidu.com">百度</a>'
          },
          methods:{}
        });
    </script>
</body>
```

![v-text](D:\Study_Notes\imgs\v-text.png)

#### `v-pre`

需要跳过元素的编译过程，用于只显示原本的`Mustache`语法

```html
<h1 v-pre>Hello {{name}}</h1>
```

![v-pre](D:\Study_Notes\imgs\v-pre.png)

#### `v-cloak`

在某些情况中，浏览器会直接显示出未编译的`mustache`模板，此时就可以通过`v-cloak`来解决

```html
<style>
  [v-cloak]{
    display: none;
  }
</style>

<body>
    <div id="app">
      <h1 v-cloak>Hello {{name}}</h1>
    </div>
</body>  
```

### 绑定操作

#### `v-bind`

当部分属性内容是**动态获取**的，会动态的变化，也就希望能够**动态绑定**，此时也就用到了`v-bind`

* 作用：**动态绑定属性**，用于绑定一个或多个属性值，或者向另一个组件传递`props`值
* 语法糖（简写）：`:`
* 例如：图片的链接`src`、`href`，动态绑定类、样式等

![v-bind_a_img](D:\Study_Notes\imgs\v-bind_a_img.png)

```html
<body>
    <div id="app">
      <a v-bind:href="href">Vue</a>
      <img v-bind:src="src">
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            href:'https://cn.vuejs.org/',
            src:'https://cn.vuejs.org/images/logo.png'
          },
          methods:{}
        });
    </script>
</body>
```

语法糖使用：

```html
<a :href="href">Vue</a>
<img :src="src">
```

##### `v-bind`绑定`class`

共有两种方式绑定：

* 对象语法
* 数组语法

###### 对象语法

* 用法：在`:class`后紧跟一个对象

* 通过判断，传入多个值

```html
<div :class="{'green':isGreen, 'bold':isBlod}">绿色的世界</div>
```

![v-bind_class](D:\Study_Notes\imgs\v-bind_class.png)

* 与其他普通类同时存在，并不会冲突

```html
<div class="red" :class="{'bold':isBlod}">小花花</div>
```

![v-bind_classes](D:\Study_Notes\imgs\v-bind_classes.png)

###### 数组语法

* 用法：在`:class`后紧跟一个数组
* 与使用对象来绑定用法类似，数组当中可包含多个值，与普通类名也并不冲突

```html
<h1 :class="[isGreen, isBlod]">绿色的世界</h1>
<div class="red" :class="[isBlod]">小花花</div>
```

![v-bind_class_arrary](D:\Study_Notes\imgs\v-bind_class_arrary.png)

##### `v-bind`绑定`style`

绑定的方式共有两种：

* 对象语法
* 数组语法

###### 对象语法

* 用法：在`:style`后面紧跟一个对象：
  * 对象中的`key`是CSS属性名称
  * 对象中的`value`是具体赋值，值可以来自`data`中的属性

```html
<body>
    <div id="app">
      <div :style="getStyles()">神秘的风格</div>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            size: 200,
            color: 'lightcoral'
          },
          methods:{
            getStyles:function(){
              return {fontSize:this.size + 'px',backgroundColor:this.color}
            }
          }
        });
    </script>
</body>
```

![v-bind-styles](D:\Study_Notes\imgs\v-bind-styles.png)

* CSS属性名
  * 可以使用驼峰式写法（camelCase），例如：`font-size`可以写作`fontSize`
  * 短横线分隔（kebab-case），特别需要注意的是，需要用单引号括起来，例如：`font-size`可以写作`font-size`

###### 数组语法

```html
<body>
    <div id="app">
      <div :style="[fontsizestyle, colorstyle]">神秘的风格</div>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            fontsizestyle: {fontSize:'160px'},
            colorstyle:{backgroundColor:'lightseagreen'}
          },
          methods:{
      
          }
        });
    </script>
</body>
```



![v_bind-styles-array](D:\Study_Notes\imgs\v_bind-styles-array.png)

### 计算属性`computed`

#### 应用场景

有时需要对数据进行一些处理转换操作后才能显示，或者需要将多个数据结合起来才能显示

```html
<body>
    <div id="app">
      <!-- 可以手动将其处理 -->
      <div class="myname">{{firstname+ ' ' +lastname}}</div>
      <!-- 使用计算属性 -->
      <div class="comname">{{fullname}}</div>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            firstname:'Mia',
            lastname:'Lee'
          },
          methods:{},
          computed:{
            fullname(){
              return this.firstname + this.lastname
            }
          }
        });
    </script>
</body>
```

场景需求：计算页面中所包含书的总金额

```html
<body>
    <div id="app">
      <!-- 显示书籍总金额 -->
      <div class="total">总金额：{{totalPrice}}</div>
      <div class="books">
        <ul>
          <li v-for="i in books">{{i.name}} {{i.price}}</li>
        </ul>
      </div>
      
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            books:[
              {name:'Javascript高级程序设计', price:119},
              {name:'Python核心编程', price:89},
              {name:'css世界', price:40},
              {name:'PHP与MySQL程序设计', price:68},
              {name:'深入浅出node.js', price:72}
            ]
          },
          methods:{},
          computed:{
            totalPrice(){
              let total = 0
              for (let i = 0; i < this.books.length; i++){
                total += this.books[i].price
              }
              return total
            }
          }
        });
    </script>
</body>

```

#### `setter`和`getter`

观察发现其计算属性设置时是函数，但如同属性一般使用，原因就是计算属性中的`setter`和`getter`

每一个计算属性都包含`setter`和`getter`：

* `setter`：用来设置，不常用
* `getter`：用来读取

```html
computed:{
  fullname: {
    // setter和getter
    set: function(newval) {
      console.log('调用set，显示新值：', newval)
    },
    get: function(){
      console.log('调用get')
      return this.firstname + this.lastname
      
    }
  },
}
```

当渲染页面使用计算属性`fullname`时，就自动调用了`get`：

![computed_getter](D:\Study_Notes\imgs\computed_getter.png)

当此时修改其中的内容时，其会自动调用`set`，同时修改的新值可以传入`set`中：

![computed_setter](D:\Study_Notes\imgs\computed_setter.png)

但不需要使用`set`时，就默认只使用`get`:

```html
computed:{
  fullname(){
  	return this.firstname + this.lastname
  },
}
```

#### 缓存机制

计算属性`computed`和方法`methods`可实现的效果是一样的，对比两者会发现：

```html
<body>
    <div id="app">
      <!-- 可以手动将其处理 -->
      <div class="myname">{{firstname+ ' ' +lastname}}</div>

      <!-- 使用methods -->
      <h1>使用methods</h1>
      <div class="getname">methods:{{getFullname()}}</div>
      <div class="getname">methods:{{getFullname()}}</div>
      <div class="getname">methods:{{getFullname()}}</div>
      <div class="getname">methods:{{getFullname()}}</div>

      <!-- 使用计算属性 -->
      <h1>使用计算属性computed</h1>
      <div class="comname">somputed:{{fullname}}</div>
      <div class="comname">somputed:{{fullname}}</div>
      <div class="comname">somputed:{{fullname}}</div>
      <div class="comname">somputed:{{fullname}}</div>
      
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            firstname:'Mia',
            lastname:'Lee',
          },
          methods:{
            getFullname(){
              console.log('使用methods==')
              return this.firstname + this.lastname
            }
          },
          computed:{
            fullname(){
              console.log('使用计算属性computed==')
              return this.firstname + this.lastname
            },
          }
        });
    </script>
</body>
```

发现较为明显的**区别**：

![computed_methods](D:\Study_Notes\imgs\computed_methods.png)

需要多次使用的时候，`methods`中的方法被发调用多次，但计算属性`computed`只被调用了一次

原因：计算属性具有缓存机制

### 事件监听`v-on`

在前端开发过程中，经常会用到交互，此时就需要监听用户操作发生的时间，比如：点击、拖拽、键盘事件等

**`v-on`命令：**

* 作用：绑定监听事件
* 语法糖（简写）：@
* 参数：`event`

```html
<body>
    <div id="app">
      {{num}}
      <br>
      <button @click='num++'>+</button>
      <button @click='num--'>-</button>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            num:0
          },
          methods:{}
        });
    </script>
</body>
```

![v-on_example](D:\Study_Notes\imgs\v-on_example.png)

也可以将事件指向一个`methods`中的方法，例如：

```html
<body>
    <div id="app">
      {{num}}
      <br>
      <button @click='increment()'>+</button>
      <button @click='descrement()'>-</button>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            num:0
          },
          methods:{
            increment(){
              return ++this.num
            },
            descrement(){
              return --this.num
            }
          }
        });
    </script>
</body>
```

#### `v-on`参数

* 正常传入所需参数时：

```html
<body>
    <div id="app">
      {{num}}
      <br>
      <!-- v-on参数 -->
      <!-- 正常赋予参数 -->
      <button @click="increment('add')">+</button>
      <button @click="descrement('reduce')">-</button>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            num:0
          },
          methods:{
            increment(opname){
              console.log('++++++++', opname)
              return ++this.num
            },
            descrement(opname){
              console.log('--------', opname)
              return --this.num
            }
          }
        });
    </script>
</body>
```



![v-on_par](D:\Study_Notes\imgs\v-on_par.png)

* 所需参数缺失时：

如果需要的参数没有传入，就会是`undefined`

```html
<body>
    <div id="app">
      {{num}}
      <br>
      <!-- v-on参数 -->
      <!-- 正常赋予参数 -->
      <!-- <button @click="increment('add')">+</button> -->
      <!-- <button @click="descrement('reduce')">-</button> -->
      <!-- 缺失参数 -->
      <button @click="increment()">+</button>
      <button @click="descrement()">-</button>

    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            num:0
          },
          methods:{
            increment(opname){
              console.log('++++++++', opname)
              return ++this.num
            },
            descrement(opname){
              console.log('--------', opname)
              return --this.num
            }
          }
        });
    </script>
</body>
```



![v-on_undefined](D:\Study_Notes\imgs\v-on_undefined.png)

* 后值写入调用函数名称，省略括号：

```html
<button @click="increment">+</button>
<button @click="descrement">-</button>
```

![v-on_event](D:\Study_Notes\imgs\v-on_event.png)

**可发现其隐藏了一个参数`event`，会默认将原生事件event参数传递进去**

**需要特别注意的是：当其本身不涉及传参时，也可以省略`()`，效果是相同的**

当传入参数时，仍需用到参数`event`时，可用`$enent`：

```html
<body>
    <div id="app">
      {{num}}
      <br>
      <!-- v-on参数 -->
      <!-- $event -->
      <button @click="increment('add', $event)">+</button>
      <button @click="descrement('reduce', $event)">-</button>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            num:0
          },
          methods:{
            increment(opname, event){
              console.log('++++++++', opname, event)
              return ++this.num
            },
            descrement(opname, event){
              console.log('--------', opname, event)
              return --this.num
            }
          }
        });
    </script>
</body>
```

![v-on_$event](D:\Study_Notes\imgs\v-on_$event.png)

#### `v-on`修饰符

`v-on`修饰符可帮助我们更加方便的去处理一些事情

##### `.stop`

* 作用：停止冒泡，作用效果相当于：调用 event.stopPropagation()

* 示例：

  ```html
  <body>
      <div id="app">
        <!-- v-on修饰符 -->
        <div class="outer" @click="divclick">
          <button class="btn" @click="btnclick">点击</button>
        </div>
      </div>
      <script>
          var vm=new Vue({
            el:'#app',
            data:{
            
            },
            methods:{
              divclick(){
                console.log('点击了div')
              },
              btnclick(){
                console.log('点击了按钮btn')
              }
            }
          });
      </script>
  </body>
  ```

  

  ![v-on_stop_pre](D:\Study_Notes\imgs\v-on_stop_pre.png)

  

为了阻止冒泡行为使用修饰符`.stop`:

```html
<div class="outer" @click="divclick">
  <button class="btn" @click.stop="btnclick">点击</button>
</div>
```

![v-on_stop](D:\Study_Notes\imgs\v-on_stop.png)

##### `.prevent`

* 作用：阻止默认行为，作用效果：调用`event.preventDefault`

* 示例：`a`链接标签阻止其点击后跳转的行为

  ```html
  <a href="https://cn.vuejs.org/" @click.prevent="">Vue</a>
  ```

  不需要表单中提交按钮的默认操作，有自己的处理逻辑

  ```html
  <form action="wenwen" method="post">
    <input type="submit" value="提交" @click.prevent='getclick'>
  </form>
  ```

##### `.once`

* 作用：在第一次操作时有用，后面的操作是没有作用的
* 示例：

```html
<body>
    <div id="app">
      <!-- .once -->
      <button @click.once="firstclick">点我呀</button>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{

          },
          methods:{
            firstclick(){
              alert('你确定要点击我吗？')
            }
          }
        });
    </script>
</body>
```

##### 按键修饰符

* 作用：修饰按键操作，即指定某个特定案件的操作后的逻辑
* 示例：

```html
<body>
    <div id="app">
      <!-- 键修饰符 -->
      <input type="text" name="info" id="info" @keyup.enter="isSubmit">
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{

          },
          methods:{
            isSubmit(){
              alert('您确定要提交吗？')
            }
          }
        });
    </script>
</body>
```

![@keyup_enter](D:\Study_Notes\imgs\@keyup_enter.png)

等效于：

```html
<input type="text" name="info" id="info" @keyup.13="isSubmit">
```

### 条件判断

#### `v-if`

* 作用：根据表达式的值在DOM中渲染或销毁元素或组件
* 示例：

```html
<body>
    <div id="app">
      <h1 v-if="isShow">我可以显示吗？</h1>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            isShow:true   // 为true时，显示；为false时，不显示
          },
          methods:{}
        });
    </script>
</body>

```

原理：

* 当表达式值为`true`时，正常显示元素

  ![v-if_true](D:\Study_Notes\imgs\v-if_true.png)

* 当表达式值为`false`时，元素将被注释，也就是压根不会有相应的标签元素会出现在DOM中

  ![v-if_false](D:\Study_Notes\imgs\v-if_false.png)

#### `v-else-if`与`v-else`

条件判断渲染

```html
<body>
    <div id="app">
      <h1 v-if="isShow">我可以显示吗？</h1>
      <!-- 条件判断渲染 -->
      <div v-if="result>90">我很优秀哦</div>
      <div v-else-if="result>80">我良好</div>
      <div v-else-if="result>60">我及格了</div>
      <div v-else="60>result">呃...我需要努力了</div>

    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            isShow:false,
            result:100
          },
          methods:{}
        });
    </script>
</body>
```

![v-else-if](D:\Study_Notes\imgs\v-else-if.png)

条件渲染小案例：用户登录时，可以切换使用用户账号登录还是邮箱地址登录

![条件渲染小案例](D:\Study_Notes\imgs\条件渲染小案例.png)

```html
<body>
    <div id="app">
      <h1 v-if="isShow">我可以显示吗？</h1>
      <div class="intype">
        <span v-if="intype==='username'">
          <label for="username">用户名：</label>
          <input type="text" name="username" id="username" placeholder="请填写用户名">
        </span>
        <span v-else>
          <label for="usermail">用户邮箱：</label>
          <input type="text" name="usermail" id="usermail" placeholder="请填写用户邮箱">
        </span>
        <button @click="handleToggle">切换类型</button>
      </div>

    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            isShow:false,
            // result:100,
            intype:"username"
          },
          methods:{
            handleToggle(){
              this.intype = this.intype==='username'?'usermail':'username';
            }
          }
        });
    </script>
</body>
```

此处的小案例有一个小问题：

当我们在`input`框内填入内容后，又想切换登录类型并点击了切换按钮后，发现`input`框内所填写的内容并未清空：

![条件渲染小问题](D:\Study_Notes\imgs\条件渲染小问题.png)

出现该情况的原因：

在`Vue`进行DOM渲染时，处于性能考虑，会尽可能的复用已经存在的元素，而不是重新去创建新的元素

解决方法：

不希望`Vue`出现类似重复利用的问题时，可以给对应的`input`添加`key`：

```html
      <div class="intype">
        <span v-if="intype==='username'">
          <label for="username">用户名：</label>
          <input type="text" name="username" id="username" placeholder="请填写用户名" key="username">
        </span>
        <span v-else>
          <label for="usermail">用户邮箱：</label>
          <input type="text" name="usermail" id="usermail" placeholder="请填写用户邮箱" key="usermail">
        </span>
        <button @click="handleToggle">切换类型</button>
      </div>
```

添加了`key`以后会发现点击切换类型按钮时，框内填写的信息将被清空

#### `v-show`

* 作用：与`v-if`的作用相似，用于决定一个元素是否渲染

* 示例：

  ![v-show_true](D:\Study_Notes\imgs\v-show_true.png)

当使其不显示时：

```html
<body>
    <div id="app">
      <h1 v-if="isShow">我可以显示吗？</h1>
      <!-- v-show -->
      <h1 v-show="isShow">我会显示吗？</h1>

    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            isShow:false,
          },
          methods:{

          }
        });
    </script>
</body>
```

![v-show_false](D:\Study_Notes\imgs\v-show_false.png)

**`v-if`与`v-show`的区别：**

* 当`v-if`的判断条件为`false`时，并不会有对应的元素在DOM中
* 当`v-show`的判断条件为`false`时，仅仅是将元素的`display`属性设置为`none`

**`v-if`与`v-show`的选择：**

* 当需要在显示与隐藏之间切换很频繁时，可使用`v-show`
* 当只有一次切换时，应使用`v-if`

### 循环遍历

#### `v-for`

* 作用：语法类似于`for`循环的使用

* 语法格式：

  * 对于数组的遍历：

    ```html
    <body>
        <div id="app">
          <ul>
            <!-- 只使用值 -->
            <li v-for="item in namelist">{{item}}</li>
          </ul>
        </div>
        <script>
            var vm=new Vue({
              el:'#app',
              data:{
                namelist:['毛毛', '胡迪', '白雪', '尼克', '史努比']
              },
              methods:{}
            });
        </script>
    </body>
    ```

    ![v-for_item](D:\Study_Notes\imgs\v-for_item.png)

    ```html
    <!-- 使用值和下标 -->
    <li v-for="(item, index) in namelist">{{index}}==>{{item}}</li>
    ```

    ![v-for_item_key](D:\Study_Notes\imgs\v-for_item_key.png)

  * 对于对象的遍历：

  ```html
  <body>
      <div id="app">
        <!-- 对象遍历 -->
        <ul>
          <li v-for="(value, key) in info">{{key}}:{{value}}</li>
        </ul>  
      </div>
      <script>
          var vm=new Vue({
            el:'#app',
            data:{
              info:{
                name:"LiTao",
                age:28,
                message:"我喜欢使用Vue...."
              }
            },
            methods:{}
          });
      </script>
  </body>
  ```

  ![v-for_value_key](D:\Study_Notes\imgs\v-for_value_key.png)

  ```html
  <!-- 使用对象的键、值和下标 -->
  <li v-for="(value, key, index) in info">{{key}}:{{value}}=={{index}}</li>
  ```

  ![v-for_key_value_index](D:\Study_Notes\imgs\v-for_key_value_index.png)

#### `key`属性

问题引出：点击添加按钮，会相应的添加元素

```html
<body>
    <div id="app">
      <!-- key -->
      <ul>
        <li v-for="(ele, index) in letters">
          {{index}}==>>{{ele}}
          <input type="text" name="info" id="info">
        </li>
      </ul>
      <button @click="addEle">添加一个元素</button>  
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            letters:['a', 'b', 'c', 'd']
          },
          methods:{
            addEle(){
              this.letters.splice(1, 0, 'LiTao');
            }
          }
        });
    </script>
</body>
```

![v-for-key_example1](D:\Study_Notes\imgs\v-for-key_example1.png)

点击按钮后会发生：

![v-for-key_example2](D:\Study_Notes\imgs\v-for-key_example2.png)

原属于`b`后的框内内容在增加元素后，变成了新元素的框内内容，此时就需要使用`key`属性了：

```html
<ul>
  <li v-for="(ele, index) in letters" :key="ele">
    {{index}}==>>{{ele}}
    <input type="text" name="info" id="info">
  </li>
</ul>
```

**`key`的工作原理：**

`key`属性与`Vue`虚拟`DOM`的`Diff`算法有关：

![key_diff1](D:\Study_Notes\imgs\key_diff1.png)

我们想在`B`与`C`之间插入一个`F`，`Diff`算法默认会将`C`更新成`F`，`D`更新成`C`，`E`更新成`D`，最后再将`E`插入其中，如此一来就会十分没有效率

![key_diff2](D:\Study_Notes\imgs\key_diff2.png)

所以需要使用`key`属性来给每个节点做一个唯一标识，使其找到正确的位置插入新的节点;

![key_diff3](D:\Study_Notes\imgs\key_diff3.png)

**总结：`key`属性的主要作用就是搞笑的更新虚拟`DOM `**

### 响应式数组操作

`Vue`是响应式的，也就是说当数发生改变时，`Vue`会自动监测器改变，并发生相应的视图改变，但并不是所有的数组改变操作都能使其有所反应：

```html
<body>
    <div id="app">
      <!-- 数组遍历循环 -->
      <ul>
        <li v-for="item in personList">{{item}}</li>
      </ul>
      <button @click="amendLastitem">直接修改最后一项</button>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            personList:['史努比', '皮卡丘', '白雪', '小黄人']
          },
          methods:{
            amendLastitem(){
              this.personList[this.personList.length-1] = 'LiTao';
            }
          }
        });
    </script>
</body>
```

![响应式数据操作_不响应](D:\Study_Notes\imgs\响应式数据操作_不响应.png)

响应式数组操作主要包含：

* `push`：在数组的末尾位置进行添加元素
* `unshift`：在数组开始的位置进行添加元素
* `pop`：删除数组末尾位置的元素
* `shift`：删除数组开始位置的元素
* `reverse`：将数组元素反向逆转
* `splice`：数组元素的删除、替换、添加操作

示例：

```html
<body>
    <div id="app">
      <!-- 数组遍历循环 -->
      <ul>
        <li v-for="item in personList">{{item}}</li>
      </ul>
      <button @click="amendLastitem">直接修改最后一项</button>
      <button @click="push_addEle">push</button>
      <button @click="unshift_addEle">unshift</button>
      <button @click="pop_delEle">pop</button>
      <button @click="shift_delEle">shift</button>
      <button @click="reverse_Ele">reverse</button>
      <button @click="splice_Ele">splice</button>
    </div>
    <script>
        var vm=new Vue({
          el:'#app',
          data:{
            personList:['史努比', '皮卡丘', '白雪', '小黄人']
          },
          methods:{
            amendLastitem(){
              this.personList[this.personList.length-1] = 'LiTao';
            },
            // 响应式数组操作
            // 1-push:在数组最后的位置进行添加元素
            push_addEle(){
              this.personList.push('Mia', 'LiTao');
            },
            // 2-unshift:在数组开始的位置进行添加元素
            unshift_addEle(){
              this.personList.unshift('Mia', 'LiTao');
            },
            // 3-pop:删除数组最后位置的元素
            pop_delEle(){
              this.personList.pop();
            },
            // 4-shift:删除数组开头位置的元素
            shift_delEle(){
              this.personList.shift();
            },
            // 5-reverse:将数组元素反向逆转
            reverse_Ele(){
              this.personList.reverse();
            },
            // 6-splice:删除，替换
            splice_Ele(){
              // 在数组1位置上进行添加元素
              // this.personList.splice(1, 0, 'LiTao', 'Mia');

              // 删除数组位置1至3上所有的元素
              // this.personList.splice(1,3);

              // 修改数组元素
              this.personList.splice(1, 3, 'LiTao');
            }
            
            
          }
        });
    </script>
</body>
```

