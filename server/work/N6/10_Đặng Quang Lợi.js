//// 1 

// Sử dụng Default Parameter sao cho giá trị biến q19_a là 8

let sumFunc = (a, b=2) => { return a * b };
let q19_a = sumFunc(4);
console.log(q19_a);




//// 2 

// Đoạn code nào sau đây là sai
const q3_c1 = [1, 2, 3];
q3_c1[1] = 4;





//// 3 

// Sử dụng Destructoring để lấy giá trị mảng của biến sau
let q7_a = {
    parent: {
        children: {
            value: [1, 2, 3, 4],
        },
    },
};
console.log(q7_a.parent.children.value)



//// 4 

// Sử dụng Destructoring để tách thuộc tính của biến sau
let q5_a = { name: "Luke", age: 26 };
console.log(q5_a.name ,q5_a.age); //Write here



//// 5 
//Cho một mảng các giá trị, sử dụng forEach để in ra từng giá trị
let q29_arr = [1, 2, "Test", 8, 2];
q29_arr.forEach(item => console.log(item))
