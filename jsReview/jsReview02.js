console.log("배열==========================================================");
console.log("=============================================================");
let a1 = new Array(); // 공간: 0칸
console.log(a1); // []

a1[0] = 10;
console.log(a1); // [ 10 ]

a1[1] = "Hi"
console.log(a1); //[ 10, "Hi" ]

a1[3] = new Object();
console.log(a1); // [ 10, 'Hi', <1 empty item>, {} ]

a1[4] = ()=>{};
console.log(a1); // [ 10, 'Hi', <1 empty item>, {}, [Function (anonymous)] ]

let a2 = [10, "Hi", undefined, null, ()=>{}];
console.log(a2); // [ 10, 'Hi', undefined, null, [Function (anonymous)] ]





console.log("구조 분해 할당=================================================");
console.log("=============================================================");
 // 구조 분해 할당 (배열, 객체(속성)를 분해한다.)(Destructing Assignment)
let array = [10 ,5, 20];
console.log(array); // [ 10 ,5, 20 ]

// let ary1 = array[0];
// console.log(ary1); // 10
// let ary2;
// let ary3;

// let ary1, ary2, ary3 = array;
// console.log(ary1); // undefined
// console.log(ary2); // undefined
// console.log(ary3); // [ 10 ,5, 20 ]

// let [ary1, ary2, ary3] = array;
// console.log(ary1); // 10
// console.log(ary2); // 5
// console.log(ary3); // 20

let [ary1, ary2, ary3, ary4] = array;
console.log(ary1); // 10
console.log(ary2); // 5
console.log(ary3); // 20
console.log(ary4); // undefined

let [ary5, ary6, ary7, ary8=80] = array;
console.log(ary5); // 10
console.log(ary6); // 5
console.log(ary7); // 20
console.log(ary8); // 80

let obj1 = {
    name: "졸라맨",
    age: 22
}
console.log(obj1) // { name: '졸라맨', age: 22 }

let p1 = obj1.name;
console.log(p1); // 졸라맨

let {p2, p3} = obj1;
console.log(p2); // undefined
console.log(p3); // undefined

let {name, age} = obj1;
console.log(name); // 졸라맨
console.log(age); // 22

let {name:name1, age:age1, hi:hi1} = obj1;
console.log(name1); // 졸라맨
console.log(age1); // 22
console.log(hi1); // undefined

let {name:name2, age:age2, hi:hi2="Hello!"} = obj1;
console.log(name2); // 졸라맨
console.log(age2); // 22
console.log(hi2); // Hello!
console.log("=============================================================");
console.log("=============================================================");


// function func1(args) {
//     console.log("값: ", args[1]);
// }
// func1(array); // 값:  5

// 인수로 구조 분해 할당(Destructing Assignment)을 사용한다.
function func1([a0, a1, a2, a3=111]) {
    console.log("a1: ", a1);
    console.log("a3: ", a3);
}
func1(array); // a1:  5, a3:  111

function func2({name, age}) {
    console.log("name: ", name);
}
func2(obj1); // name: 졸라맨

function func3({name}) {
    console.log("name: ", name);
}
func3(obj1); // name: 졸라맨

// ---------------------------템플릿 문자열(템플릿 리터럴)----------------------------------
function func4({name}) {
    console.log(`구조 분해 연습: ${name}, ${1 + 4}, ${name}`);
}
func4(obj1); // 구조 분해 연습: 졸라맨, 5, 졸라맨
