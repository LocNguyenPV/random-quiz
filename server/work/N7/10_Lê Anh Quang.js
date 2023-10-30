//// 1 

// Sửa lại arrow function sau sao cho đúng
let q13_func = () =>  1;




//// 2 

// Tạo một vòng lặp đếm ngược từ 9 đến 1. Sử dụng generator function và spread operator để in ra




//// 3 

// Giải thích sự khác nhau của 3 biến sau
var q1_a = 1;
let q1_b = 2;//khai bao trong khoi block
const q1_c = 3;



//// 4 
// Cách gọi nào sau đây là đúng nhất
let q26_a = Promise.reject("Error");

q26_a()
    .then(result => console.log(result))
    .catch(error => console.error(error));

q26_a()
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(data => console.log("Finish"));

q26_a().catch(error => console.error(error));

q26_a()
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));




//// 5 

// Sử dụng Template String để in ra chuỗi theo định dạng sau 'Hi, Luke'

let q4_a = "Luke";
console.log("Hi, "+q4_a); //Write here



