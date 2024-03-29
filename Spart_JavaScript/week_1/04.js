// 블리언(Boolean)
// true(참), false(거짓)
let bool1 = true;
let bool2 = false;

console.log(bool1); // true
console.log(typeof bool1); // boolean
console.log(bool2); // false
console.log(typeof bool2); // boolean

// undefined
// un : not, define : 정의하다
let x;
console.log(x);

// null: 값이 존재하지 않음을 '명시적'으로 나타내는 방법
let y = null;
console.log(y); // null

// object(객체): key-value pair
let person = {
  name: "dae_ppang",
  age: 26,
  test: true,
};
console.log(typeof person); // object

// array(배열): 여러 개의 데이터를 순서대로 저장하는 데이터 타입!!!
let number = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
