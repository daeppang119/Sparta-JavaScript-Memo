// [콜백 함수 내부의 this에 다른 값 바인딩하기]
// 콜백함수 내부에서 this가 문맥에 맞는 갠체를 바라보게 할 수는 없을까요?
// 콜백함수 내부의 this에 다른 값을 바인딩하는 방벙

// 결과만을 위한 코딩 => 하드코딩... 100점만점중 10점짜리 코딩
let obj1 = {
  name: "obj1",
  func: () => {
    console.log(obj1.name);
  },
};
setTimeout(obj1.func, 1000);

let obj2 = {
  name: "obj2",
  func: function () {
    let self = this;
    return function () {
      console.log(self.name);
    };
  },
};

let obj3 = {
  name: "obj3",
  func: obj2.func,
};

let callback = obj3.func();
setTimeout(callback, 1500);

let obj4 = { name: "obj4" };
let callback1 = obj2.func.call(obj4);
setTimeout(callback1, 2000);
