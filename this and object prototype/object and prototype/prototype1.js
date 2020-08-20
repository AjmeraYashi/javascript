function foo(){}


var newFooObj=new foo();
foo.prototype.test= "This is a prototype object of foo";
console.log(foo.prototype.test);
console.log(newFooObj.__proto__.test);
console.log(foo.prototype.test===newFooObj.__proto__.test);
console.log(newFooObj.test);
newFooObj.test=10;
console.log(newFooObj.test);