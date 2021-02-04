// 23.5 ----map-filter
// const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);  // এইটাতে আউট পুট আসবে সবগুলার স্কুয়ার


// function square (element){
//     return element * element;
// }
// const square = element => element * element;
// const square = x => x * x;  এই তিনটা যাস্ট এক্সামপল কারন এই তিনটা সবগুলা একই রকম হবে



// const numbers = [3, 4, 5, 6, 7, 8];
// numbers.map(function(element, index, array ){       //map      // এখানে element মানে সুধু সংখ্যা গুলা দেখাবে । ইনডেক্স মানে হলো সংখ্যার পজিশন 0 , 1, 2 এই রকম টাইপের দেখাবে্ । আর এরে মানে হলো পুরা সংখ্যা টাকে এরের মত দেখাবে ্ [3, 4, 5, 6] েএই এরের মত
//     console.log(element, index, array);   
// })



// const numbers = [3, 4, 5, 6, 7, 8];
// const result = numbers.map(function(element){
//     return element * element;
// })
// console.log(result);   //map  // এই সংখ্যা গুলাকে স্কুয়ায় করা হবে 


// const numbers = [3, 4, 5, 6, 7, 8];
// const result = numbers.map(x => x * x);     //map   // আগের মত সেইম হবে স্কুয়ার এর মান । এটা সটকাট
// console.log(result);


// const numbers = [3, 4, 5, 6, 7, 8];
// const bigger = numbers.filter(x => x >5);    //filter    // এটার মানে হলো 5 থেকে বড় সংখ্যা গুলাকে দেখাবে এরের মত  
// console.log(bigger);


const numbers = [3, 4, 5, 6, 7, 8];
const bigger = numbers.find(x => x >5);    // find    // এইটা হলো 5 থেকে বড় সুধু প্রথম সংখ্যাটাকেই কনশল করা হবে।
console.log(bigger);



