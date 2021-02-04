# 组件化

## 什么是组件化

将一个页面拆分成为一个个小的功能块，而每个功能块完成属于自己这部分独立的功能，整个页面的所有逻辑就可以根据功能独立开来，有利于后续的管理以及扩展，之后针对整个页面的维护就十分方便了

![组件化思想](D:\Study_Notes\imgs\组件化思想.png)

组件化是`Vue.js`中十分重要的思想：

* 开发出一个个独立且可复用的小组件来构造所需开发的应用

* 整体开发的应用会被抽象成一棵组件树

  ![组件树](D:\Study_Notes\imgs\组件树.png)

* 组件思想的应用：将页面拆分成尽可能小的且可复用的组件，方便组织和管理，并且具有更强的扩展性

## 组件的使用

组件的使用分为三个步骤：

* 创建组件的构造器
* 注册组件
* 使用组件

![注册组件](D:\Study_Notes\imgs\注册组件.png)

### 注册组件

#### `Vue.extend()`

* 作用：调用`Vue.extend()`创建的是一个组建的构造器

* 在创建构造器的时候，传入`template`代表自定义组件的模板，其中，模板是指使用的到组件的地方

* 示例：

  ```html
  <script>
    // 1-创建组件构造器对象
    const cpnC = Vue.extend({
      template:`
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Navbar</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      `
    })
  </script>
  ```

* `Vue.extend()`现已很少使用，多用注册组件语法糖

#### `Vue.component()`

* 作用：将所创建的组件构造器注册为一个组件，并且给它起一个组件的标签名称
* 参数：涉及到两个参数：
  * 注册组件的标签名称
  * 组件构造器

* 示例：

  ```html
  <script>
    // 1-创建组件构造器对象
    const cpnC = Vue.extend({
      template:`
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand">Navbar</a>
        <form class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      `
    })
    // 2-注册组件
    Vue.component('navbar', cpnC)
      var vm=new Vue({
        el:'#app',
        data:{},
        methods:{}
      });
  </script>
  ```

* 语法糖：简化了整个过程，主要是省去了调用`Vue.extend()`的步骤，而是用一个对象来代替

  ```html
  <body>
      <div id="app">
        <navbar></navbar>
        <card></card>
      </div>
      <script>
        Vue.component('navbar',{
          template:`
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand">Navbar</a>
            <form class="form-inline">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </nav>
          `
        })
          var vm=new Vue({
            el:'#app',
            data:{},
            methods:{},
            components:{
              card:{
                template: `
                <div class="card" style="width: 18rem;">
                  <img src="../imgs/pexels-coffee-374757.jpeg" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>              
                `
              }
            }
          });
      </script>
  </body>
  ```

  ![组件注册语法糖使用](D:\Study_Notes\imgs\组件注册语法糖使用.png)

### 使用组件

在需要使用组建的地方写入组件，需要注意的是需要在`Vue`的实例范围内才能使用组件

```html
<body>
    <div id="app">
      <!-- 3-使用组件 -->
      <navbar></navbar>
    </div>
    <navbar></navbar>
    <script>
      // 1-创建组件构造器对象
      const cpnC = Vue.extend({
        template:`
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand">Navbar</a>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
        `
      })
      // 2-注册组件
      Vue.component('navbar', cpnC)

        var vm=new Vue({
          el:'#app',
          data:{},
          methods:{}
        });
    </script>
</body>
```

![组件使用_范围](D:\Study_Notes\imgs\组件使用_范围.png)

### 模板的分离写法

共有两种写法：

* `<script>`标签写法

  * 需要注意的是需要写明：`type='text/x-template'`
  * 需要写清`id`，以便后续使用

  ```html
  <body>
      <div id="app">
        <card></card>
      </div>
      <!-- 1-script标签使用 -->
      <script type='text/x-template' id='card_template'>
        <div class="card" style="width: 18rem;">
          <img src="../imgs/pexels-coffee-374885.jpeg" class="card-img-top" alt="coffee">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </script>
      <script>
        Vue.component('card',{
          template:'#card_template'
        })
  
        var vm=new Vue({
          el:'#app',
          data:{},
          methods:{},
        });
      </script>
  </body>
  
  ```

