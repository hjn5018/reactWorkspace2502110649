# Frontend, Backend
## Front (client side)
- javascript
	- **event**를 통해 정적인(static) 웹 문서(html, css)에 변화를 준다.
## Backend (server side)
- **DB 연동**이 주요한 기능이다.
- http 프로토콜 통해 front에게 데이터를 제공한다.

---
# JavaScript
## 변수
- 키워드
	- var: 함수 레벨 스코프, 재선언 가능, 재할당 가능, 호이스팅 시 undefined로 초기화됨
	- let: 블록 레벨 스코프, 재선언 불가능, 재할당 가능, TDZ(Temporal Dead Zone) 영향 받음
	- const: 블록 레벨 스코프, 재선언 불가능, 재할당 불가능(상수), 선언 시 초기화 필수


### 특징 요약 테이블
| 특징 | var | let | const |
| :--- | :--- | :--- | :--- |
| **스코프** | 함수 레벨 | 블록 레벨 | 블록 레벨 |
| **재선언** | 가능 | 불가능 | 불가능 |
| **재할당** | 가능 | 가능 | 불가능 |
| **호이스팅** | 선언+초기화 | 선언만 (TDZ) | 선언만 (TDZ) |
| **초기화 필수**| X | X | O |

### 스코프 (Scope) 상세 설명
1. **함수 레벨 스코프 (Function Level Scope)**
   - 변수가 선언된 **함수 내부 전체**에서 유효합니다.
   - `if`, `for`, `while` 등 일반 블록의 중괄호는 무시합니다. (`var` 해당)
2. **블록 레벨 스코프 (Block Level Scope)**
   - 중괄호 `{ }`로 감싸진 **모든 블록 내부**에서만 유효합니다.
   - 변수 범위가 명확하여 `let`, `const` 사용을 권장하는 이유입니다.

## 데이터 타입 (Data Types)
자바스크립트의 데이터 타입은 원시 타입(Primitive Type)과 객체 타입(Object Type/Reference Type)으로 나뉩니다.

