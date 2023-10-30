//// 1 

// Viết một promise trả về một chuỗi bất kì sau 2s và in ra kết quả.
var a= Promise



//// 2 

// Sử dụng Destructoring để lấy duy nhất giá trị thứ 3 của mảng 
let q8_a = [0, 1, 2, 3, 4, 5, 6];



//// 3 
// Cách gọi nào sau đây là đúng nhất
let q26_a = Promise.reject("Error");

q26_a()
    .then(result => console.log(result))
    .catch(error => console.error(error));

q26_a()
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(data => console.log("Finish"));

//q26_a().catch(error => console.error(error));

q26_a()
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));




//// 4 
//Sử dụng arrow function để viết hàm chuyển từ phút sang giây



//// 5 

// Kết quả của funcA và funcB là gì
this.name = "Luke"
let q16_a = {
    name: "adam",
    funcA: () => { console.log(this.name) },
    funcB: function () {
        console.log(this.name);
    }
}
//kq funca = adam 
//kq funcb = adam



