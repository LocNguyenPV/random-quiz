//// 1 
//Sử dụng arrow function để viết hàm chuyển từ phút sang giây



//// 2 
// Kết quả trả ra sẽ là gì?
let q24_a = "12345"
console.log([...q24_a]);
// Trả lời: 
    12345

//// 3 

// Hiện giờ đoạn code đang in ra 10 lần câu 'The number is 4', sửa lại đoạn code sao cho đúng mà không xóa setTimeout
// Kết quả mong muốn: The number is 0, The number is 1, The number is 3, The number is 4 
for (var val = 0; val < 4; val++) {
    setTimeout(() => {
        console.log('The number is ' + val);
    }, 1000);
}



//// 4 
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
// cach 2


//// 5 

// Sử dụng Destructoring để lấy giá trị mảng của biến sau
let q7_a = {
    parent: {
        children: {
            value: [1, 2, 3, 4],
        },
    },
};
q7_a()
    .then()


