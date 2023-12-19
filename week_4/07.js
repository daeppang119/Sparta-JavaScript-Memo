// bind
let obj1 = {
  name: "obj1",
  func: () => {
    console.log(this.name);
  },
};
let boundObj1 = obj1.func.bind(obj1);
setTimeout(boundObj1, 1000);

let obj2 = { name: "obj2" };
setTimeout(obj1.func.bind(obj2), 1500);
