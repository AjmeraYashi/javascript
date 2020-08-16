var hits;
{
    let count=0;
    hits= function getCurrent(){
        count=count+1;
        return count;
    };
}

console.log(hits());