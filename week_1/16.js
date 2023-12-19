// 배열

// 1. 생성
// 1-1. 기본 생성
let fruits = ['사과', '바나나', '오렌지'];
console.log(fruits.length); // 3

// 1-2. 크기 지정
let number = new Array(5);
console.log(number); // [ <5 empty items> ]

// 2. 요소 접근
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[2]); // 오렌지

// 3. 배열 메소드
// 3-1. push : 요소 추가
fruits.push('수박');
console.log(fruits); // [ '사과', '바나나', '오렌지', '수박' ]

// 3-2. pop : 마지막 요소 삭제
fruits.pop();
console.log(fruits); // [ '사과', '바나나', '오렌지' ]

// 3-3. shift : 첫번째 요소 삭제
fruits.shift();
console.log(fruits); // [ '바나나', '오렌지' ]

// 3-4. unshift : 첫번째 요소에 추가
fruits.unshift('패션후르츠');
console.log(fruits); // [ '패션후르츠', '바나나', '오렌지' ]

// 3-5. splice : 위치를 지정해서 어떠한 요소로 바꿔줘
fruits.splice(1, 1, '포도')
console.log(fruits); // [ '패션후르츠', '포도', '오렌지' ]

// 3-6. slice : 시작요소에서부터 반환요소 전까지
let slicedFruits = fruits.slice(1, 2);
console.log(slicedFruits); // [ '포도' ]



