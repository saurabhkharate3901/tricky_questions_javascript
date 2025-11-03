// [[0, 1], [2, 3]].reduce(
//     (acc, cur) => {
//       return acc.concat(cur);
//     },
//     [1, 2],
//   );

// const myPromise = () => Promise.resolve('I have resolved!');

// function firstFunction() {
//   myPromise().then(res => console.log(res,"1"));
//   console.log('First');
// }

// async function secondFunction() {
//   console.log(await myPromise());
//   console.log('second');
// }

// firstFunction();
// secondFunction();

// const myPromise = Promise.resolve(Promise.resolve('Promise'));

// function funcOne() {
//   setTimeout(() => console.log('Timeout 1!'), 0);
//   myPromise.then(res => res).then(res => console.log(`${res} 1!`));
//   console.log('Last line 1!');
// }

// async function funcTwo() {
//   const res = await myPromise;
//   console.log(`${res} 2!`)
//   setTimeout(() => console.log('Timeout 2!'), 0);
//   console.log('Last line 2!');
// }

// funcOne();
// funcTwo();

// const promise1 = Promise.resolve('First')
// const promise2 = Promise.resolve('Second')
// const promise3 = Promise.reject('Third')
// const promise4 = Promise.resolve('Fourth')

// const runPromises = async () => {
//     const res1 = await Promise.all([promise1, promise2])
//     const res2  = await Promise.all([promise3, promise4])
//     return [res1, res2]
// }

// runPromises()
//     .then(res => console.log(res))
//     .catch(err => console.log(err))


// const p1 = Promise.resolve(3);
// const p2 = 1337;
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 100);
// });

// Promise.all([p1, p2, p3]).then((values) => {
//   console.log(values); // [3, 1337, "foo"]
// });

// const p1 =  Promise.reject("first")
// const p2 =  Promise.resolve("Second")
// const p3 =  Promise.resolve("Third")
// const p4 =  Promise.resolve("Fourth")

// Promise.any([p1,p2,p3,p4]).then((val)=>{
//     console.log(val)
// }).catch(err=>{
//     console.log(err)
// })



// const promise1 = Promise.resolve('First');
// const promise2 = Promise.resolve('Second');
// const promise3 = Promise.reject('Third');

// Promise.all([promise1, promise2])
//     .then(results => console.log(results))  // Logs: ['First', 'Second']
//     .catch(error => console.log(error));

// Promise.all([promise1, promise3])
//     .then(results => console.log(results))
//     .catch(error => console.log(error));  // Logs: 'Third'


// const promise1 = Promise.reject('First failed');
// const promise2 = Promise.resolve('Second');
// const promise3 = Promise.reject('Third failed');

// Promise.any([promise1, promise2, promise3])
//     .then(result => console.log(result))  // Logs: 'Second'
//     .catch(error => console.log(error));  // Will not log since one promise resolves

// Promise.any([promise1, promise3])
//     .then(result => console.log(result))
//     .catch(error => console.log(error));  // Logs: AggregateError: All promises were rejected


// const promise1 = new Promise((resolve) => setTimeout(() => resolve('First'), 100));
// const promise2 = new Promise((resolve) => setTimeout(() => resolve('Second'), 50));
// const promise3 = new Promise((resolve, reject) => setTimeout(() => reject('Third failed'), 30));

// Promise.race([promise1, promise2, promise3])
//     .then(result => console.log(result))  // Logs: 'Third failed' (because it rejects the fastest)
//     .catch(error => console.log(error)); 