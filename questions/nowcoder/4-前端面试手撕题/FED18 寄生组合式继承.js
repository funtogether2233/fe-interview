// 描述
// 请补全JavaScript代码，要求通过寄生组合式继承使"Chinese"构造函数继承于"Human"构造函数。要求如下：
// 1. 给"Human"构造函数的原型上添加"getName"函数，该函数返回调用该函数对象的"name"属性
// 2. 给"Chinese"构造函数的原型上添加"getAge"函数，该函数返回调用该函数对象的"age"属性
function Human(name) {
  this.name = name;
  this.kingdom = "animal";
  this.color = ["yellow", "white", "brown", "black"];
}
Human.prototype.getName = function () {
  return this.name;
};

function Chinese(name, age) {
  Human.call(this, name);
  this.age = age;
  this.color = "yellow";
}
Chinese.prototype = Object.create(Human.prototype);
Chinese.prototype.constructor = Chinese;
Chinese.prototype.getAge = function () {
  return this.age;
};