* `<template>`标签写法

  ```html
  <body>
      <div id="app">
        <navbar></navbar>
        <card></card>
      </div>
      <!-- 1-script标签使用 -->
      <script type='text/x-template' id='card_template'>
        <div class="card" style="width: 18rem;">
          <img src="../imgs/pexels-coffee-374885.jpeg" class="card-img-top" alt="coffee">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </script>
      <!-- 2-template标签使用 -->
      <template id='navbar_template'>
        <nav class="navbar navbar-light bg-light">
          <a class="navbar-brand">Navbar</a>
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>
      </template>
      <script>
        Vue.component('card',{
          template:'#card_template'
        })
  
        var vm=new Vue({
          el:'#app',
          data:{},
          methods:{},
          components:{
            navbar:{template:'#navbar_template'}
          }
        });
      </script>
  </body>
  ```

* 示例：

  ![模板分离写法](D:\Study_Notes\imgs\模板分离写法.png)

### 全局组件和局部组件

#### 全局组件

* 当调用`Vue.component()`注册组件时，组件的注册就是全局的

* 全局组件在任意的`Vue`示例下都可以使用

* 示例：

  ```html
  <body>
      <div id="app1">
        <card></card>
      </div>
      <div id="app2">
        <card></card>
      </div>
      <script>
        // 1-创建组件构造器
        const cpnC = Vue.extend({
          template:`
          <div class="card" style="width: 18rem;">
            <img src="../imgs/pexels-coffee-374885.jpeg" class="card-img-top" alt="coffee">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          `
        })
        // 2-注册组件
        Vue.component('card', cpnC)
  
          var vm1=new Vue({
            el:'#app1',
            data:{},
            methods:{}
          });
          var vm2=new Vue({
            el:'#app2',
            data:{},
            methods:{}
          });
  
      </script>
  </body>
  ```

  ![全局组件](D:\Study_Notes\imgs\全局组件.png)
  
  ![全局组件使用](D:\Study_Notes\imgs\全局组件使用.png)

#### 局部组件

* 一旦我们将所注册的组件挂载在某个实例中去，则该组件就会成为局部组件

* 示例：

  ```html
  <body>
      <div id="app1">
        <card></card>
      </div>
      <div id="app2">
        <card></card>
      </div>
      <script>
        // 1-创建组件构造器
        const cpnC = Vue.extend({
          template:`
          <div class="card" style="width: 18rem;">
            <img src="../imgs/pexels-coffee-374885.jpeg" class="card-img-top" alt="coffee">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
          `
        })
          var vm1=new Vue({
            el:'#app1',
            data:{},
            methods:{},
            components: {
              'card': cpnC
            }
          });
          var vm2=new Vue({
            el:'#app2',
            data:{},
            methods:{}
          });
  
      </script>
  </body>
  ```

  ![局部组件使用](D:\Study_Notes\imgs\局部组件使用.png)

### 父组件与子组件

很多时候，组件与组件之间存在层级关系，而其中一种关系就是父子关系

* 示例：

  ```html
  <body>
      <div id="app">
        <card></card>
      </div>
      <script>
        // 1-创建组件构造器
        // 子组件
        const cpnC1 = Vue.extend({
          template:`
          <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">Left</button>
            <button type="button" class="btn btn-secondary">Middle</button>
            <button type="button" class="btn btn-secondary">Right</button>
          </div>
          `
        })
        // 父组件
        const cpnC2 = Vue.extend({
          template:`
          <div class="card" style="width: 18rem;">
            <img src="../imgs/pexels-coffee-374757.jpeg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <btns></btns>
              </div>
          </div>
          `,
          components:{
            btns:cpnC1
          }
        })
        // 2-注册组件
        Vue.component('card', cpnC2)
  
        var vm=new Vue({
          el:'#app',
          data:{},
          methods:{}
        });
      </script>
  </body>
  ```

* 需要注意的是：当子组件注册到父组件后，Vue会编译好父组件，此时父组件中已经包含了子组件的内容，但无法直接单独使用子组件：

  ```html
  <div id="app">
    <card></card>
    <btns></btns>
  </div>
  ```

  ![子组件的错误使用](D:\Study_Notes\imgs\子组件的错误使用.png)

### 组件中数据存储

组件可以访问`Vue`实例中`data`中的数据吗：

```html
<body>
    <div id="app">
      <card></card>
    </div>
    <template id="card-template">
      <div class="card" style="width: 18rem;">
        <img :src="imgpath" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{card_title}}</h5>
          <p class="card-text">{{card_text}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </template>
    <script>
      Vue.component('card',{
        template:"#card-template"
      })

      var vm=new Vue({
        el:'#app',
        data:{
          imgpath:'../imgs/pexels-coffee-374757.jpeg',
          card_text:'Have good time',
          card_title:'Coffee'
        },
        methods:{}
      });
    </script>
</body>
```

![组件访问数据出错](D:\Study_Notes\imgs\组件访问数据出错.png)

