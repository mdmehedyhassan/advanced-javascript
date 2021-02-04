
// 23-3 --------true-false.js

// 0     --falsy
// ""    --falsy
// undefined    --falsy
// null    --falsy
// NaN    --falsy এইখানে যেই সংখ্যা গুলা আছে তা থাকলে ফলস হবে
// false    --falsy

// " ", "0", [], {}, true -----truthy  এইগুলা থাকলে বলা যাবে এফ এই চলে যাবে মানে ট্রু 

// const age = 41;  // এখানে 41  এর যায়গায়  কোন মিথ্যা মান থাকলে তা মিথ্যে মানে ইলসে চলে যাবে
// if(age){
//     console.log("condition is true");
// }
// else{
//     console.log("condition is false");
// }


// const name = "Rahim";
// if(name){
//     console.log("condition is true");
// }
// else{
//     console.log("condition is false");
// }


//let name;
let name = {};
// console.log(name);
if(name){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}


