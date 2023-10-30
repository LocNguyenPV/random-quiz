//// 1 

// Sửa lại arrow function sau sao cho đúng
let q13_func = () => return 1;




//// 2 
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
    .finally(data => console.log("Finish")); //



//// 3 
// Khai báo một hàm bất kỳ có sử dụng rest parameter, in ra những parameter đó



//// 4 
// Kết quả trả ra sẽ là gì?
let q24_a = "12345"
console.log([...q24_a]); 
// Trả lời: 
12345

//// 5 

// Viết một promise trả về lỗi bất kỳ sau 1s và xử lý bằng .catch()




