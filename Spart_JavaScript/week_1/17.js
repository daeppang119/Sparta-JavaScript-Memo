// forEach, map, filter, find
// 매개변수 자리에 함수를 넣는 것 : 콜백 함수

let numbers = [1, 8, 6, 4, 2];

// forEach
numbers.forEach(function (item) {
  console.log(item);
  // 1
  // 8
  // 6
  // 4
  // 2
});

// map : 항상 원본 배열의 길이만큼이 return 된다.
let newNumbers = numbers.map(function (itme) {
  return itme * 2;
});

console.log(newNumbers); // [ 2, 16, 12, 8, 4 ]

// filter : 조건에 해당되는 것만 return해준다
let filterNumbers01 = numbers.filter(function (item) {
  return item !== 4;
});

console.log(filterNumbers01); // [ 4 ]

let filterNumbers02 = numbers.filter(function (item) {
  return item !== 4;
});

console.log(filterNumbers02); // [ 1, 8, 6, 2 ]

let filterNumbers03 = numbers.filter(function (item) {
  return item > 4;
});

console.log(filterNumbers03); // [ 8, 6 ]

// find
let findNumber = numbers.find(function (item) {
  return item > 3;
});

console.log(findNumber); // 8
