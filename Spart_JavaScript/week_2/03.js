// 단축 속성명 : property shorthand
const name = "dae";
const age = "21";

// key-value
const obj = { name, age };
const obj1 = { name: name, age: age };

// 전개 구문 = spread operator
// destructuring과 함께 가장 많이 사용되는 es6문법 중 하나!
let arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]
console.log(...arr); // 1 2 3

// 객체
let user = {
  naem: "으이",
  age: 30,
};

let user2 = { ...user };

console.log(user); // { naem: '으이', age: 30 }
console.log(user2); // { naem: '으이', age: 30 }

// 나머지 매개변수(rest parameter)
function exampleFunc(a, b, c, ...args) {
  console.log(a, b, c); // 1 2 3
  console.log(args); // [ 4, 5, 6, 7 ]
  console.log(...args); // 4 5 6 7
}

exampleFunc(1, 2, 3, 4, 5, 6, 7);

// 템플릿 리터럴(Template Literal)
const testValue = "안녕하세요!";
console.log(`Hello World ${testValue}`); // Hello World 안녕하세요!
