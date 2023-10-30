//// 1 

// Sử dụng Template String để in ra chuỗi theo định dạng sau 'Hi, Luke'
let q4_a = "Luke";
console.log(`Hi, ${q4_a}`); //Write here



//// 2 

// Sử dụng Destructoring để tách thuộc tính của biến sau
let q5_a = { name: "Luke", age: 26 };
console.log(); //Write here



//// 3 

// Sử dụng nối chuỗi trong promise để in ra 5 số fibonacci
const fibonacci = function(){
    return new Promise(resovle, reject)
}



//// 4 
// Cách gọi nào sau đây là đúng nhất
let q25_a = new Promise((resovle, reject) => {
    resovle("Done");
});

q25_a()
    .then(result => console.log(result))
    .catch(error => console.error(error));+

q25_a()
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(data => console.log("Finish"));

q25_a().catch(error => console.error(error));

q25_a()
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));



//// 5 

// Định dạng nào sau đây là định dạng object trả về của generator function

//{value, isDone}
//{result, finish}
//{value, finish}
//{value, done}+




