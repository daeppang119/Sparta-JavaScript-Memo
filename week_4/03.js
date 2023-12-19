// 무슨 제어권?
// 인자에 대한 제워권을 갖는다.
// map()
let newArr1 = [10, 20, 30].map((currentValue, index) => {
  console.log(currentValue, index);
  return currentValue + 5;
});

console.log(newArr1);

// index : 사람이 인해할 수 있는 변수명일 뿐..
// currentValue :사람이 인해할 수 있는 변수명일 뿐..
let newArr2 = [10, 20, 30].map((index, currentValue) => {
  console.log(index, currentValue);
  return currentValue + 5;
});

console.log(newArr2);
