const functions= require('./functions');

beforeEach(()=>initDatabase());
const initDatabase=()=> console.log('Database Initialised..');

test('Add 2 + 2 to equal 4', ()=>{
    expect(functions.add(2,2)).toBe(4);
});

test('Add 2 + 2 to not equal 5', ()=>{
    expect(functions.add(2,2)).not.toBe(5);
});

test('Sholud be null', ()=>{
    expect(functions.isNull()).toBeNull();
});

test('Should be falsy', ()=>{
    expect(functions.checkValue(null)).toBeFalsy();
});

test('User should be Yashi Ajmera object', ()=>{
    expect(functions.createUser()).toEqual({firstname: "Yashi", lastname : "Ajmera"});
});

test('Should be under 1600',()=>{
    const load1= 800;
    const load2 = 700;
    expect(load1+load2).toBeLessThanOrEqual(1600);
});


test('there is no i in team',()=>{
    expect('team').not.toMatch(/i/);
});

test('Admin should be in username',() =>{
    usernames = ['yashi','manan','admin'];
    expect(usernames).toContain('admin');
});

// test('user fetched named should be Leanne Graham',() =>{
//    // expect.assertions(1);
//     functions.fetchUser()
//     .then(data => {
//         expect(data.name).toEqual('Leanne Graham1');
//     });
// });


// test('user fetched named should be Leanne Graham',async () =>{
//     // expect.assertions(1);
//    const data = await functions.fetchUser();
  
//          expect(data.name).toEqual('Leanne Graham');
//  });
 
 