//// 1 
// Kết quả trả ra sẽ là gì?
let q24_a = "12345"
console.log([...q24_a]);
// Trả lời: 
"12345"

//// 2 
// Kết quả trả ra sẽ là gì?
function q23_func(...params) {
    return (() => "This is a string");
}
console.log(typeof q23_func);
// Trả lời: 
"this is a string"


//// 3 

// Sử dụng Default Parameter sao cho giá trị biến a là 8

let sumFunc = (a, b) => { return a * b };
let q19_a = sumFunc(4);
console.log(q19_a);




//// 4 

// Viết một promise trả về một chuỗi bất kì sau 2s và in ra kết quả.




//// 5 
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
q28_promise1,2000
q28_promise2,1000

