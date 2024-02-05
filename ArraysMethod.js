// 1)pop()
// 2)push()
// 3)reverse()
// 4)shift()
// 5)unshift()
// 6)Splice()
// 7)sort()

// 8)slice()
// 9)concat()




// const fun = ["Apple","Orange","Guava","Banana"]
// console.log(fun.reverse());

// Descending order
// let num = [2,3,4,5,6,7,7,2,1]
// const ret = num.sort((a,b)=>
//    a-b
// );
// console.log(ret);


// create a function that takes an array and returns it elements from last to first.
// function LastToFirst(arrs){
//     return arrs.sort((x,y)=>
//     y-x
//     )
// }
// let ar = [1,2,3,4,5,6,7,8,9,20];
// console.log(LastToFirst(ar));


// let fullName = [
//     {name:"ramesh",address:"Putalisadak"},
//     {name:"Rohit",address:"Bhaktapur"},
//     {name:"sameer",address:"Kathmandu"},
//     {name:"ajay",address:"Lalitpur"},
// ]




// Create a function that takes an array and return last element of that array.
// let arr = [1,2,3,4,5]
// const lastEl = arr => arr[arr.length-1]
// console.log(lastEl);
// function LatEl(arr){
//     return (arr.length-1);
// }
// console.log(LatEl(arr))




// methods that does not change original array
// 1) slice() -> this method is use to take a portion of an array. It doesn;t mutates the orginal array rather it creates a shallow copy of it.
// mat, filter and reduce
// it takes two arguments 
// 1) arg -> starting index
// 2) arg -> end index(doesnot include the final elements of the count)

// let fruits = ['guava','apple','orange','cherry','watermelon','banana'];
// console.log(fruits.slice(2,5));
// console.log(fruits);


// 2) concat() -> this method is used to join the two array 
// let a = [1,2,3,4,5];
// let b = [4,5,6,6,'jdsfk'];
// console.log(a.concat(b));
// console.log(a);
// console.log(b);

// 3) spread operator (...) -> this operator is used to copy elements of one to the another array.
 let toys =['ball','car','doll'];
// let hobbies = ['reading','gaming','coding'];
// let arraymethodUsingSpreadOperator = [...toys, ...hobbies];

// console.log(arraymethodUsingSpreadOperator);
// console.log(hobbies);
// console.log(toys);

// let arr = [0,1,[2,3]]
// let x = [...arr,10,100,...toys];
// console.log(x);

// Create a funtionc takes array of numbers and return the sum of those number.

let num = [1,2,3,4];
function sum(num){  
   while(num>0){
    let s1 =0;
    s1 = s1+num[i];
    return s1
   }
}
console.log(sum(num));


