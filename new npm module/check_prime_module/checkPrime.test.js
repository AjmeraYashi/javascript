const checkPrime = require('./checkPrime');
const { TestScheduler } = require('jest');
test("between 1 to hundred",()=>{
    expect(checkPrime(10)).toBe(4);

});

test("if range is 1",()=>{
    expect(checkPrime(1)).toBe(0);
});

test("if function exist",() =>{
    expect(checkPrime(10)).toBeTruthy();
});

test("if range is defined",() =>{
    expect(checkPrime(null)).toBeTruthy();
})