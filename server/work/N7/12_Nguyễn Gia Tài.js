//// 1 

// Khai báo một function bất kỳ có sử dụng Rest Parameter



//// 2 

// Sử dụng Destructoring để tách thuộc tính của biến sau
let q5_a = { name: "Luke", age: 26 };
console.log(); //Write here
// return `Name: "Luke" - age: 26`


//// 3 

// Hiện giờ đoạn code đang in ra 10 lần câu 'The number is 4', sửa lại đoạn code sao cho đúng mà không xóa setTimeout
// Kết quả mong muốn: The number is 0, The number is 1, The number is 3, The number is 4 
for (var val = 0; val < 4; val++) {
    setTimeout(() => {
        console.log('The number is ' + val);
    }, 1000);
}



//// 4 
// Kết quả trả ra sẽ là gì?
function q21_func() {
    console.log(message);
    var message = "This is a test";
}
q21_func(15);
// Trả lời: 
// this is a test x15

//// 5 

// Sử dụng Destructoring để lấy duy nhất giá trị thứ 3 của mảng 
let q8_a = [0, 1, 2, 3, 4, 5, 6];
// console.log(q8_a(3));



