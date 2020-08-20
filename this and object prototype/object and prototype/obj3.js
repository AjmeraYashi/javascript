function createBicycle(cadence,speed,gear){
    var newBicycle={};
    newBicycle.cadence=cadence;
    newBicycle.speed=speed;
    newBicycle.gear=gear;
    return newBicycle;
}

var bicycle = createBicycle(50,40,4);
console.log(bicycle.cadence);
console.log(bicycle.speed);
console.log(bicycle.gear);

function Bicycle(cadence,speed,gear){
this.cadence=cadence;
this.speed=speed;
this.gear=gear;
}

var bicycle3= new Bicycle(40,67,5);

console.log(bicycle3.cadence);
console.log(bicycle3.speed);
console.log(bicycle3.gear);