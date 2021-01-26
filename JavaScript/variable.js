/*
 * @Author: your name
 * @Date: 2021-01-25 21:36:18
 * @LastEditTime: 2021-01-26 22:34:33
 * @LastEditors: Please set LastEditors
 * @Description: JS中的变量
 * @FilePath: \Study_Notes\JavaScript\variable.js
 */

// 变量
// 定义变量
// var name;
// console.log(name);

// 初始化变量
// var name = 'LiTao';
// console.log(name);
// name = 28;
// console.log(name);

// var name = 'LiTao',
//     age = 28,
//     message = 'Hi';
// console.log(name, age, message);

// 变量作用域
// function test(){
//   var message = "hi";
//   console.log("test:message=>>", message);
// }
// test()
// console.log("message:", message);

// function test1(){
//   msg1 = "Hello";
//   console.log("test1:msg1=>>", msg1);
// }
// test1()
// console.log("msg1:", msg1);

// var name = 'LiTao';
// var age = 18;
// function getname(){
//   age = 28;
//   console.log('name:', name);
// }
// getname();
// console.log("age:", age);

// 动态赋予属性
// 变量：引用类型
// var person = new Object();
// person.name = "LiTao";
// console.log(person.name);

// 变量：基本类型
// var name = 'LiTao';
// name.age = 28;
// console.log(name.age);

// 复制变量
// 基本类型变量
// var str1 = 'LiTao';
// var str2 = str1;
// str1 = 'Mia';
// console.log('str1:', str1);
// console.log('str2:', str2);
// 引用类型变量
// var obj1 = new Object();
// var obj2 = obj1;
// obj1.name = 'LiTao';
// console.log('obj2.name:', obj2.name);
// obj2.name = 'Mia';
// console.log('obj1.name:', obj1.name);

// typeof操作符
// console.log('true:', typeof(true));
// console.log('undefined:', typeof(undefined));
// console.log('LiTao:', typeof('LiTao'));
// console.log('null:', typeof(null));
// console.log('5:', typeof(5));
// var person = new Object();
// console.log('person:', typeof(person));
// console.log('true:', typeof true);

// function sayHi(){
//   console.log('Hi');
// }
// console.log('sayHi:', typeof sayHi);

// undefined变量
// var name;
// console.log(name === undefined);
// console.log(typeof tmp);
// console.log(typeof age);

// null
// console.log(null == undefined);
// console.log(null === undefined);

// boolean
// console.log(Boolean('string'));
// console.log(Boolean(''));
// console.log(Boolean(5));
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// var person = new Object();
// console.log(Boolean(person));

var name = "LiTao";
if(name){
  console.log('我拥有了姓名', name);
}