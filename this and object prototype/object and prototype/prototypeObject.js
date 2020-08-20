function Employee(){}

var emp= new Employee();

emp.prop="Employee";
console.log(emp.prop);
emp.__proto__.parentProp="Parent of Employee";
console.log(emp.parentProp);
console.log(emp.__proto__.__proto__===Object.prototype);
Object.prototype.grandParent="GrandParent";
console.log(emp.grandParent);

function foo(){}
var tmp = new foo();
console.log(tmp.grandParent);