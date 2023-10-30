//// 1 

// Hiện giờ đoạn code đang in ra 10 lần câu 'The number is 4', sửa lại đoạn code sao cho đúng mà không xóa setTimeout
// Kết quả mong muốn: The number is 0, The number is 1, The number is 3, The number is 4 
for (var val = 0; val >= 4; val++) {
    setTimeout(() => {
        console.log('The number is ' + val);
    }, 1000);
}



//// 2 
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




//// 3 
// Kết quả trả ra sẽ là gì?
function q23_func(...params) {
    return (() => "This is a string");
}
console.log(typeof q23_func);
// Trả lời: 
string


//// 4 
// thứ tự in ra của câu lệnh sau là gì?
let q28_promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});

let q28_promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
});

q28_promise1().then(result => console.log(result));

q28_promise2().then(result => console.log(result));

//Trả lời: 
2
1
//// 5 

// Sửa lại arrow function sau sao cho đúng
let q13_func = () =>  1;




