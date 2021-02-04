//23.7 --- closure.js  
// একটা ফাংশনের বিতরে যদি আরেকটা ফাংশন থাকে তাহলে তা একটা ক্লোজ এনবারমেন্ট তৈরি করে।  বিতরের যে ফাংশন টা রিটান্ট করতেচে বা কল করেছেঃ। সে যদি তার বাইরের কোন বেরিয়েবল কে িএকচেন্স করে তাহলে সে েএকটা মান রেখে দেয় এবং এই একই বেরিয়েবল বার বার ডিকলার করা হলে এক এক করে বারতে থঅকবে। আগ েপরে করা যাবে কোন সমস্যা নাই।         
function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1());      //1  // 1, 1 করে বারতে থাকবে। কারন উপরে কাউন্ট করা হেইছে
console.log(clock1());      //2
console.log(clock1());      //3
console.log(clock1());      //4

const clock2 = stopWatch();
console.log(clock2());      //1
console.log(clock2());      //2
console.log(clock1());      //5    // এইটা যেহেতু প্রথমটাই আবার ডিকলার করা হইছে তাই 5 হবে
console.log(clock2());      //3



