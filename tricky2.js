// let a =[10,20,30,40,50]

// let start = 0
// let end = a.length-1
// while(start<end){
//     let temp = a[start];
//     a[start]=a[end];
//     a[end]=temp;
//     start++
//     end--
// }
// console.log(a)

// function result(n){
// let a =[10,20,30,40,50]

// for(let i=0;i<a.length;i++){
// for(let j=i+1;j<a.length;j++){
//     if(a[i]<a[j]){
//     let temp = a[i];
//     a[i]=a[j];
//     a[j]=temp;
// }  
// }}
//    if(n>0 && n<a.length){
//       console.log(a[n-1])
//    }
// }

// result(2)

// let str = 'saurabh'
// let a =str.split('')

// let start = 0
// let end = a.length-1
// while(start<end){
//     let temp = a[start];
//     a[start]=a[end];
//     a[end]=temp;
//     start++
//     end--
// }
// console.log(a.join(''))


// let num = 123
// let d1 ;
// let sum=0;

// while(num>0){
//     d1= num%10
//     sum=sum*10+d1
//     num=parseInt(num/10)
// }

// console.log(sum)

// for(let i=0;i<5;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }


// for(var i=0;i<5;i++){
//     {
//         let num = i
//     setTimeout(()=>{
//         console.log(num)
//     },1000)
//  }
// }

// for(var i=0;i<5;i++){
//     setTimeout((i)=>{
//         console.log(i)
//     },1000*i,i)
// }

// async function result(){
// for(var i=0;i<5;i++){
//     let p = await new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res(i)
//         },1000)
//     })
//     console.log(p)
// }
// }
// result();

// function sum(a,b){
//   if(!b){
//     return function(b){
//         return a+b
//     }
//   }
//   return a+b
// }
// console.log(sum(2,3))
// console.log(sum(2)(3));

