//// 1 
// Kết quả trả ra sẽ là gì?
const q20_func = (num) => num > 20 ? 1 : 0;
q20_func(15);
// Trả lời: 


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

// Viết một promise trả về lỗi bất kỳ sau 1s và xử lý bằng .catch()




//// 4 

// Đoạn code nào sau đây là sai
const q3_c1 = [1, 2, 3];
q3_c1[1] = 4;

const q3_c2 = "Test";
q3_c2 = 1;



//// 5 

// Sửa lại arrow function sao cho không cần dùng return vẫn trả về giá trị a
let q14_func = (a) => { return a };


