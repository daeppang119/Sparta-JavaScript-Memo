// 데이터 타입
// runtime : run 하는 time
// 코드를 작성할 때가 아니라, 실제 코드가 실행될 때
// -> 터미널에 코드가 실행될 때
// 그 때, 데이터 타입이 결정된다.
// java : String a = "abd";
// const a = "abc";

// 1. 숫자
// 1-1. 정수
let num1 = 10;
console.log(num1); // 10
console.log(typeof num1); // number

// 1-2 실수(float)
let num2 = 3.14;
console.log(num2); // 3.14
console.log(typeof num2); // number

// 1-2 지수(Exp)
let num3 = 2.5e5; // 2.5 x 10^5
console.log(num3); // 250000
console.log(typeof num3); // number

// 1-4.
let num4 = "Hello" / 2;
console.log(num4); // NaN(Not a Number): 숫자가 아닐때 나타나는 현상

// 1-5. Infinity(무한대)
let num5 = 1 / 0;
console.log(num5); // Infinity
console.log(typeof num5); // number

// 1-6. Infinity(무한대)
let num6 = -1 / 0;
console.log(num6); // -Infinity
console.log(typeof num5); // number