### 1. 원시 타입 (Primitive Type)
변경 불가능한 값(immutable value)이며, 변수에 할당할 때 실제 값이 저장됩니다.
- **Number**: 정수 및 실수 (예: `10`, `3.14`, `NaN`, `Infinity`)
- **String**: 문자열 (예: `'hello'`, `"world"`, \`template\`)
- **Boolean**: 논리값 (예: `true`, `false`)
- **Undefined**: 변수가 선언되었으나 값이 할당되지 않은 상태
- **Null**: 의도적으로 값이 없음을 명시할 때 사용하는 타입 (`typeof null`은 `'object'`를 반환하는 버그가 있음)
- **Symbol**: ES6에서 추가된, 유일하고 변경 불가능한 기본값 (주로 객체의 고유한 프로퍼티 키를 만들 때 사용)
- **BigInt**: Number의 최대 안전 정수(2^53 - 1)보다 큰 정수를 표현할 때 사용 (`n`을 붙임, 예: `10n`)

### 2. 참조 타입 / 객체 타입 (Reference Type / Object Type)
객체, 배열, 함수 등이 포함되며, 변수에 할당할 때 메모리 주소(참조값)가 저장됩니다.
- **Object**: 키(Key)와 값(Value)의 쌍으로 이루어진 데이터 컬렉션 (예: `{ name: 'Alice', age: 20 }`)
- **Array**: 순서가 있는 데이터의 집합 (예: `[1, 2, 3]`)
- **Function**: 자바스크립트에서는 함수도 객체로 취급되며(일급 객체), 변수에 할당하거나 매개변수로 전달 가능

### 데이터 타입 확인
`typeof` 연산자를 사용하여 변수의 데이터 타입을 확인할 수 있습니다.
```javascript
typeof 10;        // 'number'
typeof 'hello';   // 'string'
typeof true;      // 'boolean'
typeof undefined; // 'undefined'
typeof null;      // 'object' (주의: JavaScript 초기 설계 오류)
typeof {};        // 'object'
typeof [];        // 'object' (배열인지 확인하려면 Array.isArray() 사용 권장)
typeof function(){}; // 'function'
```

## 함수 (Functions)
자바스크립트에서 함수를 선언하고 사용하는 주요 방법은 크게 세 가지로 나눌 수 있습니다.

### 1. 선언 함수 (Function Declaration)
가장 기본적인 형태의 함수 선언 방식입니다. **호이스팅(Hoisting)**이 발생하여, 코드의 최상단으로 끌어올려진 것처럼 동작하므로 함수가 선언되기 전에도 호출할 수 있습니다.
```javascript
func1(); // 호이스팅으로 인해 정상 작동

function func1() {
    console.log("선언 함수");
}
```

### 2. 익명 함수 / 표현 함수 (Function Expression)
이름이 없는 함수를 변수에 할당하는 방식입니다. 변수 선언 방식(`let`, `const`, `var`)에 따라 호이스팅 여부가 결정되며, 할당되기 전에는 함수로서 호출할 수 없습니다.
```javascript
// func2(); // 에러 발생: 초기화 전 호출 불가능

let func2 = function() {
    console.log("익명 함수");
};

func2(); // 정상 작동
```

### 3. 화살표 함수 (Arrow Function)
ES6에서 도입된 간결한 형태의 함수 작성 방식입니다. 함수 표현식과 마찬가지로 **호이스팅 후 즉시 호출이 불가능**합니다. 구문이 짧으며, 자신만의 `this`를 바인딩하지 않는 특징이 있습니다.
```javascript
// func3(); // 초기화 전 호출 불가능

let func3 = () => {
    console.log("화살표 함수");
};

func3(); // 정상 작동
```

### 콜백 함수 (Callback Function)
함수의 매개변수(parameter)로 다른 함수를 전달받아, 함수 내부에서 실행하는 함수입니다. 자바스크립트의 비동기 처리나 이벤트 리스너 등에서 널리 사용됩니다.
```javascript
// main: 고차 함수 (함수를 인수로 받거나 함수를 반환하는 함수)
function main(args) {
    // 전달받은 함수(args)를 원하는 시점에 호출
    args(); 
}

// sub: 콜백 함수 (다른 함수의 인수로 전달되어 특정 시점에 실행되는 함수)
function sub() {
    console.log("콜백 동작!");
}

main(sub); // sub 함수를 인수로 전달
```

## 비교 연산자 (동등 연산자와 일치 연산자)
자바스크립트에서 두 값을 비교할 때 주로 `==`와 `===`를 사용합니다. 이 둘은 **타입 변환(Type Coercion)** 여부에 큰 차이가 있습니다.

### 1. 동등 연산자 `==` (Loose Equality)
비교하는 두 값의 타입이 다를 경우, 자바스크립트 엔진이 **암묵적으로 타입을 일치시킨 후 값을 비교**합니다. 즉, 겉보기 값만 같으면 `true`를 반환합니다.
```javascript
console.log("10" == 10); // true (문자열 "10"을 숫자 10으로 자동 변환하여 비교)
console.log(1 == true);  // true (true를 숫자 1로 변환하여 비교)
```
- 의도치 않은 타입 변환으로 예상치 못한 결과(버그)가 발생할 수 있어 사용을 **권장하지 않습니다.**

### 2. 일치 연산자 `===` (Strict Equality)
비교하는 두 값의 **데이터 타입과 값이 모두 일치해야만** `true`를 반환합니다. 암묵적 타입 변환이 발생하지 않습니다.
```javascript
console.log("10" === 10); // false (String과 Number로 타입이 다르므로 false)
console.log(1 === true);  // false (Number와 Boolean으로 타입이 다르므로 false)
console.log(10 === 10);   // true (타입과 값이 모두 같음)
```
- 정확하고 안전한 비교를 위해 실무에서는 항상 `===` (및 `!==`) 사용을 권장합니다.

## 구조 분해 할당 (Destructuring Assignment)
배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 자바스크립트 표현식입니다. 코드를 더 간결하고 읽기 쉽게 만들어줍니다.

### 1. 배열 구조 분해 할당
배열의 요소 순서(인덱스)대로 변수에 값이 할당됩니다.
```javascript
let array = [10, 5, 20];

// 구조 분해 할당 방식
let [ary1, ary2, ary3] = array;
console.log(ary1); // 10
console.log(ary2); // 5
console.log(ary3); // 20

// 변수보다 배열의 요소가 적을 경우 기본값 설정 가능
let [a, b, c, d = 80] = array;
console.log(d); // 80 (array[3]이 undefined이므로 기본값 80 사용)
```

### 2. 객체 구조 분해 할당
객체의 **속성 이름(Key)**을 기준으로 매칭되어 값이 할당됩니다. 배열과 달리 순서는 중요하지 않습니다.
```javascript
let obj1 = { name: "졸라맨", age: 22 };

// 1) 속성 이름과 동일한 변수명 사용
let { name, age } = obj1;
console.log(name); // "졸라맨"

// 2) 새로운 변수 이름으로 할당 (key:새변수명)
let { name: name1, age: age1 } = obj1;
console.log(name1); // "졸라맨"

// 3) 기본값 설정
let { name: name2, hi = "Hello!" } = obj1;
console.log(hi); // "Hello!" (obj1에 hi 속성이 없으므로 기본값 사용)
```

### 3. 함수 매개변수(인자)에서의 활용
함수에 객체나 배열을 넘길 때, 필요한 값만 즉시 추출하여 사용할 수 있어 유용합니다.
```javascript
// 객체 구조 분해
function func2({ name, age }) {
    console.log(`이름: ${name}, 나이: ${age}`);
}
func2(obj1); // 이름: 졸라맨, 나이: 22

// 배열 구조 분해 + 기본값
function func1([a0, a1, a2, a3 = 111]) {
    console.log(a1); // 5
    console.log(a3); // 111
}
func1([10, 5, 20]);
```

## 단축 평가 (Short-circuit Evaluation)
논리 연산자(`&&`, `||`)를 사용할 때, 첫 번째 피연산자의 평가 결과에 따라 두 번째 피연산자의 평가를 생략하고 바로 값을 반환하는 방식입니다. 자바스크립트에서는 불리언이 아닌 **값 자체를 반환**하는 특징을 이용해 조건문 대신 사용하기도 합니다.

### 1. Truthy & Falsy
자바스크립트에서 다음 값들은 불리언 문맥에서 `false`로 취급됩니다 (**Falsy**). 그 외의 모든 값은 `true`로 취급됩니다 (**Truthy**).
- `false`, `0`, `-0`, `null`, `undefined`, `NaN`, `""` (빈 문자열)

### 2. 논리곱 연산자 `&&` (AND)
- `A && B`: **A가 Truthy**이면 B를 반환하고, **A가 Falsy**이면 바로 A를 반환합니다.
```javascript
"hi" && "hello"; // "hello" (앞이 참이므로 뒤의 값 반환)
null && "hello"; // null (앞이 거짓이므로 바로 앞의 값 반환)
```
- **주요 활용**: 조건부 렌더링이나 객체의 속성 접근 전 유효성 검사 등에 사용됩니다.

### 3. 논리합 연산자 `||` (OR)
- `A || B`: **A가 Truthy**이면 바로 A를 반환하고, **A가 Falsy**이면 B를 반환합니다.
```javascript
"hi" || "hello"; // "hi" (앞이 참이므로 바로 앞의 값 반환)
null || "hello"; // "hello" (앞이 거짓이므로 뒤의 값 반환)
```
- **주요 활용**: 변수에 기본값(Default Value)을 설정할 때 유용합니다.

### 4. null 병합 연산자 `??` (Nullish Coalescing)
- `||` 연산자는 `0`이나 `""`도 Falsy로 취급하지만, `??`는 오직 **`null` 또는 `undefined`**인 경우에만 뒤의 값을 반환합니다.
```javascript
let count = 0;
console.log(count || 10); // 10 (0을 Falsy로 취급)
console.log(count ?? 10); // 0 (null/undefined가 아니므로 0 반환)
```

### 5. 옵셔널 체이닝 `?.` (Optional Chaining)
- 체인의 각 참조가 유효한지 명시적으로 검증하지 않고, 연결된 객체의 속성을 읽을 수 있습니다. 참조가 `null` 또는 `undefined`라면 에러 대신 `undefined`를 반환합니다.
```javascript
let user = null;
console.log(user?.name); // undefined (에러 없이 안전하게 접근)
```

### 6. 실전 활용 예시

#### (1) 객체의 속성에 안전하게 접근하기 (`&&` 활용)
특정 객체가 존재하는지 먼저 확인한 후 그 속성에 접근하여 에러(Runtime Error)를 방지할 때 사용합니다.
```javascript
function getName(person) {
    // person이 존재하면 person.name을 반환, 없으면 바로 undefined(falsy) 반환
    const name = person && person.name;
    // name이 undefined이면 뒤의 문자열 반환
    return name || "객체가 존재하지 않음";
}

console.log(getName()); // "객체가 존재하지 않음"
console.log(getName({ name: "졸라맨" })); // "졸라맨"
```

#### (2) 기본값 설정하기 (`||` 활용)
사용자가 값을 입력하지 않았거나 데이터가 없을 때 사용할 기본값을 지정할 때 매우 유용합니다.
```javascript
function setMessage(message) {
    // message가 빈 문자열("")이거나 null인 경우 "기본 메시지" 사용
    const text = message || "기본 메시지입니다.";
    console.log(text);
}

setMessage(""); // "기본 메시지입니다."
setMessage("안녕하세요!"); // "안녕하세요!"
```

#### (3) 조건부 함수 실행 (`&&` 활용)
특정 조건이 충족될 때만 특정 동작(함수 실행 등)을 수행하고 싶을 때 `if`문 대신 간결하게 사용할 수 있습니다.
```javascript
let isLogged = true;

// 로그인이 되어 있을 때만 환영 메시지 출력
isLogged && console.log("환영합니다!"); // "환영합니다!" 출력
```

## ES 모듈 시스템 (Export & Import)
코드를 여러 파일(모듈)로 분리하여 관리하고, 필요한 함수나 변수를 외부로 내보내거나 가져오는 기능입니다.

### 1. Named Export (이름 내보내기)
- 파일 내에서 여러 개를 내보낼 수 있습니다.
- 가져올 때는 반드시 **내보낸 이름과 동일한 이름**을 중괄호(`{ }`) 안에 명시해야 합니다.

```javascript
// math.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }

// index.js
import { add, subtract } from "./math.js";
```

### 2. Default Export (기본 내보내기)
- 한 파일 내에서 **단 하나만** 가능합니다.
- 가져올 때 중괄호 없이 사용하며, 가져오는 쪽에서 **이름을 자유롭게 정할 수 있습니다.**

```javascript
// math.js
export default function multiply(a, b) { return a * b; }

// index.js
import mul from "./math.js"; // multiply를 mul이라는 이름으로 가져옴
```

### 3. 혼합 사용
- 하나의 파일에서 Named와 Default를 동시에 가져올 수도 있습니다.

```javascript
// index.js
import mul, { add, subtract } from "./math.js";
```

### 4. 외부 패키지 임포트
- `npm` 등으로 설치한 라이브러리는 상대 경로(`./`) 대신 패키지 이름을 바로 적어서 가져옵니다.
```javascript
import randomColor from "randomcolor";
console.log(randomColor());
```

### 5. `as` 키워드를 이용한 별칭(Alias)
가져오거나 내보낼 때 이름을 변경하고 싶을 때 사용합니다. 주로 이름이 너무 길거나, 현재 파일의 다른 변수와 이름이 충돌할 때 유용합니다.

```javascript
// 1) 가져올 때 이름 변경 (import as)
import { add as plus } from "./math.js";
console.log(plus(1, 2)); // add 대신 plus라는 이름으로 사용

// 2) 내보낼 때 이름 변경 (export as)
function originalName() { ... }
export { originalName as newName };
```

### 6. `import * as` (전체 가져오기)
모든 Named Export들을 하나의 객체 형태로 묶어서 가져오는 방식입니다. '네임스페이스 임포트'라고도 합니다.

```javascript
// math.js의 모든 export를 MathUtil이라는 객체로 묶어서 가져옴
import * as MathUtil from "./math.js";

console.log(MathUtil.add(5, 3));
console.log(MathUtil.subtract(10, 4));
```

### 7. Re-export (다시 내보내기)
다른 모듈에서 가져온 기능을 현재 모듈에서 바로 다시 내보낼 수 있습니다. 주로 여러 모듈을 하나의 파일(`index.js` 등)에서 모아 관리할 때 사용합니다.

```javascript
// utilities.js
export { add, subtract } from "./math.js";
export { default as logger } from "./logger.js";
```

---

# React 기초

## 1. JSX (JavaScript XML)
JSX는 자바스크립트의 확장 문법으로, JavaScript 파일 내에서 HTML과 유사한 마크업을 작성할 수 있게 해줍니다. 리액트 컴포넌트의 UI를 구조화하는 데 사용됩니다.

### JSX의 주요 규칙
1. **단일 루트 요소 (Single Root Element)**:
   - 컴포넌트는 반드시 하나의 부모 요소로 감싸져 있어야 합니다.
   - 의미 없는 `<div>`를 피하기 위해 **Fragment**(`<> ... </>`)를 자주 사용합니다.
2. **중괄호(`{ }`) 사용**:
   - JSX 내부에서 자바스크립트 변수나 식(Expression)을 사용할 때는 `{ }`로 감쌉니다.
3. **camelCase 속성명**:
   - HTML 속성명은 자바스크립트 예약어와 충돌을 피하기 위해 camelCase를 사용합니다.
   - 예: `class` → `className`, `onclick` → `onClick`, `tabindex` → `tabIndex`.
4. **모든 태그는 닫아야 함**:
   - `<img>`, `<br>`, `<input>`과 같은 태그도 반드시 `<img />`처럼 닫아주어야 합니다.

---

## 2. JSX에서 CSS 사용하기
리액트에서 스타일을 적용하는 방법은 크게 두 가지가 있습니다.

### (1) 인라인 스타일 (Inline Style)
- 스타일을 자바스크립트 **객체** 형태로 작성합니다.
- CSS 속성명은 **camelCase**를 사용합니다. (예: `background-color` → `backgroundColor`)
- `style={{ ... }}` 처럼 바깥쪽 중괄호는 JS 사용을 의미하고, 안쪽 중괄호는 객체를 의미합니다.

#### 💡 Tip: 단축 속성명 (Shorthand Property Names)
객체의 키(key)와 값(value)으로 사용되는 변수의 이름이 같다면, 하나로 줄여서 쓸 수 있습니다.
- `style={{ color: color }}` (기본)
- `style={{ color }}` (단축)

```javascript
function MyComponent() {
  const styleObj = {
    backgroundColor: "yellow",
    color: "red",
    fontSize: "20px"
  };

  return (
    <>
      <h1 style={styleObj}>인라인 스타일 예시 1</h1>
      <div style={{ backgroundColor: "blue", color: "white" }}>
        인라인 스타일 예시 2 (직접 삽입)
      </div>
    </>
  );
}
```

### (2) 외부 CSS 파일 임포트
- 일반적인 `.css` 파일을 만들고 컴포넌트 상단에서 `import` 합니다.
- HTML의 `class` 속성 대신 **`className`**을 사용합니다.

```javascript
// Header.css
/* .header-title { color: green; } */

// Header.jsx
import "./Header.css";

function Header() {
  return <h1 className="header-title">외부 CSS 적용</h1>;
}
```

---

## 3. JSX `{ }` 안에서의 데이터 타입별 동작
JSX에서 중괄호(`{ }`)를 사용하면 자바스크립트 값을 표현할 수 있지만, 데이터 타입에 따라 화면에 나타나는 방식이 다릅니다.

### (1) 화면에 그대로 렌더링되는 타입
- **문자열(String), 숫자(Number)**: 변수에 담긴 값이나 연산 결과가 그대로 화면에 출력됩니다.
- **배열(Array)**: 배열의 요소들이 순차적으로 나열되어 렌더링됩니다.

### (2) 화면에 렌더링되지 않는 타입 (무시됨)
- **불리언(Boolean)**: `true`, `false` 값은 화면에 나타나지 않습니다.
- **null, undefined**: 값이 비어있음을 의미하므로 아무것도 출력되지 않습니다.
- **활용**: 이를 이용하여 `{ isLoggedIn && <button>로그아웃</button> }` 처럼 조건부 렌더링을 수행합니다.
- **출력 방법**: 만약 이 값을 화면에 꼭 나타내고 싶다면 `String(true)` 또는 `var.toString()` 등을 사용하여 문자열로 변환해야 합니다.

### (3) 렌더링 시 에러가 발생하는 타입
- **객체(Object)**: `{ name: "jinjin" }`과 같은 **일반 객체 자체를 `{ }`에 넣어 렌더링하려고 하면 에러가 발생**합니다. ("Objects are not valid as a React child")
- **해결 방법**: 
  - 객체의 특정 프로퍼티에 접근합니다: `{ user.name }`
  - 전체 내용을 확인하고 싶다면 문자열로 변환합니다: `{ JSON.stringify(user) }`

```javascript
let Main = () => {
  let num = 10;
  let str = "안녕";
  let bool = true;
  let obj = { name: "jinjin", age: 30 };

  return (
    <>
      <p>숫자/문자: {num}, {str}</p>      {/* 10, 안녕 출력 */}
      <p>불리언: {String(bool)}</p>       {/* 그냥 {bool}은 아무것도 안 나옴 */}
      <p>undefined: {String(undefined)}</p>
      
      {/* <p>{obj}</p> */}               {/* ❌ 에러 발생! */}
      <p>객체 프로퍼티: {obj.name}</p>    {/* ✅ 정상 출력 */}
    </>
  );
}
```

---

## 4. Props (Properties)
Props는 부모 컴포넌트가 자식 컴포넌트에게 전달하는 데이터입니다. 컴포넌트의 재사용성을 높여주는 핵심 기능입니다.

### (1) Props 전달과 수신
- **부모**: HTML 속성처럼 데이터를 전달합니다. 문자열 외의 값(숫자, 객체, 변수 등)은 `{ }`로 감싸야 합니다.
- **자식**: 함수의 첫 번째 인자(`props`)로 객체 형태의 데이터를 전달받습니다.

```javascript
// 부모 (App.jsx)
<Button text="메일" color="red" />

// 자식 (Button.jsx) - 기본 방식
function Button(props) {
  return <button style={{ color: props.color }}>{props.text}</button>;
}
```

### (2) 구조 분해 할당으로 받기 (권장)
- 매번 `props.`을 붙이는 대신, 인자 부분에서 바로 변수로 꺼내어 사용하는 것이 가독성이 좋습니다.

```javascript
function Button({ text, color }) {
  return <button style={{ color }}>{text}</button>;
}
```

### (3) Default Props (기본값 설정)
- 부모가 데이터를 주지 않았을 때 사용할 기본값을 설정할 수 있습니다.

```javascript
function Button({ text, color = "black" }) { // 기본값 설정
  return <button style={{ color }}>{text}</button>;
}
```

### (4) Special Prop: `children`
- 컴포넌트 태그 사이에 넣은 내용(텍스트, 다른 컴포넌트 등)은 자식 컴포넌트의 `children`이라는 이름의 prop으로 전달됩니다.

```javascript
// 부모 (App.jsx)
<Button>
  <Header /> {/* Header 컴포넌트가 children으로 전달됨 */}
</Button>

// 자식 (Button.jsx)
function Button({ children }) {
  return <div className="btn-container">{children}</div>;
}
```

### (5) Spread 연산자로 Props 전달
- 객체에 담긴 여러 값을 한꺼번에 전달할 때 유용합니다.

```javascript
const btnProps = { text: "전송", color: "blue", size: "large" };
<Button {...btnProps} />
```

---

## 5. 이벤트 핸들링 (Event Handling)

리액트에서 사용자의 클릭, 입력 등의 이벤트를 처리하는 방식은 일반 HTML과 세 가지 큰 차이점이 있습니다.

### (1) 표기법: 카멜 케이스 (camelCase)
- HTML에서는 `onclick`, `onchange`와 같이 소문자를 사용하지만, 리액트에서는 **`onClick`**, **`onChange`**와 같이 카멜 케이스로 작성합니다.

### (2) 함수 전달 방식
- HTML은 이벤트 핸들러를 **문자열**로 전달하지만, 리액트는 **함수 그 자체(참조값)**를 전달합니다.
- **잘못된 예**: `onClick="handleClick()"` (실행 결과가 전달됨)
- **올바른 예**: `onClick={handleClick}` (함수 자체가 전달되어 클릭 시 실행됨)

### (3) 합성 이벤트 (Synthetic Event)
- 리액트는 모든 브라우저에서 동일하게 동작하도록 브라우저의 기본 이벤트를 **`SyntheticEvent`**라는 객체로 감싸서 전달합니다.
- 따라서 어떤 브라우저(Chrome, Safari 등)에서든 동일한 인터페이스로 이벤트 객체를 다룰 수 있습니다.
- 예시: `const onChange = (e) => { console.log(e.target.value); };`

---

## 6. React Hooks

Hooks는 **React 16.8 버전**부터 도입된 기능으로, 클래스형 컴포넌트에서만 사용할 수 있었던 상태(State) 관리와 생명주기(Lifecycle) 기능을 **함수형 컴포넌트에서도 사용할 수 있게** 해줍니다.

### (1) Hooks의 등장 배경
- **과거 (Class 컴포넌트)**: State, Ref 등 리액트의 모든 기능을 사용할 수 있었지만 코드가 복잡해지는 단점이 있었습니다.
- **과거 (Function 컴포넌트)**: **UI 렌더링** 기능만 수행할 수 있었습니다. 
  - *UI 렌더링이란?*: 데이터를 화면에 출력만 할 뿐, 스스로 데이터를 기억(상태 관리)하거나 시간에 따른 변화(생명주기)를 처리할 수 없는 단순한 상태를 의미합니다.
- **현재 (Hooks 도입)**: 함수형 컴포넌트에서도 `use`로 시작하는 Hook들을 사용하여 상태 관리 및 다양한 기능을 간결하게 구현할 수 있게 되었습니다.

### (2) 왜 'Hook'이라고 부를까요?
**'갈고리'**라는 뜻의 Hook은, 평범한 함수형 컴포넌트가 리액트의 내부 기능(상태 관리, 생명주기 등)에 **갈고리를 걸어서(Hook into)** 필요한 기능을 가져와 사용할 수 있게 해주기 때문에 붙여진 이름입니다. 
마치 가전제품을 전용 콘센트에 꽂아서 전기를 끌어오는 것과 비슷한 원리라고 이해하면 쉽습니다.

### (3) `useState` (상태 관리)


컴포넌트 내에서 동적으로 변하는 데이터를 관리할 때 사용합니다. 값이 변경되면 리액트가 이를 감지하고 **컴포넌트를 자동으로 다시 렌더링(Re-render)**합니다.

- **문법**: `const [상태값, 상태변경함수] = useState(초기값);`
- **구조 분해 할당**: `useState`는 [값, 함수] 형태의 배열을 반환합니다.

```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      {/* 1) 미리 정의된 함수 사용 (함수 이름만 전달) */}
      <button onClick={onIncrease}>증가</button>
      
      {/* 2) 익명 함수(화살표 함수) 직접 사용 */}
      <button onClick={() => setCount(count - 1)}>감소</button>

      {/* 3) 인자가 필요한 함수를 호출하는 경우 (중요: 반드시 익명 함수로 감싸야 함) */}
      {/* 바로 onClick={handleSomething(5)} 라고 쓰면 렌더링 시점에 함수가 즉시 실행되어 버림 */}
      <button onClick={() => handleSomething(5)}>인자 전달 예시</button>
    </>
  );
}
```

#### ⚠️ 주의: 이벤트 핸들러에 함수 전달 시 괄호 `( )` 유무
- **`onClick={onIncrease}` (O)**: 함수의 **이름(참조)**만 전달합니다. 사용자가 실제로 클릭했을 때 리액트가 해당 함수를 실행해 줍니다.
- **`onClick={onIncrease()}` (X)**: 함수를 **즉시 실행**하고 그 결과값을 `onClick`에 할당합니다.
  - **문제점 1**: 렌더링 과정에서 함수가 바로 실행됩니다.
  - **문제점 2 (치명적)**: 함수 내부에 상태 변경(`setCount` 등)이 있다면 **렌더링 -> 상태 변경 -> 리렌더링 -> 상태 변경...**의 과정을 거쳐 **무한 루프(Infinite Loop)**에 빠지게 됩니다.

#### 💡 해결책: 익명 함수(화살표 함수) 사용
인자를 넘겨야 하거나 실행 시점을 제어해야 할 때는 반드시 **새로운 함수로 감싸서** 전달합니다.
- **`onClick={() => handleSomething(5)}`**
  - "지금 실행하지 말고, 클릭 이벤트가 발생하면 `handleSomething(5)`를 실행하는 함수를 호출해줘"라는 의미가 됩니다.

### (2) 왜 일반 변수 대신 `useState`를 쓰나요?
일반적인 자바스크립트 변수(`let`, `var`)는 값이 바뀌어도 리액트가 이를 알지 못해 화면을 새로 고치지 않습니다. `useState`의 **상태 변경 함수**를 호출해야만 리액트가 "데이터가 바뀌었으니 화면을 다시 그려야겠다!"라고 판단하여 UI를 업데이트(리렌더링)합니다.

### (3) Hooks의 사용 규칙
1. **최상위 레벨(Top Level)에서만 호출**:
   - **의미**: 컴포넌트 함수 바디 내부의 가장 바깥쪽 영역을 말합니다.
   - **금지 사항**: `if`문, `for`문, 중첩된 `function` 내부에서 호출하면 안 됩니다.
   - **이유**: 리액트는 훅이 호출되는 **순서**에 의존하여 상태를 식별합니다. 조건문 등에 넣으면 실행 순서가 꼬여 에러가 발생할 수 있습니다.
2. **리액트 함수 내에서만 호출**: 일반 함수가 아닌 함수 컴포넌트나 커스텀 훅 내에서 사용해야 합니다.

### (4) 💡 중요: 상태의 불변성 (Immutability)
리액트 상태는 **직접 수정해서는 안 되며**, 항상 새로운 값을 만들어 전달해야 합니다.

#### ❓ 왜 스프레드 연산자(`...`)를 사용하여 복사해야 하나요?
리액트는 상태가 변경되었는지 확인할 때 **참조값(메모리 주소)**을 비교합니다. (얕은 비교)
- 만약 `user.name = "new"` 처럼 내부 값만 수정하면, 객체의 주소값은 그대로이기 때문에 리액트는 **변화가 없다고 판단하여 화면을 다시 그리지 않습니다.**
- 따라서 `...`를 통해 **기존 내용을 복사한 새로운 객체/배열**을 만들어 전달해야 리액트가 변화를 감지하고 리렌더링을 수행합니다.

#### 1) 원시 타입 (Number, String 등)
- `setCount(count + 1)` 처럼 새로운 연산 결과값을 전달합니다.

#### 2) 객체(Object) 상태 관리
```javascript
const [user, setUser] = useState({ name: "jinjin", age: 30 });

