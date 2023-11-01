/// Question ///

// Giải thích sự khác nhau của 3 biến sau
var q1_a = 1;
let q1_b = 2;
const q1_c = 3;


/// Question ///

// Trong những biến sau, biến nào là sai, hãy sửa lại sao cho đúng
q2_a = true;
q2_b = false;
let q2_b;
const q2_c1 = 1;
const q2_c2 = "Test";


/// Question ///

// Đoạn code nào sau đây là sai
q3_c1[1] = 4;

const q3_c2 = "Test";
q3_c2 = 1;


/// Question ///

// Sử dụng Template String để in ra chuỗi theo định dạng sau 'Hi, Luke'
let q4_a = "Luke";

/// Question ///

// Sử dụng Destructoring để tách thuộc tính của biến sau
let q5_a = { name: "Luke", age: 26 };
console.log(); //Write here


/// Question ///

// Sử dụng Destructoring để tách giá trị của biến sau

/// Question ///

// Sử dụng Destructoring để lấy giá trị mảng của biến sau
let q7_a = {
    parent: {
        children: {
            value: [1, 2, 3, 4],
        },
    },
};



/// Question ///

// Sử dụng Destructoring để lấy duy nhất giá trị thứ 3 của mảng 
let q8_a = [0, 1, 2, 3, 4, 5, 6];
/// Question ///

// Sử dụng Spread để gắn 2 mảng lại 
let q9_a = [0, 1, 2, 3]
let q9_b = [4, 5, 6];

/// Question ///

// Sử dụng Spread để thêm thuộc tính {phone: '0123'} vào object 
let q10_a = { name: 'Luke', className: 'N123' }
/// Question ///

// Khai báo một function bất kỳ có sử dụng Rest Parameter


/// Question ///

// Sử dụng arrow function viết lại function sau
function sum(a, b) {
    return a + b;
}


/// Question ///

// Sửa lại arrow function sau sao cho đúng



/// Question ///

// Sửa lại arrow function sao cho không cần dùng return vẫn trả về giá trị a

/// Question ///
//Sử dụng arrow function để viết hàm chuyển từ phút sang giây


/// Question ///

// Kết quả của funcA và funcB là gì
this.name = "Luke"
let q16_a = {
    name: "adam",
    funcA: () => { console.log(this.name) },
    funcB: function () {
        console.log(this.name);
    }
}


/// Question ///

// Hiện giờ đoạn code đang in ra 10 lần câu 'The number is 4', sửa lại đoạn code sao cho đúng mà không xóa setTimeout
// Kết quả mong muốn: The number is 0, The number is 1, The number is 3, The number is 4 
/// Question ///

// Kết quả của funcA và funcB là gì
let q15_a = {
    name: "adam",
    funcA: () => { console.log(this.name) },
    funcB: function () {
        console.log(this.name);
    }
}


/// Question ///


let q18_a = sum(5);
console.log(q18_a);



/// Question ///

// Sử dụng Default Parameter sao cho giá trị biến q19_a là 8

let q19_a = sumFunc(4);
console.log(q19_a);



/// Question ///

// Định dạng nào sau đây là định dạng object trả về của generator function

//{value, isDone}
//{result, finish}
//{value, finish}



/// Question ///

// Sửa lại function sau thành generator function

function generatorFunc(a, b) {
    return a * b;
}



/// Question ///

// Tạo một vòng lặp đếm ngược từ 9 đến 1. Sử dụng generator function và spread operator để in ra



/// Question ///

// Viết một promise trả về một chuỗi bất kì sau 2s và in ra kết quả.



/// Question ///

// Viết một promise trả về lỗi bất kỳ sau 1s và xử lý bằng .catch()



/// Question ///

// Sử dụng nối chuỗi trong promise để in ra 5 số fibonacci



/// Question ///

// Viết một chuỗi các promise, từng promise sẽ nhận vô các chữ làm tham số và ghép lại thành một câu hoàn chỉnh

/// Question ///
// Kết quả trả ra sẽ là gì?
const q20_func = (num) => num > 20 ? 1 : 0;

q20_func(15);
// Trả lời: 

/// Question ///
// Kết quả trả ra sẽ là gì?
function q21_func() {
    console.log(message);
    var message = "This is a test";
}
// Trả lời: 

/// Question ///
// Kết quả trả ra sẽ là gì?
function q22_func(...params) {
    console.log(typeof params);
}
q22_func(15);

/// Question ///
// Kết quả trả ra sẽ là gì?
function q23_func(...params) {
    return (() => "This is a string");
}
console.log(typeof q23_func);


/// Question ///
// Kết quả trả ra sẽ là gì?
let q24_a = "12345"
console.log([...q24_a]);

/// Question ///
// Khai báo một hàm bất kỳ có sử dụng rest parameter, in ra những parameter đó

/// Question ///
// Khai báo một hàm có tên là q27_sum, sử dụng rest parameter, tính tổng của parameter truyền vô
q27_sum(1, 2, 3, 4);

/// Question ///
// Kết quả trả ra sẽ là gì
// Trả lời: 

/// Question ///
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
    .finally(data => console.log("Finish"));

q25_a().catch(error => console.error(error));

q25_a()
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));


/// Question ///
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



/// Question ///
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

/// Question ///
//Cho một mảng các giá trị, sử dụng forEach để in ra từng giá trị
let q29_arr = [1, 2, "Test", 8, 2];