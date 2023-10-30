//// 1 

// Sử dụng Destructoring để tách giá trị của biến sau
let q6_a = [2, 3, 4, 5];



//// 2 

// Kết quả của funcA và funcB là gì
let q15_a = {
    name: "adam",
    funcA: () => { console.log(this.name) },
    funcB: function () {
        console.log(this.name);
    }
}
funcA: Adam


//// 3 
// Kết quả trả ra sẽ là gì?
function q21_func() {
    console.log(message);
    var message = "This is a test";
}
q21_func(15);
// Trả lời: 
This is a test

//// 4 
// Kết quả trả ra sẽ là gì?
const q20_func = (num) => num > 20 ? 1 : 0;
q20_func(15);
// Trả lời: 


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


