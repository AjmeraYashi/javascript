const checkPrime=(max)=>{
    var count=0, primes=[];
    var j,i;
    if(max<=1)
        return 0;
   for( i=2;i<=max;i++)
   {
       var a=false;
       for(j=2;j<=i/2 ;j++){
           if(i%j===0 && i!=j)
            {
               a=true;
            }
       }
       if(a===false){
           count++;
           primes.push(i);
       }
     }

return count;
}

module.exports = checkPrime;