function counter(step=1){
    var count=0;
    return function increaseCount(){
        count=count+step;
        return count;
    };
}

var incrBy1= counter(1);
var incrBy3 = counter(3);

console.log(incrBy1());
console.log(incrBy1());

console.log(incrBy3());
console.log(incrBy3());
console.log(incrBy3());
