// 형 변환
// 형태 -> 바꾼다
// 명시적 형 변환(일부로 의도적으로 바꾼다), 암시적 형 변환(의도 하지 않았지만 자동으로 바뀐다)

// 1. 명시적
// 1-1. 문자열
let result1 = 1 + "2";
console.log(result1); // 12
console.log(typeof result1); // string

let result2 = "1" + true;
console.log(result2); // 1true
console.log(typeof result2); // string

// {}, null, nudefined + "1" => 문자열

// 1-2. 숫자: 더하기 연산자를 제외한 다른 연산자들은 숫자가 우선시된다
let result3 = 1 - "2";
console.log(result3); // -1
console.log(typeof result3); // number

let result4 = "2" * "4";
console.log(result4); // 8
console.log(typeof result4); // number

// 2. 명시적 형 변환
// 2-1. Boolean
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("false")); // true
console.log(Boolean({})); // true

// 2-2. 문자열
let result5 = String(123)
console.log(result5); // 123
console.log(typeof result5); // string

let result6 = String(true)
console.log(result6); // true
console.log(typeof result6); // string

let result7 = String(false)
console.log(result7); // false
console.log(typeof result7); // string

let result8 = String(null)
console.log(result8); // null
console.log(typeof result8); // string

let result9 = String(undefined)
console.log(result9); // undefined
console.log(typeof result9); // string1

// 1-3. number
let result10 = Number("123");
console.log(result10); // 123
console.log(typeof result10); // number