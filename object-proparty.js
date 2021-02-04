// 23.6    object-proparty.js
const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaa'},
    {id: 41, name: 'Moyori'},
    {id: 71, name: 'Deepjol'}
];
// // for (let i = 0; i < students.length; i++) {
// //     const element = students[i];
// //     studentsName = element.name;
// //     console.log(studentsName)
// // }    // এইভাবে আমি ট্রাই করছি  এইভাবে করলে সবগুলা চলে আসবে কোন এরের মত আসবেনা। কিন্তু নিচের নিয়ম টা হলো মেইন।

// const names = students.map(s => s.name);  // map  // এখানে মেপ করা হইছে । এবং এস এর যায়গায় আমি এ বি এক্স ওয়াই সব কিছু বা ইলিমেন্ট ও ব্যবহার করতে পারি।  [ 'Omar Sunny', 'Maannaa', 'Moyori', 'Deepjol' ]
// console.log(names);  // এই ভাবে করলে আমরা পাবো এরের মধ্যে স্টিং আকারে দাবে।

// const ids = students.map(s => s.id);    // map  // এই রকম করলে স্টুডেন্টচ এর বিতরে যতগুলা আইডি আছে তা একটা এরের মধ্যে দেখাবে [ 21, 31, 41, 71 ]
// console.log(ids);

// const bigger = students.filter(s => s.id>40);      //filter   // 40 এর উপরে যেই আইডির মান গুলা আছে  সেই আইডির সকল বেল দেখা যাবে [ { id: 41, name: 'Moyori' }, { id: 71, name: 'Deepjol' } ]
// console.log(bigger);

const biggerOne = students.find(s => s.id>40);      //find   // 40 এর উপরে যেই আইডির মান  আছে সুধু একটা মান নিবে । সেই আইডির সকল বেল দেখা যাবে { id: 41, name: 'Moyori' }
console.log(biggerOne);





