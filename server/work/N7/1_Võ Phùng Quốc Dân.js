//// 1 
//Cho một mảng các giá trị, sử dụng forEach để in ra từng giá trị
let q29_arr = [1, 2, "Test", 8, 2];
q29_arr.forEach(element =>{
    console.log(q29_arr);
})
//// 2 

// Sửa lại arrow function sao cho không cần dùng return vẫn trả về giá trị a
let q14_func = (a) =>   a ;

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
 // dong 21 se tra ra ket qua la 1 trong 2 giay
 // dong 23 se tra ra ket qua la 2 trong 1 giay

//// 4 
// Khai báo một hàm bất kỳ có sử dụng rest parameter, in ra những parameter đó
    function rest(a,b,...rest1){
        return a*b*c;
    }
    let rest1=(5);
    console.log(rest);
//// 5 

// Kết quả của funcA và funcB là gì
let q15_a = {
    name: "adam",
    funcA: () => { console.log(this.name) },
    funcB: function () {
        console.log(this.name);
    }
}



