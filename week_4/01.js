// 콜백함수 : 다른 코드의 인자로 넘겨주는 함수
setTimeout(() => {
  console.log("hello");
}, 1000);

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {
  console.log(number);
});
