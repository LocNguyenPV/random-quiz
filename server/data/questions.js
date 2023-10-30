/// Question ///

// Sử dụng Destructoring để lấy giá trị mảng của biến q7_a
// sau đó sử dụng Spread Operator để gắn mảng q7_b vào mảng vừa mới lấy
// và sử dụng forEach để in ra từng phần tử

let q7_a = {
    parent: {
        children: {
            value: [1, 2, 3, 4],
        },
    },
};

let q7_b = [5, 6, 7, 8];

/// Question ///

// Sử dụng Spread để gắn 2 mảng lại
// Sử dụng forEach để in ra từng phần tử của mảng mới gắn
// sau đó sử dụng Destructoring để lấy duy nhất 2 phần tử ở vị trí thứ 1 và thứ 3 của mảng mới
let q9_a = [0, 1, 2, 3]
let q9_b = [4, 5, 6];


/// Question ///

// Sử dụng Spread để thêm thuộc tính {phone: '0123'} vào object
// sau đó sử dụng Destructoring để lấy thuộc tính className ra
let q10_a = { name: 'Luke', className: 'N123' }


/// Question ///

// Khai báo một function chỉ có duy nhất một tham số là Rest Parameter
// Tham số truyền vào là dạng number, Sử dụng forEach để tính tổng các tham số truyền vào 
//Ex: a(1, 2, 3) => 6

/// Question ///

// Khai báo một function chỉ có duy nhất một tham số là Rest Parameter
// Tham số truyền vào là dạng string, Sử dụng join để gắn các chuỗi truyền vào 
// Ex: a('Hi', 'there', '!') => 'Hi there!'

/// Question ///
// Viết hàm in ra 5 số fibonancy bằng generator function và sử dụng spread operator để in ra


/// Question ///
// Sử dụng nối chuỗi trong promise để in ra 5 số fibonacci


/// Question ///
// Sử dụng async function để viết lại hàm promiseChain
var job = () => new Promise((resolve, reject) => resolve(1));
var job2 = (value) => new Promise((resolve, reject) => resolve(value + 1));
var job3 = (value) => new Promise((resolve, reject) => resolve(value + 2));
var job4 = (value) => new Promise((resolve, reject) => resolve(value + 3));
var doSomething = (value) => console.log(value);

function promiseChain(){
    return job()
           .then((dataJob1) => {return job2(dataJob1)})
           .then((dataJob2) => {return job3(dataJob2)})
           .then((dataJob3) => {return job4(dataJob3)})
           .then((dataJob4) => {return doSomething(dataJob4)});
}


/// Question ///
// Viết một chuỗi các promise, từng promise sẽ nhận vô các chữ làm tham số và ghép lại thành một câu hoàn chỉnh

/// Question ///
// Cho một mảng các số, tạo 2 mảng mới sao cho
// một mảng chỉ gồm những số chẵn
// một mảng chỉ gồm những số lẻ
let arr_1 = [1, 2, 4, 5, 2, 7, 8];

/// Question ///
// Cho một mảng các số, tạo 2 mảng mới sao cho
// một mảng chỉ gồm những số lớn hơn 20
// một mảng chỉ gồm những số nhỏ hơn 20
let arr_2 = [20, 18, 27, 36, 12, 3, 4, 87];

/// Question ///
// Cho một mảng các số, thực hiện 2 yêu cầu sau
// Sử dụng filter để lọc ra những số lớn hơn 20 và là số chẵn
// Sau đó, sử dụng forEach để tính tổng các số đó
let arr_3 = [20, 21, 23, 24, 27, 28, 2, 4, 8, 10, 15] 

/// Question ///
// Cho hàm nhận vô một ham số là student, student sẽ có format {name: string, point: number}
// Sử dụng destructoring để lấy duy nhất tên của student
// Sử dụng template string để trả về chuỗi có dạng "Hi, my name is //studentName"
function displayStudent(student){
   
}

/// Question ///
// Cho một mảng các obj
// sử dụng vòng lặp for kết hợp với Destructoring để in ra chi tiết của từng obj
let arrObj_1 = [
    {name:"Ele1", age: 1},
    {name:"Ele2", age: 2},
    {name:"Ele3", age: 3},
]

