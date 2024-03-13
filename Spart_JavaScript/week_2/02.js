// 구조분해할당 : destructuring(de = structure + ing )
// de = not
// structure = 구조
// 배열이나, 객체의 속성

// (1) 배열의 경우
let [value1, value2] = [1, "new"];
console.log(value1); // 1
console.log(value2); // new

// (2) 객체인 경우
let { name, age } = {
  name: "yuna",
  age: 27,
};
console.log(name); // yuna
console.log(age); // 27

// 새로운 이름으로 할당
let user = {
  name: "dae_ppang",
  age: 24,
};
let { name: newName, age: newAge } = user;
console.log(newName); // dae_ppang
console.log(newAge); // 24
