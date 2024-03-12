// 연산자(+, -, *, /, %)

// 1. 더하기 연산자
console.log(1 + 1); // 2
console.log(1 + "1"); // 11

// 2. 빼기 연산자
console.log(1 - 1); // 0
console.log(1 - "1"); // 0

// 3. 곱하기 연산자
console.log(2 * 4); // 8
console.log(2 * "4"); // 8

// 4. 나누기 연산자
console.log(8 / 2); // 4
console.log(8 / "2"); // 4

// 5. 나누기 연산자(/) vs 나머지 연산자 (%)
console.log(5 / 2); // 2.5
console.log(5 % 2); // 1

// 6. 할당 연산자(assignment)
// 6-1. 등호 연산자(=)
let x = 10;
console.log(x); // 10

// 6-2. 더하기 등호 연산자(++)
x += 5; // x = x + 5;
console.log(x); // 15

x += 5;
console.log(x); // 20

// 6-3. 빼기 등호 연산자(-=)
x -= 5; // x = x - 5;
console.log(x); // 15

x -= 25;
console.log(x);

// 6-4. 곱하기 등호 연산자(*=)
let a = 10;

a *= 2;
console.log(a); // 20

// 비교 연산자(--> true or false를 반환하는 연산자)

// 1. 일치 연산자(===)
// 타입까지 일치해야 true를 반환하는 연산자

// 숫자 2가 숫자 2랑 같니? 응!
console.log(2 === 2); // true
console.log("2" === 2); // false

// 2. 불일치 연산자(!==)
// 타입까지 일치해야 false를 반환하는 연산자

// 숫자 2가 숫자 2와 다르니? 아니!
console.log(2 !== 2); // false
console.log("2" !== 2); // true

// 3. 작다 연산자(<)
console.log(2 < 4); // true
console.log(2 <= 4); // true
console.log(4 <= 4); // true
console.log(5 <= 4); // false

// 4. 논리 연산자
// 4-1. 논리곱 연산자: 모두가 ture일 때 ture 반환
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// 4-2. 논리합 연산자: 두 값 중 하나라도 true인 경우 true 반환
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// 4-3. 논리부정 연산자: 값을 반대로 바꿈
console.log(!true); // false
let c = true;
console.log(!c); // false

// 5. 삼항 연산자(중요!!): 조건에 따라 값을 선택한다.
let y = 10;
let result = y > 5 ? "크다" : "작다"; // 조건 ? "true이면 앞에 결정" : "false이면 뒤에 결정"
console.log(result); // 크다

let z = 20;
// 3항연산자를 이용해서 z가 10보다 작은 경우 작다를 console.log로 출력(10보다 크다면 크다를 출력)
let answer = z < 10 ? "작다" : "크다";
console.log(answer); // 크다

// 6. 타입연산자(typeof)
console.log(typeof "5"); // string
