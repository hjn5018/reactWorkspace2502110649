let obj1 = {name:"홍길동", age:20}
console.log(obj1)
let obj2 = {...obj1}
console.log(obj2)
console.log()

console.log(obj1 == obj2) // false
console.log(obj1 === obj2) // false
console.log(JSON.stringify(obj1) == JSON.stringify(obj2)) // true
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)) // true