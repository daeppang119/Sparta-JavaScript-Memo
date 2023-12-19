// 무슨 제어권?
// 1. 호출 시점에 대한 제어권을 갖는다.
// setInterval() 메서드는 반복해서 매개변수로 받은 콜백 함수의 로직을 수행
let count = 0;
let cbFunc = () => {
  console.log(count);
  if (++count > 4) clearInterval(timer);
};
// 호출주체와 제어권 모두 setInterval
let timer = setInterval(cbFunc, 300);
// 호출주체와 제어권 모두 사용자
// cbFunc();
