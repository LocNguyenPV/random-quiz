//// 1 

// Giải thích sự khác nhau của 3 biến sau
var q1_a = 1;
let q1_b = 2;
const q1_c = 3;



//// 2 
// Cách gọi nào sau đây là đúng nhất
let q25_a = new Promise((resovle, reject) => {
    resovle("Done");
});

q25_a()
    .then(result => console.log(result))
    .catch(error => console.error(error));//chon

q25_a()
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(data => console.log("Finish"));

q25_a().catch(error => console.error(error));

q25_a()
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));



//// 3 
// Kết quả trả ra sẽ là gì?
let q24_a = "12345"
console.log([...q24_a]);
// Trả lời: 4


//// 4 
//Sử dụng arrow function để viết hàm chuyển từ phút sang giây
let phut;
cont(phut)=>return*60;


//// 5 

// Khai báo một function bất kỳ có sử dụng Rest Parameter



