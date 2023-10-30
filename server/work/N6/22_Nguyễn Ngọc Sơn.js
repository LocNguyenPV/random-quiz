//// 1 

// Hiện giờ đoạn code đang in ra 10 lần câu 'The number is 4', sửa lại đoạn code sao cho đúng mà không xóa setTimeout
// Kết quả mong muốn: The number is 0, The number is 1, The number is 3, The number is 4 
for (var val = 0; val < 4; val++) {
    setTimeout(() => {
        console.log('The number is ' + val);
    }, 1000);
}



//// 2 
//Sử dụng arrow function để viết hàm chuyển từ phút sang giây
var giay=function(phut){
    return phut*60
}
console.log(phut(2))

//// 3 
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
//lenh nay dc in ra truoc 
q28_promise2().then(result => console.log(result));
//lenh nay dc in ra sau
q28_promise1().then(result => console.log(result));




//// 4 

// Sửa lại arrow function sau sao cho đúng
let q13_func = () => return 1;




//// 5 

// Viết một chuỗi các promise, từng promise sẽ nhận vô các chữ làm tham số và ghép lại thành một câu hoàn chỉnh


