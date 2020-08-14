function greeting(msg)
{
    return function who(name){
        console.log(`${msg}, ${name}`);
    };
}

var hello=greeting("Hello");
var howdy=greeting("howdy");

hello("Yashi");
hello("Aashi");
howdy("Grant");