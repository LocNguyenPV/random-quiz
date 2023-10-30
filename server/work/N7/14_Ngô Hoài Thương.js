//// 1 

// Sử dụng Default Parameter sao cho giá trị biến a là 8

let sumFunc = (a = 8, b) => { return a * b };
let q19_a = sumFunc(4);
console.log(q19_a);




//// 2 

// Sử dụng Destructoring để lấy giá trị mảng của biến sau
let q7_a = {
    parent: {
        children: {
            value: [1, 2, 3, 4],
        },
    },
};

let a = 



//// 3 

// Định dạng nào sau đây là định dạng object trả về của generator function

//{value, isDone}
//{result, finish}
//{value, finish}
{value, done}




//// 4 

// Khai báo một function bất kỳ có sử dụng Rest Parameter
function tong(a, b ...thamso) {
    
}


//// 5 

// Sử dụng nối chuỗi trong promise để in ra 5 số fibonacci
function fibonacci(n) {
    return new Promise((resolve, reject) => {
        let f = [0,1]

        for (let i = 2; i < n; i++)
            f[i] = f[i-1] + f[i-2]
        resolve(f[n])
    })
}

fibonacci(0)
    .then((kq => {
        console.log(kq);
        return fibonacci(1);
    }))
    .then((kq => {
        console.log(kq);
        return fibonacci(2);
    }))
    .then((kq => {
        console.log(kq);
        return fibonacci(3);
    }))
    .then((kq => {
        console.log(kq);
        return fibonacci(4);
    }))




