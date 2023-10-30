//// 1 

// Sử dụng Spread để gắn 2 mảng lại 
let q9_a = [0, 1, 2, 3]
let q9_b = [4, 5, 6];
console.log(q9_a.q9_b)
let test = [...q9_a, ...q9_b];


//// 2 

// Viết một chuỗi các promise, từng promise sẽ nhận vô các chữ làm tham số và ghép lại thành một câu hoàn chỉnh
function(str){
    return new Promise
}

//// 3 

// Khai báo một function bất kỳ có sử dụng Rest Parameter

//// 4 

// Sử dụng Destructoring để tách thuộc tính của biến sau
let q5_a = { name: "Luke", age: 26 };
console.log(..(q5_a)); //Write here



//// 5 
// thứ tự in ra của câu lệnh sau là gì?
let q28_promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 2000);
});

let q28_promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve(2), 1000);
});

q28_promise1().then(result => console.log(result));

q28_promise2().then(result => console.log(result));

//Trả lời: 
//in ra q28_promise1 truoc sau do in ra q28...2
// in ra q28_promise2

