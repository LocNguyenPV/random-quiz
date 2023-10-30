//// 1 

// Viết một promise trả về lỗi bất kỳ sau 1s và xử lý bằng .catch()
let promise1 = () =>{
    return new Promise(resolve,reject){
        resolve(1)
        reject(new Error("Error"))
    }
}
promise1().then(console.log).catch(console.error("error"))



//// 2 
// Kết quả trả ra sẽ là gì?
function q21_func() {
    console.log(message);
    var message = "This is a test";
}
q21_func(15);
// Trả lời: 15


//// 3 

// Tạo một vòng lặp đếm ngược từ 9 đến 1. Sử dụng generator function và spread operator để in ra

function* generator1(...arr){
    for(let i=arr.length-1; i>=0;i--){

    }
}
generator1(10)

//// 4 
//Sử dụng arrow function để viết hàm chuyển từ phút sang giây
let tinhgiay=(phut)=>{
    let giay=phut*60
    return giay
}



//// 5 
// Khai báo một hàm có tên là q27_sum, sử dụng rest parameter, tính tổng của parameter truyền vô
q27_sum(1, 2, 3, 4);


