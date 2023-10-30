//// 1 

// Sửa lại arrow function sao cho không cần dùng return vẫn trả về giá trị a
let q14_func = (a) => { return a };


//// 2 
// Cách gọi nào sau đây là đúng nhất
let q25_a = new Promise((resovle, reject) => {
    resovle("Done");
});

q25_a()
    .then(result => console.log(result))
    .catch(error => console.error(error));

q25_a()//
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(data => console.log("Finish"));

q25_a().catch(error => console.error(error));

q25_a()
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));



//// 3 

// Viết một promise trả về lỗi bất kỳ sau 1s và xử lý bằng .catch()




//// 4 

// Tạo một vòng lặp đếm ngược từ 9 đến 1. Sử dụng generator function và spread operator để in ra




//// 5 

// Trong những biến sau, biến nào là sai, hãy sửa lại sao cho đúng
q2_a = true;
q2_b = false;
let = q2_b;
const q2_c1 = 1;
const q2_c2 = "Test";



