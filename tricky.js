// function foo2()
// {
//   return
//    {
//       bar: "hello"
//   };
// }
// console.log(foo2().bar); //TypeError


// console.log('Start of script');
// setTimeout(() => {
//   console.log('Inside setTimeout callback');
// }, 0);

// setImmediate(() => {
//   console.log('Inside setImmediate callback');
// });

// process.nextTick(() => {
//   console.log('Inside process.nextTick callback');
// });

// queueMicrotask(() => {
//   console.log('Inside queueMicrotask callback');
// });
// console.log('End of script');


// console.log("1 && 2 = "+ (1 && 2));
// console.log("1 || 2 = "+ (1 || 2));

// // If we can Perform arithmatic operations on string 
// //They will show NaN ()Not a Number 
// console.log( "A" - "B" + "2");  
// console.log( "A" - "B" + "2");  


// console.log(1 +  -"1" + "2");
// console.log(1 +  -"1" + "2");



// var a={},
//     b={key:'b'},
//     c={key:'c'};

//  a[b]=123;
//  a[c]=456;
// console.log(a[b]);


// Write only one function sum so that both log statements will print result 5
// Kartikey Singh
// console.log(sum(2,3)); 
// console.log(sum(2)(3));

// function sum(a,b){
//    if(!b){
//     return function(b){
//         return a+b;
//     }
//    }
//    return a+b;
// }
// console.log(sum(2,3));
// console.log(sum(2)(3));


// function hello(){
//     try{
//         throw new Error('Hello');
//     }catch(x){
//        var x=1,y=2
//        console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// }

// hello();

// function outer(){
//     var b = 2 
//     function inner(){
//         b++;
//         console.log(b) 
//         var b = 3; 
//        } 
//    inner();
// } 
// outer();


// console.log( 0.1 * 3 == 0.3);

// for (var i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }


// for (var i = 0; i < 10; i++) {
//     {
//         let num=i
//     setTimeout(() => {
//         console.log(num);
//     }, 1000)
//   }
// }


// for (let i = 0; i < 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000)
// }


// for (var i = 0; i < 10; i++) {
//     setTimeout((i) => {
//         console.log(i);
//     }, 1000*i,i)
// }


// async function result(){
// for (var i = 0; i < 10; i++) {
//     let ans = await new Promise((res,rej)=>{
//         setTimeout(() => {
//            res(i)
//         }, 1000)
//     })
//     console.log(ans);
//   }
// }
// result()


// console.log('10' - '2' + '5');

// console.log(true + false - '1' + '2');

// console.log(10 == '10' && '10' - 1 === 9);

// let a = '5';
// let b = 5;
// let c = false;
// console.log(a + b - c);

// console.log('5' + 10 - 5);

// console.log(('10' * '2') == (true + true + true + true + true));


// console.log('5' - - '2');

// console.log('3' + 2 * 2 - '1');

// console.log(('3' - '2' + '5') * true);

// let x = true == 1;
// let y = '1' == 1;
// let z = '1' === 1;
// console.log(x + y + z);

// console.log(true + 1);

// console.log([2] === [2])

// Promise.resolve(3)
//     .then((res) => {
//         console.log(res)

//     }).catch()
//     .then()
//     .then(res => res)
//     .then()
//     .catch()
//     .then((res) => {
//         console.log(res)
//     })

// test();
// function test() {
//     return true
// }