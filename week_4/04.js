// this : 콜백함수도 함수이기 때문에 기본적으로 this가 전역 객체를 참조한다
// 제어권을 넘겨받을 코드에서 콜백 함수에 별도로 this가 될 대상을 지정한 경우에는 그 대상을 참조한다.
Array.prototype.map123 = (callback, thisArg) => {
  //   map함수에서 return할 결과 배열
  let mappedArr = [];

  for (let i = 0; i < this.length; i++) {
    let mappedValue = callback.call(thisArg || global, this[i]);
    mappedArr[i] = mappedValue;
  }
  return mappedArr;
};

let newArr = [1, 2, 3].map123((number) => {
  return number * 2;
});

console.log(newArr);
