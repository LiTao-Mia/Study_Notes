# ES6

## `let`/`var`

### 变量作用域

变量在什么范围内是可用的

例如：块状作用域

```html
<script>
  // let_var
  // 变量作用域
  {
    var name = 'Mia';
    console.log('块状作用域内name:', name);
  }
  console.log('块状作用域外name:', name);
</script>
```

![block_scope](D:\Study_Notes\imgs\block_scope.png)

会发现此时的两次输出结果是一致的

### 缺点

没有块状作用域带来的影响也就是这样暴露出来的缺点：

#### `if`的块级

```javascript
// if
var func
if(true){
  var name = 'Timo';
  console.log('if块内name:', name);
  func = function(){
    console.log('func函数块内name:', name);
  }
  func()
  
}
console.log('if块外name:', name)
name = 'Mia'
func()
```

会发现可以随意的对某个块内的变量进行修改操作

#### for的块级

```html
<body>
  <button>第1个</button>
  <button>第2个</button>
  <button>第3个</button>
  <button>第4个</button>
  <button>第5个</button>
</body>
<script>
  // let_var
  // for块级
  var btns = document.getElementsByTagName('button');
  for(var i=0; i< btns.length; i++){
    btns[i].addEventListener('click', function(){
      console.log('第' + i + '个按钮被点击了哦！')
    })
  }

</script>
```

![for](D:\Study_Notes\imgs\for.png)

现象：此时会发现无论是点击其中的哪一个按钮显示的都是第五个按钮被点击了

解决方法：闭包

```javascript
// for块级
var btns = document.getElementsByTagName('button');
for(var i=0; i< btns.length; i++){
  // 闭包
  (function (i) {
     btns[i].addEventListener('click', function(){
       console.log('第' + (i+1) + '个按钮被点击了哦！')
     })
   })(i)
}
```

为什么闭包能够解决该问题：函数是有作用域的，它本身就是一个作用域

ES5中的`var`是**没有块级作用域**的，而ES6中的`let`是**有块级作用域**的

## `const`

当变量无需再次赋值时，就可以使用`const`来保证数据的安全性

在ES6开发中，优先使用`const`，而需要修改即在此赋值的变量时使用`let`

**`const`使用注意点：**

* const修饰的标识符必须赋值

```javascript
const i; // Uncaught SyntaxError: Missing initializer in const declaration
```

* const修饰的标识符赋值后不可以修改

```javascript
const y = 'mia';
y = 'Tao'; // Uncaught TypeError: Assignment to constant variable.
```

* 常量的含义是指向的对象不能修改，但是可以改变对象内部的属性

```javascript
const info = {
  name: 'Mia',
  age: 24,
  hobby: 'reading'
}
console.log(info) // {name: "Mia", age: 24, hobby: "reading"}

info.name = 'Tao'
info.age = 28
info.hobby = 'movie'
console.log(info) // {name: "Tao", age: 28, hobby: "movie"}
```

**原因：**

`const`修饰的是对象时，其针对的是其内存地址，故此时不能修改的只是其存储的内存地址

## 对象增强写法

### 属性的简写

```javascript
// 对象增强写法
// 1.属性简写
let name = 'Tao'
let age = 24
  
// ES6之前
let obj1 = {
  name: name,
  age: age
}
console.log(obj1)  // {name: "Tao", age: 24}
// ES6之后
let obj2 = {
  name,
  age
}
console.log(obj2)  // {name: "Tao", age: 24}
```

