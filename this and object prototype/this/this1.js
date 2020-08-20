function identify(context){
    return context.name.toUpperCase();
}

function speak(context)
{
    var greeting="Hello , I am "+identify(context);
    console.log(greeting);
}

var me={
    name : "Yashi"
};

var you={
    name:"Aashi"
};

identify(me);
speak(you);