const { createFun } = require("./newModule");

const {doSomething,againdoSomething,create,readFun,updateFun,deleteFun} = require('./newModule.js')


console.log("js test using node")
//doSomething();
//againdoSomething();
console.log(createFun(1));
console.log(createFun(10));
console.log(readFun());
console.log(updateFun(0,100));
console.log(deleteFun(1));