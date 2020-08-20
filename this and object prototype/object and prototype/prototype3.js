function Foo(){

}
console.log(Foo.prototype);
var a= new Foo();
var proto= Foo.prototype;
console.log(proto.constructor);
console.log(a.__proto__.constructor);
