
// 23.4 double-vs-triple-equal.js // ডাবল ইকোয়েল মানে হলো সুধু বেলুটাকে চেক করবে আর যদি ট্রিপল ইকোয়েল থাকে তাহলে বেলু সহ টাইপ দেখাবে।  ডাবল (==) যদি দেই তাহলে 2==”2” সত্যি বলবে । কিন্তু যদি 2===“2” লেখি তাহলে মিথ্যা বলবে। == দিলে সুধু বেলু দেখবে কোন টাইপের তা দেখবেনা আর === দিলে প্রথম যদি নাম্বার দেই তাহলে 2টাও নাম্বার ই হতে হবে। অন্য কিছু হলে হবেনা। যদি আমি প্রথমটার মান 1 বা 0 দেই আর দিতীয় টার মান ট্রু  বা ফল্স দেই তাহলে আর == মাজে দেই তাহলে ট্রু==1 আর ফল্স ==0 এই দুইটা ট্রু হবে অন্য কোন মান এই রকম হবেনা। কিন্তু === দিলে বেলু সহ চেক করবে।
const first = 2;
const second = "2";
if(first === second){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}



