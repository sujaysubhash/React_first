//Rest operator

// const k=['name','place','age',22,33,55];

// const [name,place,...age]=k;
// console.log(name,place,age);


// //function Rest opeartion

// // function x(num1,num2,...num3){
// //     console.log(num1,num2,num3);
// // }

// // x(1,2,3,4,5,6,7,8,9,10)

//spread operator

const arr1=[22,33,44]
const arr2=[55,55,55]

const newArr=[...arr1,...arr2]
//combining the two array into one single array

console.log(newArr);