const updateName = () => {
  setUser({
    ...user,       // 1. 기존 user의 모든 속성을 새로운 객체에 복사 (새 참조값 생성)
    name: "hong"   // 2. 변경할 속성만 덮어쓰기
  });
};
```

#### 3) 배열(Array) 상태 관리
```javascript
const [items, setItems] = useState([1, 2, 3]);

const addItem = () => {
  setItems([...items, 4]); // 1. 기존 요소를 복사 + 2. 새 요소 추가 -> 새로운 배열 주소 생성
};
```

---

## 6. React 이벤트 핸들링 (입력값 처리)
사용자의 입력을 받고 상태(State)에 반영하는 과정에서 사용되는 핵심 개념입니다.

### (1) `onChange` 이벤트
- 입력 요소(`<input>`, `<select>` 등)의 값이 바뀔 때마다 발생하는 이벤트입니다.
- 리액트에서는 사용자가 한 글자를 입력할 때마다 `onChange`에 연결된 함수가 실행됩니다.

### (2) 이벤트 객체 (`e`)
- 이벤트가 발생하면 리액트는 해당 이벤트에 대한 정보를 담은 **이벤트 객체**를 핸들러 함수의 첫 번째 인자로 전달합니다.
- 관습적으로 `e` 또는 `event`라는 이름을 사용합니다.

### (3) `e.target`과 `e.target.value`
- **`e.target`**: 이벤트가 발생한 **대상 요소(DOM)**를 가리킵니다. (예: 입력 중인 그 `<input>` 태그)
- **`e.target.value`**: 해당 요소에 현재 입력되어 있는 **값**을 가져옵니다.
- **`e.target.name`**: 해당 요소에 설정된 `name` 속성값을 가져옵니다. (여러 입력창을 구분할 때 사용)

```javascript
function Register() {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    // e.target.value를 통해 입력된 값을 가져와서 상태를 업데이트함
    setName(e.target.value);
  };

  return (
    <input 
      type="text" 
      value={name} 
      onChange={handleNameChange} 
    />
  );
}
```

### (4) 주요 이벤트 비교
| 이벤트명 | 발생 시점 | 주요 사용 대상 |
| :--- | :--- | :--- |
| **`onClick`** | 요소를 클릭했을 때 | `<button>`, `<a>`, `<div>` 등 |
| **`onChange`** | 입력값이 변경되었을 때 | `<input>`, `<select>`, `<textarea>` |
| **`onKeyDown`** | 키보드 키를 눌렀을 때 | `<input>` (엔터키 처리 등) |
| **`onMouseEnter`** | 마우스가 요소 위에 올라왔을 때 | 이미지, 리스트 아이템 등 |

### (5) 리액트 `onChange`의 특수성
- **브라우저 기본 동작**: 원래 HTML의 `change` 이벤트는 입력 후 포커스를 잃어야 발생합니다.
- **리액트의 동작**: 리액트는 사용자가 **타이핑을 할 때마다(글자 단위로)** 즉시 `onChange`를 발생시킵니다. (기본 `input` 이벤트와 유사하게 동작하도록 추상화됨)
- **이유**: 컴포넌트의 **State와 UI를 항상 실시간으로 동기화**하기 위해서입니다.

---

## 7. 여러 개의 상태(State) 통합 관리하기
입력 항목이 많아질 경우, 각각 `useState`를 만드는 대신 하나의 **객체**로 관리하는 것이 효율적입니다.

### (1) `e.target.name` (꼬리표 확인)
- HTML 태그에 설정한 `name` 속성값을 읽어옵니다.
- 예: `<input name="person" />`에서 이벤트 발생 시 `e.target.name`은 `"person"`이 됩니다.
- 어떤 입력 요소에서 이벤트가 발생했는지 식별하는 **꼬리표** 역할을 합니다.

### (2) `[e.target.name]` (계산된 프로퍼티 이름)
- 자바스크립트의 변수나 식의 결과값을 객체의 **키(Key)**로 동적으로 할당할 때 사용하는 문법입니다.
- **일반 문법**: `{ name: "값" }` -> 키 이름이 무조건 `name`으로 고정됨.
- **대괄호 문법**: `const key = "person"; { [key]: "값" }` -> 변수 `key`의 값인 `person`이 키 이름이 됨.
- 이를 활용해 `[e.target.name]: e.target.value`라고 쓰면, **이벤트가 발생한 요소의 name 값에 해당하는 State 필드**를 실시간으로 업데이트할 수 있습니다.

### (3) 스프레드 연산자(`...`) 필수 사용
- 객체 State를 업데이트할 때는 **기존 객체를 복사(`...state`)**한 뒤, 변경된 부분만 덮어써야 합니다. (불변성 유지)

### (4) 구현 예시
```javascript
const [input, setInput] = useState({
  person: "",
  country: ""
});

