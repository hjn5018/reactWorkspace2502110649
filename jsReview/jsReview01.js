// 변수
// 변수선언 키워드: var(호이스팅 가능) / let(호이스팅 불가능(?)) / const(호이스팅 불가능(?))
// 기본 데이터 타입: Number, String, Boolean
// 변수에 대입할 수 있는 데이터: undefined, null, NaN, function

// 함수
// 함수 선언 방법
// 선언 함수(호이스팅 가능), 표현 함수(익명 함수, 화살표 함수)(호이스팅 불가능)
// -----------------------------함수--------------------------------

/*
// 1. 선언 함수
func1(); // 호이스팅 가능
function func1() {
    console.log("선언 함수");
}
func1();

// 2. 익명 함수
// func2(); // 호이스팅 불가능
let func2 = function() {
    console.log("익명 함수");
}
func2();

// 3. 화살표 함수
// func3() // 호이스팅 불가능
let func3 = () => {
    console.log("화살표 함수");
}
func3()
*/

// -----------------------------콜백 함수--------------------------------

/*
function main(args) {
    args(); // 콜백 함수: 함수를 인수로 넘겨서 호출하는 것
}

function sub() {
    console.log("콜백 동작!");
}

main(sub); // 콜백 동작!
*/

// ------------------------------변수-------------------------------

// console.log('-----호이스팅 시작------');
// console.log(a1); // 호이스팅 가능
// // console.log(a2); // 호이스팅 불가능
// // console.log(PI); // 호이스팅 불가능
// console.log('-----호이스팅 종료------');

// var a1 = 1; // 중복 선언 가능 (ex. var a1 = 2 가능!)
// let a2; // 중복 선언 불가 (ex. var a2 불가!)
// const PI = 3.14; // 상수

// a1 = "안녕"
// console.log(a1); // 안녕
// a1 = true;
// console.log(a1); // true

// console.log('-----------');

// console.log(a2); // undefined
// a2 = null;
// console.log(a2); // null
// a2 = "hi" * 10
// console.log(a2); // NaN
// a2 = '-' * 10
// console.log(a2) // NaN (Not a Number)

// console.log('-----------');

// let a3 = new Object(); // 객체 생성 (1)
// console.log(a3); // {}
// console.log(a3.name); // undefined
// a3.name = "졸라맨1"
// console.log(a3.name); // 졸라맨1

// console.log('-----------');

// // 객체: {} 배열: []
// let a4 = {}; // 객체 생성 (2) 
// console.log(a4); // {}
// console.log(a4.name); // undefined
// a4.name = "졸라맨2"
// console.log(a4.name); // 졸라맨2

// console.log('-----------');

// let a5 = {
//     name: "졸라맨3", // property
//     age: 10, // property
//     eat: function() { // method
//         console.log("a5가 eat합니다.")
//     }
// };
// console.log(a5); // { name: '졸라맨3' }
// console.log(a5.name); // 졸라맨3
// console.log(a5.age);
// a5.eat() // a5가 eat합니다.
// console.log(a5.eat()); // a5가 eat합니다. && undefined
// console.log('-----------');

// console.log(a5.location); // undefined
// a5.location = "서울";
// console.log(a5.location); // 서울
// console.log('-----------');

// a5["age"] = 20;
// console.log(a5.age) // 20
// a5["eat"](); // a5가 eat합니다.
// console.log('-----------');

// let keyname1 = "age";
// a5[keyname1] = 30
// console.log(a5.age); // 30
// console.log('-----------');
// // -----------------------------비교 연산--------------------------------
// // 비교: 값
// console.log("10" == 10) // true
// // 비교: 타입 & 값
// console.log("10" === 10) // false 

// a6 = a5;
// console.log(a5 === a6); // true
// console.log(a5 == a6); // true

// let a7 = {
//     name: "졸라맨3", // property
//     age: 10, // property
//     eat: function() { // method
//         console.log("a5가 eat합니다.")
//     }
// };
// let a8 = {
//     name: "졸라맨3", // property
//     age: 10, // property
//     eat: function() { // method
//         console.log("a5가 eat합니다.")
//     }
// };
// console.log(a7 === a8); // false
// console.log(a7 == a8); // false
// console.log(JSON.stringify(a7) === JSON.stringify(a8)) // true
// console.log(JSON.stringify(a7) == JSON.stringify(a8)) // true
// console.log(JSON.stringify(a7))// {"name":"졸라맨3","age":10}
// console.log(JSON.stringify(a8)) // {"name":"졸라맨3","age":10}