组件是一个单独功能模块的封装，所以它也可以有自己的数据`data`，倘若所有组件的数据都存放在了`Vue`实例的`data`中，那`Vue`就会变得十分的臃肿

组件中的数据存放在了哪里呢？

#### 数据存储`data`属性

**存放在了组件的`data`属性之中**

```html
<body>
    <div id="app">
      <card></card>
    </div>
    <template id="card-template">
      <div class="card" style="width: 18rem;">
        <img :src="imgpath" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{card_title}}</h5>
          <p class="card-text">{{card_text}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </template>
    <script>
      Vue.component('card',{
        template:"#card-template",
        data(){
          return {
            imgpath:'../imgs/pexels-coffee-374757.jpeg',
            card_text:'Have good time',
            card_title:'Coffee'
          }
        }
      })

      var vm=new Vue({
        el:'#app',
        data:{
          // imgpath:'../imgs/pexels-coffee-374757.jpeg',
          // card_text:'Have good time',
          // card_title:'Coffee'
        },
        methods:{}
      });
    </script>
</body>
```

![组件数据属性访问有效](D:\Study_Notes\imgs\组件数据属性访问有效.png)

**需要强调的是：**

* 组件数据存放在`data`属性中
* 组件中的`data`属性必须是一个函数
* `data`属性中的而函数返回的必须是一个对象，对象内部保存着数据

#### `data`属性函数原因

* 当组件中`data`属性如果不是函数，那么就会报错：

  ```javascript
  Vue.component('card',{
    data:{
      imgpath:'../imgs/pexels-coffee-374757.jpeg',
      card_text:'Have good time',
      card_title:'Coffee'
    }
  })
  ```

  ![组件中data属性报错](D:\Study_Notes\imgs\组件中data属性报错.png)

* 处于组件复用的考虑，应该让每个组件都返回一个新的对象，以免组件复用时后续操作的互相影响：

  ```html
  <body>
      <div id="app">
        <cal></cal>
        <cal></cal>
        <cal></cal>
        <cal></cal>
      </div>
      <template id="calculator_template">
        <div id="cal">
          <p class="font-italic">{{num}}</p>
          <button type="button" class="btn btn-light" @click="++num">+</button>
          <button type="button" class="btn btn-dark"@click="--num">-</button>  
        </div>
      </template>
      <script>
        Vue.component('cal', {
          template:"#calculator_template",
          data(){
            return {
              num:0
            }
          }
        })
  
        var vm=new Vue({
          el:'#app',
          data:{},
          methods:{}
        });
      </script>
  </body>
  ```

  ![calculator_Vue组件](D:\Study_Notes\imgs\calculator_Vue组件.png)

已上会发现，操作时相互是不会有影响的

若`data`属性函数返回的是已有的对象，则：

```javascript
let number ={num:0} 
Vue.component('cal', {
  template:"#calculator_template",
  data(){
    return number
  }
```

![calculator_数据同时影响改变](D:\Study_Notes\imgs\calculator_数据同时影响改变.png)

会发现此时任何一个操作会影响其他组件中的数据，原因是`data`属性中使用的是同一个对象

### 父子组件的通信

子组件是无法访问父组件的数据的，但在实际开发中，往往一些数据都是需要从上层传递到下层的：

一个页面向服务器请求到了很多的数据，部分数据由父组件以下的子组件展示出来，但并不可能由各个子组件去请求服务器，而是会直接让父组件去请求服务器拿到数据后再将数据传递给子组件

父子组件的通信方式：

* 通过`props`向子组件传递数据

* 通过事件向父组件发送消息

  ![父子组件通信](D:\Study_Notes\imgs\父子组件通信.png)

#### 通过`props`向子组件传递数据

```html
<body>
    <div id="app">
      <card :cardtitle="title" :cardtext="text" :cardimg="imgPath"></card>
    </div>
    <!-- 子组件模板:卡片 -->
    <template id="card-template">
      <div class="card" style="width: 18rem;">
        <img :src="cardimg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{cardtitle}}</h5>
          <p class="card-text">{{cardtext}}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </template>
    <script>

      var vm=new Vue({
        el:'#app',
        data:{
          imgPath:'../imgs/pexels-coffee.jpeg',
          title:'coffee',
          text:'Have good time...',
          alist:['Home', 'Features', 'Pricing', 'Other']
        },
        methods:{},
        components:{
          'card':{
            template:'#card-template',
            props:['cardtitle', 'cardtext', 'cardimg'],
            
          }
        }
      });
    </script>
</body>
```

![父子组件通信_整个页面](D:\Study_Notes\imgs\父子组件通信_整个页面.png)