const onChange = (e) => {
  setInput({
    ...input, // 1. 기존의 모든 필드(person, country) 복사
    [e.target.name]: e.target.value // 2. 이벤트가 발생한 name("person" 또는 "country") 필드만 업데이트
  });
};
```
- 이렇게 구성하면 입력창이 늘어나도 핸들러 함수는 단 하나면 충분하여 코드의 확장성이 매우 좋아집니다.

### (5) 함수형 업데이트 (Functional Update) - 더 안전한 방식
여러 개의 상태 업데이트가 매우 짧은 시간 안에 연달아 일어날 경우, 리액트의 비동기 업데이트 특성 때문에 **이전 상태가 아직 반영되지 않은 채 다음 업데이트가 진행**되는 문제가 생길 수 있습니다. 이를 방지하기 위해 `set` 함수에 값이 아닌 **함수**를 전달합니다.

```javascript
const onChange = (e) => {
  // prev: 리액트가 보장하는 가장 최신 상태값
  setInput((prev) => ({
    ...prev,
    [e.target.name]: e.target.value
  }));
};
```
- **장점**: 항상 **가장 최신 상태**를 기반으로 업데이트가 이루어지므로, 데이터가 꼬이거나 누락되는 현상을 완벽하게 방지할 수 있습니다. 
- **권장 사항**: 객체나 배열처럼 복잡한 상태를 업데이트하거나, 상태 업데이트가 빈번하게 일어나는 경우 이 방식을 사용하는 것이 훨씬 안전합니다.

---

## 4. 패키지(Package)와 모듈(Module)

React와 같은 현대적인 자바스크립트 개발에서 코드를 효율적으로 관리하기 위한 핵심 개념입니다.

### (1) 모듈 (Module)
- **정의**: 관련된 코드(함수, 변수, 클래스 등)를 저장하고 있는 **하나의 자바스크립트 파일**입니다.
- **특징**:
  - 파일 단위로 스코프가 분리되어 변수 이름 충돌을 방지합니다.
  - `export` 키워드를 사용해 외부로 내보내고, `import` 키워드를 사용해 필요한 곳에서 불러와 사용합니다.
  - 코드를 기능별로 쪼개어 관리하므로 유지보수가 쉽고 재사용성이 높습니다.

### (2) 패키지 (Package)
- **정의**: 하나 이상의 **모듈을 모아놓은 꾸러미**입니다. 다른 사람들이 만들어 놓은 기능을 내 프로젝트에서 쉽게 사용할 수 있도록 배포된 형태입니다.
- **특징**:
  - **npm(node package manager)**이나 **yarn** 같은 패키지 매니저를 통해 설치하고 관리합니다.
  - 프로젝트 루트에 있는 **`package.json`** 파일에 설치된 패키지 정보(버전 등)가 기록됩니다.
  - 예시: `react`, `react-dom`, `axios`, `styled-components` 등이 모두 패키지입니다.

### (3) 관계 요약
- **파일(File) = 모듈(Module)**
- **모듈들의 집합 + 설정 정보 = 패키지(Package)**
- React 프로젝트는 수많은 패키지를 불러와서, 이를 모듈 단위로 구성하여 개발하는 방식입니다.

### (4) CommonJS vs ES Module
자바스크립트 모듈 시스템은 크게 두 가지로 나뉩니다.

| 구분 | CommonJS (CJS) | ES Module (ESM) |
| :--- | :--- | :--- |
| **키워드** | `require()`, `module.exports` | `import`, `export` |
| **사용 환경** | 주로 Node.js 기본 방식 | 브라우저 및 현대적 JS 표준 (React 등) |
| **로딩 방식** | 동기적 (파일을 다 읽을 때까지 대기) | 비동기적 (병렬 로딩 가능, 더 효율적) |
| **특징** | 실행 시점에 모듈을 불러옴 | 빌드 시점에 모듈 관계를 파악 (트리 쉐이킹 유리) |

- **React에서의 사용**: React는 최신 자바스크립트 표준인 **ES Module** 방식을 사용합니다. 따라서 우리는 항상 `import React from 'react'`와 같은 문법을 사용하게 됩니다.

---

## 5. React의 주요 특징

React가 현대 웹 개발에서 가장 널리 쓰이는 이유는 다음과 같은 강력한 특징들 때문입니다.

### (1) 컴포넌트(Component) 기반의 UI 작성
- **정의**: UI를 구성하는 개별적인 단위(레고 블록)를 **컴포넌트**라고 합니다.
- **컴포넌트 트리 (Component Tree)**: 
  - 리액트 앱은 여러 개의 컴포넌트들이 부모-자식 관계를 맺으며 **계층 구조(트리 구조)**를 이룹니다.
  - 최상단에는 보통 `App` 컴포넌트(Root)가 위치하며, 그 아래로 필요한 기능들이 트리 형태로 뻗어나갑니다.
- **장점**: 
  - 복잡한 화면을 독립적이고 재사용 가능한 단위로 쪼개서 개발할 수 있습니다.
  - **데이터의 흐름(Props)**이 부모에서 자식으로 흐르는 구조를 파악하기 매우 명확해집니다.
  - 코드의 가독성이 좋아지고 유지보수가 매우 편리해집니다.


### (2) 화면 업데이트 구현의 단순함 (State 기반)
- **방식**: 개발자가 일일이 "이 버튼을 누르면 이 글자를 바꿔라"라고 명령(명령형)하는 대신, **State(상태)**를 정의하고 그 상태에 따라 화면이 어떻게 보일지 미리 선언(선언형)합니다.
- **장점**: 
  - 복잡한 조건문이나 분기 처리를 State 값 하나로 제어할 수 있어 로직이 단순해집니다.
  - 데이터의 흐름을 파악하기 쉽습니다.

### (3) Virtual DOM을 통한 빠른 화면 업데이트
- **원리**: 실제 브라우저의 DOM을 직접 건드리는 대신, 메모리상에 가상의 DOM(**Virtual DOM**)을 먼저 만듭니다. 데이터가 변경되면 새로운 가상 DOM을 만들어 이전 것과 비교(Diffing)한 뒤, **바뀐 부분만** 실제 DOM에 반영합니다.
- **장점**: 
  - 브라우저 연산 중 가장 비용이 큰 **Reflow와 Repaint 횟수를 획기적으로 줄여줍니다.**
  - 대규모의 동적인 인터페이스에서도 부드럽고 빠른 성능을 유지할 수 있습니다.

### (4) 컴포넌트 리렌더링 (Re-render) 조건
리액트 컴포넌트는 다음과 같은 상황에서 화면을 다시 그립니다.

1. **자신의 상태(State)가 변경될 때**
   - 예: 버튼을 클릭하여 `count` 상태를 0에서 1로 바꿈 → 컴포넌트 재실행
2. **부모로부터 전달받은 Props가 변경될 때**
   - 예: 부모가 자식에게 `<Child name="Kim" />`을 주다가 `<Child name="Lee" />`로 변경 → 자식 재실행
3. **부모 컴포넌트가 리렌더링될 때**
   - 예: 부모 컴포넌트의 내부 상태가 바뀌어 부모가 다시 그려지면, 자식 컴포넌트인 `Child`도 (Props가 바뀌지 않았더라도) 기본적으로 다시 그려짐

#### [구현 예시]

**Parent.jsx (부모 컴포넌트)**
```javascript
import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [parentCount, setParentCount] = useState(0);
  const [childName, setChildName] = useState("초기 이름");

  return (
    <div>
      {/* 1. 자신의 State 변경 -> Parent 리렌더링 */}
      <button onClick={() => setParentCount(parentCount + 1)}>부모 카운트 증가</button>
      
      {/* 2. Props 변경 -> Child 리렌더링 */}
      <button onClick={() => setChildName("변경된 이름")}>자식 이름 변경</button>

      {/* 3. 부모가 리렌더링되면 Child도 자동으로 리렌더링됨 */}
      <Child name={childName} />
    </div>
  );
}
```

**Child.jsx (자식 컴포넌트)**
```javascript
function Child({ name }) {
  console.log("자식 컴포넌트 렌더링됨!");
  return <div>내 이름은 {name}입니다.</div>;
}

