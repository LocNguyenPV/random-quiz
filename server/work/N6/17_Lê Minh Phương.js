//// 1 
// Kết quả trả ra sẽ là gì?
function q21_func() {
    console.log(message);
    var message = "This is a test";
}
q21_func(15);
// Trả lời: 


//// 2 

// Sử dụng Destructoring để tách thuộc tính của biến sau
let q5_a = { name: "Luke", age: 26 };
console.log(); //Write here



//// 3 
// Kết quả trả ra sẽ là gì?
const q20_func = (num) => num > 20 ? 1 : 0;
q20_func(15);
// Trả lời: 
16 17 18 19

//// 4 

// Sử dụng Destructoring để lấy duy nhất giá trị thứ 3 của mảng 
let q8_a = [0, 1, 2, 3, 4, 5, 6];
console.log(q8_a,4);


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


