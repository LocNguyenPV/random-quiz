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
const q3_c1 = [1, 2, 3];
q3_c1[1] = 4;

const q3_c2 = "Test";
q3_c2 = 1;


/// Question ///

// Sử dụng Template String để in ra chuỗi theo định dạng sau 'Hi, Luke'
let q4_a = "Luke";
console.log(); //Write here


/// Question ///

// Sử dụng Destructoring để tách thuộc tính của biến sau
let q5_a = { name: "Luke", age: 26 };
console.log(); //Write here


/// Question ///

// Sử dụng Destructoring để tách giá trị của biến sau
let q6_a = [2, 3, 4, 5];


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
let q10_a = {name: 'Luke', className: 'N123'}

/// Question ///

// Khai báo một function bất kỳ có sử dụng Rest Parameter


/// Question ///

// Sử dụng arrow function viết lại function sau
function sum(a, b){
    return a + b;
}

/// Question ///

// Sửa lại arrow function sau sao cho đúng
let q13_func = () => return 1;



/// Question ///

// Sửa lại arrow function sao cho không cần dùng return vẫn trả về giá trị a
let q14_func = (a) => { return a };



/// Question ///

// Kết quả của funcA và funcB là gì
this.name = "Luke"
let q16_a = {
    name: "adam",
    funcA: () => {console.log(this.name)},
    funcB: function(){
        console.log(this.name);
    }
}


/// Question ///

// Sửa lại đoạn code sao cho in ra kết quả đúng
for (var val = 0; val < 10; val++) {
    setTimeout(() => {
        console.log(`The number is ${val}`);
    }, 1000);
}


/// Question ///

// Kết quả của funcA và funcB là gì
let q15_a = {
    name: "adam",
    funcA: () => {console.log(this.name)},
    funcB: function(){
        console.log(this.name);
    }
}


/// Question ///

// Sử dụng Default Parameter sao cho giá trị biến a là 10
function sum(a, b){
    return a * b;
}
let q18_a = sum(5);
console.log(q18_a);



/// Question ///

// Sử dụng Default Parameter sao cho giá trị biến a là 8

let sumFunc = (a, b) => {return a * b};
let q19_a = sumFunc(4);
console.log(q19_a);



/// Question ///

// Định dạng nào sau đây là định dạng object trả về của generator function

//{value, isDone}
//{result, finish}
//{value, finish}
//{value, done}



/// Question ///

// Sửa lại function sau thành generator function

function generatorFunc(a, b){
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