export default Child;
```




---

## 6. 브라우저 성능의 핵심: Reflow와 Repaint

화면의 일부가 변경될 때 브라우저는 성능을 위해 최소한의 작업만 수행하려고 합니다. 이때 어떤 속성을 건드리느냐에 따라 발생하는 작업이 다릅니다.

### (1) Reflow (리플로우)
- **개념**: 생성된 DOM 노드의 **레이아웃(너비, 높이, 위치 등) 변경** 시, 브라우저가 영향받는 모든 노드의 기하학적 수치를 재계산하고 렌더 트리를 재생성하는 과정입니다.
- **특징**: 매우 비용이 큽니다. 자식 요소나 부모 요소, 형제 요소까지 줄줄이 영향을 받기 때문입니다.
- **언제 발생하는가? (예시)**:
  - 윈도우 리사이징 (화면 크기 조절)
  - 노드 추가 또는 삭제
  - 요소의 크기나 위치 변경 (`width`, `height`, `margin`, `padding`, `top`, `left`, `font-size` 등)

### (2) Repaint (리페인트)
- **개념**: 레이아웃에는 영향을 주지 않지만, **가시적인 스타일(색상 등)**만 바뀔 때 렌더 트리를 다시 화면에 그리는 과정입니다.
- **특징**: Reflow보다는 비용이 적지만, 여전히 브라우저의 자원을 소모합니다. (Reflow가 일어나면 반드시 Repaint도 뒤따라 일어납니다.)
- **언제 발생하는가? (예시)**:
  - 배경색 변경 (`background-color`)
  - 텍스트 색상 변경 (`color`)
  - 테두리 스타일 변경 (`border-radius`, `box-shadow`)
  - 요소 숨기기/보이기 (`visibility`)

### (3) 비교 예시
| 변경하는 속성 | Reflow 발생 | Repaint 발생 | 비고 |
| :--- | :---: | :---: | :--- |
| `width: 200px` | O | O | 크기가 변하므로 주변 요소 위치도 계산해야 함 |
| `color: red` | X | O | 기하학적 변화가 없으므로 색만 다시 입힘 |
| `visibility: hidden`| X | O | 요소가 공간은 차지하므로 Repaint만 발생 |
| `display: none` | O | O | 요소가 아예 사라지므로 레이아웃 재계산(Reflow) 발생 |

- **최적화 팁**: 성능을 위해서는 가급적 Reflow를 유발하는 속성보다는 Repaint만 유발하는 속성을 사용하는 것이 좋으며, 최신 브라우저에서는 GPU를 사용하는 `transform`, `opacity` 등을 활용해 두 과정을 모두 피하기도 합니다.

---

## 7. Vite: 차세대 프론트엔드 빌드 도구

Vite는 '빠르다'는 뜻의 프랑스어에서 유래했으며, 기존의 번들링 방식(Webpack 등)의 느린 속도를 해결하기 위해 등장했습니다.

### (1) Vite가 빠른 이유
1. **네이티브 ESM 활용**: 개발 환경에서 전체 프로젝트를 번들링(하나로 합치기)하지 않고, 브라우저가 필요한 모듈만 즉시 요청해서 가져오는 **Native ESM** 방식을 사용합니다.
2. **esbuild 사용**: 자바스크립트보다 훨씬 빠른 **Go 언어**로 작성된 `esbuild`를 사용하여 라이브러리를 미리 준비(Pre-bundling)합니다.

### (2) 주요 특징
- **초고속 HMR (Hot Module Replacement)**: 코드를 수정하면 전체 페이지를 새로고침하지 않고, **수정된 모듈만 즉시 교체**하여 반영합니다. 프로젝트 규모가 커져도 성능 저하가 거의 없습니다.
- **빠른 서버 시작**: 번들링 과정이 없으므로 개발 서버가 거의 즉시 실행됩니다.
- **최적화된 빌드**: 배포용 빌드 시에는 `Rollup`을 사용하여 매우 최적화된 결과물을 만들어냅니다.

### (3) 요약
- 과거에는 코드를 수정할 때마다 무거운 번들링 과정을 거쳐야 했지만, **Vite는 브라우저의 지능적인 모듈 요청 방식**을 활용하여 개발 생산성을 비약적으로 높여준 도구입니다.

### (4) Vite 설치 및 프로젝트 실행 순서

현대적인 React 개발 환경을 구축하는 가장 빠른 방법입니다.

1. **프로젝트 생성**: 터미널에서 아래 명령어를 입력합니다.
   ```bash
   npm create vite@latest 프로젝트명
   ```
   - 이후 프레임워크 선택(`React`), 언어 선택(`JavaScript`) 과정을 거칩니다.

2. **프로젝트 폴더로 이동**:
   ```bash
   cd 프로젝트명
   ```

3. **패키지(의존성) 설치**: `package.json`에 기록된 라이브러리들을 실제 설치합니다.
   ```bash
   npm install
   ```

4. **개발 서버 실행**: 개발 모드로 프로젝트를 실행합니다.
   ```bash
   npm run dev
   ```

5. **빌드 및 배포 (참고)**:
   - **빌드**: `npm run build` (최적화된 배포용 파일 생성)
   - **미리보기**: `npm run preview` (빌드된 파일을 미리 실행)






