function Bicycle(cadence,speed,gear,tirePressure){
    this.cadence=cadence;
    this.speed=speed;
    this.gear=gear;
    this.tirePressure=tirePressure;
    this.inflateTires=function(){
        this.tirePressure+=3;

    }
}

var bicycle=new Bicycle(50,7,56,3);
bicycle.inflateTires();
console.log(bicycle.tirePressure);


function Mechanic(name){
    this.name=name;
}

var mike= new Mechanic("Mike");
mike.inflateTires = bicycle.inflateTires;

console.log(mike.inflateTires.call(bicycle));

//----------

