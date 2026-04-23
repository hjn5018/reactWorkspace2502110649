console.log("spread 연산자 (...arr)");
console.log()
console.log()
let array = [10, 65, 1];

let obj1 = {
    name: "장",
    age: 10,
}

let ar1 = [array, 10];
console.log(ar1) // [ [ 10, 65, 1 ], 10 ]
let ar2 = [...array, 10];
console.log(ar2) // [ 10, 65, 1, 10 ]

let array2 = array;
console.log(array2 === array) // true
console.log(array2 == array) // true

let array3 = [array];
console.log(array3 === array) // false
console.log(array3 == array) // false
console.log(array3) // [ [ 10, 65, 1 ] ]
console.log(array) // [ 10, 65, 1 ]
console.log("hi")
console.log(JSON.stringify(array3) === JSON.stringify(array)) // false
console.log(JSON.stringify(array3) == JSON.stringify(array)) // false


let array4 = [...array];
console.log(array4 === array) // false 
console.log(array4 == array) // false
console.log(array4) // [ 10, 65, 1 ]
console.log(array) // [ 10, 65, 1 ]
console.log(JSON.stringify(array4) === JSON.stringify(array)) // true
console.log(JSON.stringify(array4) == JSON.stringify(array)) // true

function test1(a, b, c) {
    console.log(a); // 10
    console.log(b); // 65
    console.log(c); // 1
}
test1(...array);

function test2([a, b, c]) {
    console.log(a); // 10
    console.log(b); // 65
    console.log(c); // 1
}
test2(array);

function test3(a, ...b) {
    console.log(a); // 10
    console.log(b); // [ 65, 1 ]
}
test3(...array);

console.log()
console.log()
console.log("truthy & falsy");
console.log()
console.log()
// false로 취급: false, 0, -0, null, undefined, NaN, "", ...
let trueVar = "hi";
console.log(true == trueVar)
console.log(true === trueVar)
if (trueVar) {
    console.log("참") // 출력 O
} else {
    console.log("거짓") // 출력 X
}

console.log()
console.log()
function printName(person) {
    if (!person) { // falsy test
        console.log("person 값이 없습니다.") 
    } else {
        console.log(person.name)
    }
}

let p1; // undefined
printName(p1); // person 값이 없습니다.

let p2 = {name: "엔터 샌드맨"};
printName(p2); // 엔터 샌드맨

console.log()
console.log()
// console.log(false == 0) // true
// console.log(false === 0) // false

// console.log(true == 1) // true
// console.log(true === 1) // false

console.log()
console.log()

/*
A && B // isLoggedIn && doSomething();
A가 truthy이면 → B를 반환
A가 falsy이면 → A를 반환

A || B // const name = input || "Guest";
A가 truthy → A 반환
A가 falsy → B 반환

A ?? B (Nullish Coalescing) // const count = value ?? 0; // null/undefined만 체크
A가 null 또는 undefined → B
그 외 → A

const name = person?.name; (.? Optional Chaining) // const name = user?.profile?.name;
person이 null/undefined → undefined
그 외 → person.name


불리언이 아니라 값 자체를 반환한다
*/
function printName2(person) {
    const name = person && person.name;
    console.log(name); 
    console.log(name || "person 값 없음");
}
printName2(); // undefined, person 값 없음
printName2({name: "잠자기 악마"}) // 잠자기 악마, 잠자기 악마

console.log()
console.log()

let array5 = [
    {name: "카리나", hobby: "영화"},
    {name: "아이유", hobby: "농구"},
    {name: "엔터샌드맨", hobby: "영화"},
]

let result = array5.filter((item) => {
    if (item.hobby === "영화") {
        return true;
    }
})
console.log(result) // [ { name: '카리나', hobby: '영화' }, { name: '엔터샌드맨', hobby: '영화' } ]