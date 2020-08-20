function foo(){
    console.log("Hello");
}

foo(); //Method 1

var obj={};
obj.foo=function(){
    console.log("Hello");
}

obj.foo();  //Method2

new foo(); //Method3

