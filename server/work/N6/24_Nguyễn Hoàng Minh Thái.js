//// 1 
// Cách gọi nào sau đây là đúng nhất
let q25_a = new Promise((resovle, reject) => {
    resovle("Done");
});

q25_a()
    .then(result => console.log(result))
    .catch(error => console.error(error));

q25_a() // chon
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(data => console.log("Finish"));

q25_a().catch(error => console.error(error));

q25_a()
    .then(result => console.log(result))
    .finally(data => console.log("Finish"));



//// 2 

// Tạo một vòng lặp đếm ngược từ 9 đến 1. Sử dụng generator function và spread operator để in ra
function* down(x=9) {
    yield x--;
    if(x == 0)
        return;
}


//// 3 

// Sử dụng nối chuỗi trong promise để in ra 5 số fibonacci
let prm = ({pas=0, cur=1}) => new Promise(res, rej) {
    resolve({cur, pas+cur});
    reject("");
}

prm().then(x)

//// 4 
// Kết quả trả ra sẽ là gì?
const { a, b, ...c } = { a: 1, b: "Test", c: () => "This is a function", d: [1, 4, 5, 2] }
console.log(a);
console.log(c);
// Trả lời: 


//// 5 
// Kết quả trả ra sẽ là gì?
function q21_func() {
    console.log(message);
    var message = "This is a test";
}
q21_func(15);
// Trả lời: 


