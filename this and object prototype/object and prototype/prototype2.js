function Employee(name){
    this.name=name;
}

var emp1= new Employee("Yashi");
var emp2= new Employee("Manan");

Employee.prototype.prankPlayed= function(){
    console.log("Yashi played");
}
console.log(emp1.prankPlayed());