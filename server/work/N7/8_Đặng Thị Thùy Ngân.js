//// 1 

// Tạo một vòng lặp đếm ngược từ 9 đến 1. Sử dụng generator function và spread operator để in ra
function DemNguoc (){
for(var i=9; i<=9; i--) {
    console.log(i);
}
}



//// 2 
// Kết quả trả ra sẽ là gì?
function q23_func(...params) {
    return (() => "This is a string");
}
console.log(typeof q23_func);
// Trả lời: String



//// 3 

// Sử dụng Destructoring để tách giá trị của biến sau
let q6_a = [2, 3, 4, 5];



//// 4 

// Giải thích sự khác nhau của 3 biến sau
var q1_a = 1;  //=> dung trong pham vi rong (global)
let q1_b = 2;  //=> dung trong 1 khoi lenh nhat dinh, ngoai khoi lenh se khong thuc hien
const q1_c = 3; //=> dung cho phuong thuc



//// 5 
// Kết quả trả ra sẽ là gì?
function q22_func(...params) {
    console.log(typeof params);
}
q22_func(15);
// Trả lời: 


