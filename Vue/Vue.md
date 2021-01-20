# Vue

[Vue官网](https://cn.vuejs.org/)

## Vue是什么

Vue是一个渐进式前端框架

### 渐进式

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

## 模板语法

### 计算属性

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