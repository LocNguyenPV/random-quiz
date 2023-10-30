//// 1 

// Sử dụng Destructoring để lấy duy nhất giá trị thứ 3 của mảng 
let q8_a = [0, 1, 2, 3, 4, 5, 6];



//// 2 
// Cách gọi nào sau đây là đúng nhất
let q25_a = new Promise((resovle, reject) => {
    resovle("Done");
});

q25_a()
    .then(result => console.log(result))
    .catch(error => console.error(error));

// q25_a()
//     .then(result => console.log(result))
//     .catch(error => console.error(error))
//     .finally(data => console.log("Finish"));

q25_a().catch(error => console.error(error));

q25_a()
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));



//// 3 
// Khai báo một hàm bất kỳ có sử dụng rest parameter, in ra những parameter đó



//// 4 
// Kết quả trả ra sẽ là gì?
function q23_func(...params) {
    return (() => "This is a string");
}
console.log(typeof q23_func);
// Trả lời: 

// This is a string


//// 5 
// Kết quả trả ra sẽ là gì?
const q20_func = (num) => num > 20 ? 1 : 0;
q20_func(15);
// Trả lời: 


