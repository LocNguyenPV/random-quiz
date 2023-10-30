//// 1 

// Sửa lại arrow function sau sao cho đúng
let q13_func  = return  1 ;




//// 2 
// Cách gọi nào sau đây là đúng nhất
let q25_a = new Promise((resovle, reject) => {
    resovle("Done");
});


q25_a()
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(data => console.log("Finish"));





//// 3 

// Viết một promise trả về lỗi bất kỳ sau 1s và xử lý bằng .catch()




//// 4 
// Sử dụng nối chuỗi trong promise để in ra 5 số fibonacci




//// 5 
// Kết quả trả ra sẽ là gì?
const { a, b, ...c } = { a: 1, b: "Test", c: () => "This is a function", d: [1, 4, 5, 2] }
console.log(a);
console.log(c);
// Trả lời: 
console.log(1,4,2)


