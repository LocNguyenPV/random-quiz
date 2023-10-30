//// 1 

// Sử dụng Template String để in ra chuỗi theo định dạng sau 'Hi, Luke'
let q4_a = "Luke";
console.log(); //Write here



//// 2 
// Cách gọi nào sau đây là đúng nhất
let q26_a = Promise.reject("Error");

q26_a()
    .then(result => console.log(result))
    .catch(error => console.error(error));

q26_a()o
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(data => console.log("Finish"));

q26_a().catch(error => console.error(error));

q26_a()
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));




//// 3 
// thứ tự in ra của câu lệnh sau là gì?
let q28_promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});

let q28_promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);1
});

q28_promise1().then(result => console.log(result));1

q28_promise2().then(result => console.log(result));

//Trả lời: 



//// 4 
// Cách gọi nào sau đây là đúng nhất
let q25_a = new Promise((resovle, reject) => {
    resovle("Done");
});

q25_a()
    .then(result => console.log(result))
    .catch(error => console.error(error));

q25_a()
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(data => console.log("Finish"));00

q25_a().catch(error => console.error(error));

q25_a()
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));



//// 5 

// Sửa lại arrow function sao cho không cần dùng return vẫn trả về giá trị a
let q14_func = (a) => { return a };


