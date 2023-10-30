//// 1 

// Kết quả của funcA và funcB là gì
let q15_a = {
    name: "adam",
    funcA: () => { console.log(this.name) },
    funcB: function () {
        console.log(this.name);
    }
}



//// 2 

// Sử dụng Destructoring để tách giá trị của biến sau
let q6_a = [2, 3, 4, 5];



//// 3 

// Hiện giờ đoạn code đang in ra 10 lần câu 'The number is 4', sửa lại đoạn code sao cho đúng mà không xóa setTimeout
// Kết quả mong muốn: The number is 0, The number is 1, The number is 3, The number is 4 
for (var val = 0; val <= 4; val++) {
    setTimeout(() => {
        console.log('The number is ' + val);
    }, 1000);
}



//// 4 

// Viết một promise trả về lỗi bất kỳ sau 1s và xử lý bằng .catch()




//// 5 

// Sử dụng Destructoring để tách thuộc tính của biến sau
let q5_a = { name: "Luke", age: 26 };
console.log(); //Write here



