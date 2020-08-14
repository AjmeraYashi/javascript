var buttonNames = new Map();
buttonNames.set(abc,"button 1")
buttonNames.set(btn2,"Button 2");

for(let [btn,btnName] of buttonNames){
    btn.addEventListener("Click", function onClick(){
        console.log(`Clicked ${btnName}`);
    });
}