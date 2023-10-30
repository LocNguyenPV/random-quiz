//// 1 
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

q26_a()///
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));




//// 2 
// Kết quả trả ra sẽ là gì?
function q21_func() {
    console.log(message);
    var message = "This is a test";
}
q21_func(15);
// Trả loi: 
a test

//// 3 

// Sử dụng Default Parameter sao cho giá trị biến q19_a là 8

let sumFunc = (a, b) => { return a * b };
let q19_a = sumFunc(4);
console.log(q19_a);




//// 4 

// Sử dụng arrow function viết lại function sau
function sum(a, b) {
    return a + b;
}


//// 5 

// Sử dụng nối chuỗi trong promise để in ra 5 số fibonacci




