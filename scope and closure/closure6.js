function say(myName){
    
    return function output(greeting)
    {
        console.log(`${greeting}, ${myName}!`);
    };
}

var hey = say("Yashi");
hey("Hello");
