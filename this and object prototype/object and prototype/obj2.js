var emp1={};
emp1.firstNme="Yashi";
emp1.lastName="Ajmera";
emp1.gender="female";
emp1.designation="Analyst";

var emp2={};
emp1.firstNme="Yash";
emp1.lastName="Maheshwari";
emp1.gender="male";
emp1.designation="Assitant";

function createEmployeeObject(firstName, lastName, gender,designation){
    //var newObject={};
    this.firstNme=firstName;
    this.lastName=lastName;
    this.gender=gender;
    this.designation=designation;
    //return newObject;
}

//var emp3=createEmployeeObject("Manan","Ajmera","male","manager");

var emp3= new createEmployeeObject("Manan");
console.log(emp3.firstNme);